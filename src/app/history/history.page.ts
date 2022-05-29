import { Component, OnInit } from '@angular/core';
import History from '../model/history';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  public histories: any;
  userProfile: any;
  historyCount: number;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getHistory();
  }

  constructor(
      private authService: AuthService,
      private firestore: AngularFirestore,
      private router: Router,
      private navCtrl: NavController
  ) { }

  getHistory() {
    this.authService.getUserData().subscribe(res => {
      this.userProfile = res;
      this.firestore.collection<History>('history').ref.where('email', '==', this.userProfile.email).orderBy('tanggal', 'desc').get().then((ref) => {
        let results = ref.docs.map(doc => doc.data());
        if (results.length > 0) {
          this.histories = results;
        }
        else {
          this.historyCount = 0;
        }
      });
    });
  }

  goToHistoryDetail(id) {
    this.firestore.collection('history').doc<History>(id).update({
      open: true
    });
    this.router.navigate([`/history-detail/${id}`]);
  }

  popView(){
    this.router.navigate(['/menu/tabs/home']);
  }

}
