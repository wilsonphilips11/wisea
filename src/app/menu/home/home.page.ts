import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from 'src/app/service/auth.service';
import {Wisata} from "../../model/wisata.interface";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userProfile: any;
  historyCount: number;
  currentUser: string;
  
  constructor(
    private firestore:AngularFirestore,
    private authService: AuthService
  ) {}

  ionViewWillEnter() {
    this.authService.getUserData().subscribe(res => {
      this.userProfile = res;
      this.firestore.collection<Wisata>('history', ref => {
        return ref.where('email', '==', this.userProfile.email).where('open', '==', false);
      }).valueChanges().subscribe(res => {
        this.historyCount = res.length;
      });
    });

    this.authService.getUserData().subscribe(ref => {
      this.userProfile = ref;
      this.currentUser = this.userProfile.name;
    });
  }
}
