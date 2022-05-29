import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CameraResultType, Plugins} from '@capacitor/core';
import {AppComponent} from "../../../app.component";

const { Camera } = Plugins;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  form: FormGroup;
  userProfile: any;
  passwordHide = true;
  photo: any = {
    userPhoto: '',
    oldPhoto: '',
    oldPhotoName: '',
    base64Photo: '',
  };

  constructor(
      private authService: AuthService,
      private loadingController: LoadingController,
      private alertController: AlertController,
      private router: Router,
      private appComponent: AppComponent
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.getUserData().subscribe(ref => {
      this.authService.getUserPhotoUrl(ref.photo).subscribe(res => {
        loading.dismiss();

        this.userProfile = ref;
        this.photo.userPhoto = res;
        this.photo.oldPhoto = res;
        this.photo.base64Photo = res;
        this.photo.oldPhotoName = ref.photo;
      });
    });

    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      }),
      phone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(12)]
      }),
      photo: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      newPassword: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(6)]
      }),
    });
  }

  async takePicture() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.photo.base64Photo = profilePicture.base64String;
      this.photo.userPhoto = 'data:image/png;base64,' + this.photo.base64Photo;
    } catch (error) {
    }
  }

  async edit(confirmPassword) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.form.value.photo = this.photo.userPhoto;

    await this.authService.editUserData(this.form.value, confirmPassword, this.photo).then(() => {
      this.appComponent.updateUserProfile();
      loading.dismiss();
      this.router.navigateByUrl('/menu/tabs/profile', { replaceUrl: true });
    }, async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Edit profile gagal',
        message: err.message,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }

  async confirmationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi perubahan data diri',
      subHeader: 'Silahkan masukkan password anda.',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          cssClass: 'specialClass',
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.edit(data.password);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ]
    });

    await alert.present();
  }
}
