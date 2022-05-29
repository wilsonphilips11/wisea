import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {ConfirmPasswordValidator} from '../../register/confirm-password.validator';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.page.html',
  styleUrls: ['./email-confirmation.page.scss'],
})
export class EmailConfirmationPage implements OnInit {
  confirmPasswordForm: FormGroup;
  confirmHide = true;
  passwordHide = true;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private route: ActivatedRoute,
      private loadingController: LoadingController,
      private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.confirmPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validator: ConfirmPasswordValidator('password', 'confirm'),
    });
  }

  async confirm() {
    const loading = await this.loadingController.create();
    await loading.present();

    const password = this.confirmPasswordForm.value.password;
    const code = this.route.snapshot.queryParams.oobCode;
    console.log('OOB Code: ', code);

    this.authService.confirmResetPassword(code, password).then(() => {
      loading.dismiss();
      this.presentAlert('Konfirmasi password baru berhasil!', 'Silahkan login kembali menggunakan password baru');
      this.authService.logout().then(() => {
        this.router.navigateByUrl('/login', { replaceUrl: true });
      });
    }, async err => {
      loading.dismiss();
      this.presentAlert('Konfirmasi password baru gagal', err.message);
    });
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
