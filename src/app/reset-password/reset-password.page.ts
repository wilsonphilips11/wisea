import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private loadingController: LoadingController,
      private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
    });
  }

  async reset() {
    const loading = await this.loadingController.create();
    await loading.present();

    const phone = this.resetPasswordForm.value.phone;

    this.authService.checkAvailablePhone(phone).subscribe((res: object) => {
        console.log('Inputted phone number\'s data: ', res[0]);
        const userPhone = res[0].phone;
        const userEmail = res[0].email;

        if (userPhone === phone) {
              this.authService.resetPassword(userEmail).then(() => {
                  loading.dismiss();
               this.presentAlert('Reset password sukses!', 'Silahkan mengkonfirmasi pesan yang telah dikirimkan melalui email anda');
               this.router.navigateByUrl('/login', { replaceUrl: true });
            }, async err => {
               loading.dismiss();
                  this.presentAlert('Reset password gagal', err.message);
            });
        } else {
              loading.dismiss();
            this.presentAlert('Reset password gagal', 'Nomor yang dimasukkan tidak terdaftar');
        }
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
