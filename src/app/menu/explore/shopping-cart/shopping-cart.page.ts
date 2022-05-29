import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WisataDetail } from '../../../model/wisata-detail.interface';
import { UserData } from '../../../model/user.model';
import { WisataService } from '../../../service/wisata.service';
import { AuthService, User } from '../../../service/auth.service';
import { HistoryService } from 'src/app/service/history.service';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from "@angular/fire/storage";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  public wisataList: Observable<WisataDetail>
  public imageDetail: Observable<string>;
  public shopCart = new Observable<History>();
  public shopForm: FormGroup;
  cartItems: any[] = [];
  total: number;
  qty: number;
  max: number;
  harga: number;
  wisata: string;
  wisataId: string;
  oldTiketTerjual: number;
  oldTiketTersedia: number;
  oldBalance: number;
  userProfile: any;
  paid: Boolean = false;
  public nama: any = [];

  constructor(
    private route: ActivatedRoute,
    private wisataService: WisataService,
    private storage: AngularFireStorage,
    formBuilder: FormBuilder,
    private authService: AuthService,
    private historyService: HistoryService,
    private firestore: AngularFirestore,
    private toastController: ToastController,
  ) {
    this.shopForm = formBuilder.group({
      nik: ['', Validators.required],
      tlp: ['', Validators.required],
      qty: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.wisataId = this.route.snapshot.paramMap.get('id');
    this.wisataList = this.wisataService.getWisataDetail(this.wisataId).pipe(
      map(wisataList => {
        this.imageDetail = new Observable<string>();
        wisataList.gambarUrl = new Observable<string[]>();
        wisataList.gambar.forEach((gambar, index) => {
          this.imageDetail[index] = this.getImageUrl(gambar);
        });
        this.max = wisataList.tiketTersedia;
        this.harga = wisataList.harga;
        this.total = this.harga;
        this.qty = 1;
        this.wisata = wisataList.nama;
        this.oldTiketTerjual = wisataList.tiketTerjual;
        this.oldTiketTersedia = wisataList.tiketTersedia;
        return wisataList;
      })
    );
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  incrementQty() {
    this.qty++;
    this.total = this.qty * this.harga;
    if(this.qty > this.max) {
      this.qty = this.max;
    }
  }

  decrementQty() {
    this.qty--;
    this.total = this.qty * this.harga;
    if(this.qty < 1) {
      this.qty = 1;
      this.total = this.harga;
    }
  }

  shopping() {
    const qty = this.shopForm.value.qty;
    const nik = this.shopForm.value.nik;
    const tlp = this.shopForm.value.tlp;
    const date = new Date();

    this.authService.getUserData().subscribe(ref => {
      this.userProfile = ref;
      this.oldBalance = this.userProfile.balance;
      const email = this.userProfile.email;

      if(this.paid === false){
        if(this.oldBalance < this.total || this.oldTiketTersedia < this.qty) {
          this.presentToast();
        } else if(!this.paid){
            this.firestore.collection('wisata').doc<WisataDetail>(this.wisataId).update({
              tiketTerjual: (this.oldTiketTerjual + qty),
              tiketTersedia: (this.oldTiketTersedia - qty)
            });

            this.firestore.collection('users').doc<UserData>(this.userProfile.uid).update({
              balance: (this.oldBalance - this.total)
            });

            this.historyService.addHistory(qty, this.userProfile.name, date, this.wisata, this.total, email, tlp, false, nik)
            this.paid = true;
        }
    }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Saldo anda tidak cukup.',
      duration: 2000,
      color: 'danger',
      position: 'top',
      mode: 'ios'
    });
    toast.present();
  }

}
