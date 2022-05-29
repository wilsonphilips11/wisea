import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { WisataService } from 'src/app/service/wisata.service';
import { map } from 'rxjs/operators';
import { Wisata } from 'src/app/model/wisata.interface';
import { getLocaleDateFormat } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recommendation-result',
  templateUrl: './recommendation-result.page.html',
  styleUrls: ['./recommendation-result.page.scss'],
})
export class RecommendationResultPage implements OnInit {
  public budget: string;
  public time: any;
  public category: string;
  public location: string;
  p1; p2; p3; p4;
  public recommendResult: Wisata[];
  public array: any;
  public waktu: string[];
  public message: string;
  wisata: Boolean = true;

  public wisataList: Observable<Wisata[]>;

  constructor(
    private router: Router, 
    private storage: Storage, 
    private toastController: ToastController,
    private wisataService: WisataService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit() {  
    this.recommendResult = [];
    this.message = null; 
  }

  ionViewWillEnter(){
    this.recommendResult = [];
    this.message = null;
    this.getLocalData();

    this.p1 = this.storage.get('budget');
    this.p2 = this.storage.get('time');
    this.p3 = this.storage.get('category');
    this.p4 = this.storage.get('location');

    this.array = Promise.all([this.p1,this.p2, this.p3, this.p4]).then(arr => {
      // checking 
      if(arr[0] == null){
        this.presentToast();
        this.router.navigate(['/recommendation1']);
      }
      else if(!arr[1]){
        this.presentToast();
        this.router.navigate(['/recommendation2']);
      }
      else if(!arr[2]){
        this.presentToast();
        this.router.navigate(['/recommendation3']);
      }
      else if(!arr[3]){
        this.presentToast();
        this.router.navigate(['/recommendation4']);
      }

      this.wisataService.getWisata().subscribe(res => 
        res.map(m => {
          this.waktu = m.jam.split("-");

          if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'pagi' && arr[0] == 'less'){
            if(m.harga <= 100000 && (this.waktu[0]  >= '05:00' && this.waktu[0] < '10:00') || (this.waktu[1] >= '05:00' && this.waktu[1] < '10:00')){         
              console.log('pagi');
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'siang' && arr[0] == 'less'){
            if(m.harga <= 100000 && (this.waktu[0]  >= '10:00' && this.waktu[0] < '16:00') || (this.waktu[1] >= '10:00' && this.waktu[1] < '16:00')){         
              console.log('siang');
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'sore' && arr[0] == 'less'){
            if(m.harga <= 100000 && (this.waktu[0]  >= '16:00' && this.waktu[0] < '20:00') || (this.waktu[1] >= '16:00' && this.waktu[1] < '20:00')){           
              console.log('sore');
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'malam' && arr[0] == 'less'){
            if(m.harga <= 100000 && (this.waktu[0]  >= '20:00' && (this.waktu[0] <= '24:00' && this.waktu[0] >= '00:00' && this.waktu[0] > '05:00')) || (this.waktu[1] >= '20:00' && (this.waktu[1] <= '24:00' && this.waktu[1] >= '00:00' && this.waktu[1] > '05:00'))){
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            } 
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'pagi' && arr[0] == 'more'){
            if(m.harga > 100000 && (this.waktu[0]  >= '05:00' && this.waktu[0] < '10:00') || (this.waktu[1] >= '05:00' && this.waktu[1] < '10:00')){
              console.log('pagi');
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'siang' && arr[0] == 'more'){
            if(m.harga > 100000 && (this.waktu[0]  >= '10:00' && this.waktu[0] < '16:00') || (this.waktu[1] >= '10:00' && this.waktu[1] < '16:00')){
              console.log('siang');
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'sore' && arr[0] == 'more'){
            if(m.harga > 100000 && (this.waktu[0]  >= '16:00' && this.waktu[0] < '20:00') || (this.waktu[1] >= '16:00' && this.waktu[1] < '20:00')){
              console.log('sore');
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            }
          }
          else if(m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'malam' && arr[0] == 'more'){
            if(m.harga > 100000 && (this.waktu[0]  >= '20:00' && (this.waktu[0] <= '24:00' && this.waktu[0] >= '00:00' && this.waktu[0] > '05:00')) || (this.waktu[1] >= '20:00' && (this.waktu[1] <= '24:00' && this.waktu[1] >= '00:00' && this.waktu[1] > '05:00'))){
              m.gambarUrl = this.getImageUrl(m.gambar[0]);
              this.recommendResult.push(m);
            } 
          }
          else{
            this.message = 'data tidak ada';
            this.wisata = false;
          }
        })
      );
    });

    console.log(this.recommendResult);
  }

  getLocalData(){
    this.storage.get('budget').then((val) => {
      this.budget = val;
    });
    this.storage.get('time').then((val) => {
      this.time = val;
    });
    this.storage.get('category').then((val) => {
      this.category = val;
    });
    this.storage.get('location').then((val) => {
      this.location = val;
    });      
    
  }
  
  getImageUrl(imageName) {
    return this.fireStorage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  tryAgain(){
    this.storage.clear();
    this.router.navigate(['./menu/tabs/home']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pilih dahulu opsi berikut.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
