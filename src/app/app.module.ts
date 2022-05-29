import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// using Ionic Storage (Local Storage)
import { IonicStorageModule } from '@ionic/storage';

// using firebase store
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { firebaseConfig } from './credentials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthService} from "./service/auth.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
