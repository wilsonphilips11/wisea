import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation3',
  templateUrl: './recommendation3.page.html',
  styleUrls: ['./recommendation3.page.scss'],
})
export class Recommendation3Page implements OnInit {

  constructor(private router: Router, private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('time').then((val) => {
      if(!val){
        this.presentToast();
        this.router.navigate(['/recommendation2']);
      }
    });
  }

  
  showInput(event, category){
    console.log(category);
    this.storage.set('category', category);
    this.router.navigate(['/recommendation4']);
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
