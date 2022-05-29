import {Component, OnInit} from '@angular/core';
import {WisataService} from '../../service/wisata.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {map, tap} from 'rxjs/operators';
import {Wisata} from '../../model/wisata.interface';
import {LoadingController, NavController} from '@ionic/angular';
import {DatabaseService} from '../../service/database.service';
import { IonSlides } from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  public pertunjukanList: Observable<Wisata[]>;
  public museumList: Observable<Wisata[]>;
  public workshopList: Observable<Wisata[]>;
  loading: HTMLIonLoadingElement;
  userProfile: any;
  historyCount: number;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
      private authService: AuthService,
      private wisataService: WisataService,
      private storage: AngularFireStorage,
      private navCtrl: NavController,
      private loadingController: LoadingController,
      private databaseService: DatabaseService,
      private firestore: AngularFirestore,
  ) {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.pertunjukanList = this.wisataService.getWisata('pertunjukan').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );
    this.museumList = this.wisataService.getWisata('museum').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );
    this.workshopList = this.wisataService.getWisata('workshop').pipe(
        map(wisataList => wisataList.map(wisata => {
          wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
          return wisata;
        }))
    );

    await this.authService.getPromiseUserData().then((user: any) => {
        this.userProfile = user;
        loading.dismiss();
    });

    this.firestore.collection<Wisata>('history', ref => {
        return ref.where('email', '==', this.userProfile.email).where('open', '==', false);
    }).valueChanges().subscribe(res => {
        this.historyCount = res.length;
    });
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  goToListItem($event, order) {
    this.navCtrl.navigateForward(`/menu/tabs/explore/list-item/${order}`);
  }

}
