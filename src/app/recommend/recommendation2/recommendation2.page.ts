import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation2',
  templateUrl: './recommendation2.page.html',
  styleUrls: ['./recommendation2.page.scss'],
})
export class Recommendation2Page implements OnInit {

  constructor(private router: Router, private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('budget').then((val) => {
      if(!val){
        this.presentToast();
        this.router.navigate(['/recommendation1']);
      }
    });
  }

  time(event, time){
    console.log(time);
    this.storage.set('time', time);
    this.router.navigate(['/recommendation3']);
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
