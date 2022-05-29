import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GestureController, Platform} from "@ionic/angular";
import {WisataDetail} from "../../model/wisata-detail.interface";
import {Observable} from "rxjs";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements AfterViewInit {
  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef; // membaca element drawer
  @Input() wisataDetail: Observable<WisataDetail>;
  @Input() disabledBtn: Boolean
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter(); // mengirim informasi bahwa drawer dinaikkan ke parent, agar backdrop menyala

  isOpen = false;
  openHeight = 0; // agar secara dinamis membatasi tinggi drawer ketika dinaikkan

  constructor(
      private plt: Platform,
      private gestureCtrl: GestureController
  ) { }

  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() / 100) * 45;

    const gesture = await this.gestureCtrl.create({
      el: drawer, // element untuk di-apply gesture
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        if (ev.deltaY < -this.openHeight) return; // ketika mencapai batas atas, berhenti
        if (ev.deltaY > -this.openHeight) return; // ketika mencapai batas bawah, berhenti
        drawer.style.transform = `translateY(${ev.deltaY}px)`; // translateY menggunakan event deltaY, yaitu seberapa jauh gesture naik ke atas
      },
      onEnd: ev => {
        if (ev.deltaY < -20 && !this.isOpen) { // dengan sedikit gesture, bisa naikin drawer ke atas
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px)`;
          this.openState.emit(true);
          this.isOpen = true;
        } else if (ev.deltaY > -20 && this.isOpen) { // dengan sedikit gesture, bisa turunin drawer ke bawah
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = ``;
          this.openState.emit(false);
          this.isOpen = false;
        }
      }
    });
    gesture.enable(true);
  }

  toggleDrawer() { // ketika click di icon untuk toggle
    // menaikkan drawer dan menampilkan backdrop
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if (!this.isOpen) { // naikkan drawer ke atas
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    } else if (this.isOpen) { // turunin drawer ke bawah
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = ``;
      this.isOpen = false;
    }
  }

}
