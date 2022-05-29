import { Component, OnInit } from '@angular/core';
import {WisataService} from '../../../service/wisata.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {Wisata} from '../../../model/wisata.interface';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";
import {Geolocation, GeolocationPosition} from "@capacitor/core";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  public wisataList: Wisata[];
  public wisataFilter: Wisata[];
  userLocation: any;

  constructor(
      private wisataService: WisataService,
      private storage: AngularFireStorage,
      private router: Router,
      private route: ActivatedRoute,
      private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    const order = this.route.snapshot.paramMap.get('order');
    this.getWisataList(order);

    loading.dismiss();
  }

  getWisataList(order = null) {
    this.wisataService.getWisata(null, order).pipe(
        map(async wisataList => {
          wisataList.map(wisata => {
            wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
            return wisata;
          });

          wisataList = await this.applyHaversine(wisataList);

          if (order === 'near-me') {
            wisataList.sort((wisataA, wisataB) => {
              return wisataA.distance - wisataB.distance;
            });
          } else if (order === 'latest') {
            wisataList.sort((wisataA, wisataB) => {
              return new Date(wisataB.tanggal).getTime() - new Date(wisataA.tanggal).getTime();
            });
          }

          return wisataList;
        })
    ).subscribe(async wisataList => {
      this.wisataList = await wisataList;
      this.wisataFilter = await wisataList;
    });
  }

  getImageUrl(imageName) {
    return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
  }

  async searchWisata($event) {
    const searchTerm = $event.srcElement.value;
    if (!searchTerm) {
      this.wisataFilter = this.wisataList;
      return;
    }
    this.wisataFilter = this.wisataList.filter(wisata => {
      if (wisata.nama && searchTerm) {
        return (wisata.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  goToExploreDetail(wisataId) {
    this.router.navigate(['menu/tabs/explore/explore-detail', wisataId]);
  }

  async applyHaversine(wisataList){
    await this.getCurrentPosition().then((coordinates) => {
      this.userLocation = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
    });

    wisataList.map((wisata) => {
      const placeLocation = {
        lat: wisata.position[0],
        lng: wisata.position[1]
      };

      wisata.distance = this.getDistanceBetweenPoints(this.userLocation, placeLocation, 'km').toFixed(2);
    });

    return wisataList;
  }

  async getCurrentPosition() {
    return await Geolocation.getCurrentPosition();
  }

  getDistanceBetweenPoints(start, end, units){
    const earthRadius = {
      miles: 3958.8,
      km: 6371
    };

    const R = earthRadius[units || 'miles'];
    const lat1 = start.lat;
    const lon1 = start.lng;
    const lat2 = end.lat;
    const lon2 = end.lng;

    const dLat = this.toRad((lat2 - lat1));
    const dLon = this.toRad((lon2 - lon1));
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d;
  }

  toRad(x){
    return x * Math.PI / 180;
  }

}
