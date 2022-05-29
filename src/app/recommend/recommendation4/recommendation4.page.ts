import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation4',
  templateUrl: './recommendation4.page.html',
  styleUrls: ['./recommendation4.page.scss'],
})
export class Recommendation4Page implements OnInit {

  constructor(private router: Router, private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('category').then((val) => {
      if(!val){
        this.presentToast();
        this.router.navigate(['/recommendation3']);
      }
    });
  }

  maps(event, location){
    console.log(location);
    this.storage.set('location', location);
    this.router.navigate(['/recommendation-result'])
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
