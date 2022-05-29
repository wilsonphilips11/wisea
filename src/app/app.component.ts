import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  userProfile: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private navController: NavController,
  ) {
    // this.authService.userAuth.onAuthStateChanged(user => {
    //   if (user) {
    //     console.log(user);
    //     this.initializeApp();
    //   }
    // });
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menuRadius();
    });

    this.authService.userAuth.onAuthStateChanged(async (user) => {
      if (user) {
        await this.updateUserProfile();
      }
    });
  }

  async updateUserProfile() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.getPromisePhotoUserData().then((obs: any) => {
      obs.subscribe(ref => {
        this.authService.getUserPhotoUrl(ref.photo).subscribe(res => {
          this.userProfile = ref;
          this.userProfile.photo = res;
          loading.dismiss();
        });
      });
    });
  }

  menuRadius() {
    setTimeout(() => {
      document.querySelector('ion-menu').shadowRoot.querySelector('.menu-inner').setAttribute('style', 'border-radius:0px 30px 30px 0px');
    }, 200);
  }

  async logout() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.authService.logout().then(() => {
      loading.dismiss();
    });
    return this.navController.navigateRoot('/', { replaceUrl: true });
  }

  async logoutAlert() {
    const alert = await this.alertController.create({
      cssClass: 'logout-alert',
      header: 'Logout',
      // subHeader: 'Yahh... Yakin nih mau keluar?',
      message: `
                <p>Yakin ingin keluar?</p>
                <img src="../assets/login/logout.svg"></img>`,
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ya',
          handler: () => {
            this.logout();
          }
        }
      ],
    });

    await alert.present();
  }

  async ngOnInit() {
  }
}
