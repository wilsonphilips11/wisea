import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Geolocation, Plugins} from '@capacitor/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

declare var google;

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.page.html',
  styleUrls: ['./map-location.page.scss'],
})
export class MapLocationPage implements OnInit {
  lat: number;
  long: number;

  // Map related
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];

  constructor(
      private route: ActivatedRoute,
      public navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.lat = parseFloat(this.route.snapshot.paramMap.get('lat'));
    this.long = parseFloat(this.route.snapshot.paramMap.get('long'));
  }

  ionViewWillEnter() {
    this.loadMap();
  }

  // Initialize a blank map
  loadMap() {
    const latLng = new google.maps.LatLng(this.lat, this.long);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.markers = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    const cityCircle = new google.maps.Circle({
      strokeColor: "#fffb00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFF5DA",
      fillOpacity: 0.35,
      map: this.map,
      center: latLng,
      radius: 400,
    });
  }

  popView(){
    this.navCtrl.pop();
  }

}
