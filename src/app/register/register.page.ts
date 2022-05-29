import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {ConfirmPasswordValidator} from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentialForm: FormGroup;
  confirmHide = true;
  passwordHide = true;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private alertController: AlertController,
      private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.credentialForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
    }, {
      validator: ConfirmPasswordValidator('password', 'confirm'),
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.register(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/menu/tabs/home', { replaceUrl: true });
    }, async err => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Registrasi akun gagal',
        message: err.message,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }
}
