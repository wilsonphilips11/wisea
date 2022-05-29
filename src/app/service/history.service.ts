import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// mail
import '../../assets/js/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  addHistory(jumlah: number, nama: string, tanggal: Date, tiket: string, total: number, email: string, tlp: string, open: boolean, nik: number){ 
    const id = this.firestore.createId();
    const status = 'terbayar'

    this.router.navigate([`/payment-summary/${id}`]);

    // sent to mail
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'wiseawisea1@gmail.com',
      Password : '6942257CEC67FAFE3B2218395345D90C4D47',
      To : email,
      From : 'wiseawisea1@gmail.com',
      Subject : 'Wisea payment success &#128525;',
      Body : 'Hi, '+ nama + '&#128521; <br> Thankyou for #ngeBolang with us ! &#10024; <br> Your ' + '<strong>'+ tiket +' ticket are paid.</strong>'+ ' Detail payment: <br>' +
      '<br><strong>Personal Detail</strong><br>'+
      'Email   : '+ email + '<br>'+
      'Phone   : '+tlp+'<br><br>'+
      '<hr>'+
      '<table><tr><td><strong>Item</strong></td><td></td><td><strong>Qty</strong></td><td></td><td><strong>Sub Total</strong></td></tr><tr><td>'+tiket+'</td><td></td><td>'+jumlah+'</td><td></td><td>Rp'+total+'</td></tr><tr><td></td><td></td><td><strong>Total</strong></td><td></td><td><strong>Rp'+total+'</strong></td></tr></table>'+
      '<p><strong>Thank you for your purchase!</strong> Happy #ngeBolang ! &#127752;</p>'
    })

    return this.firestore.doc(`history/${id}`).set({
      jumlah,
      nama,
      status,
      tanggal,
      tiket,
      total,
      email,
      tlp,
      open,
      id
    });
  }

  getHistoryDetail(id) {
    return this.firestore.collection('history').doc<History>(id).valueChanges();
  }
}
