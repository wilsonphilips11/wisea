import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Wisata} from '../model/wisata.interface';
import {WisataDetail} from '../model/wisata-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class WisataService {

  constructor(
      private firestore: AngularFirestore
  ) { }

  getWisata(category = null, order = null): Observable<Wisata[]> {
    return this.firestore.collection<Wisata>('wisata', ref => {
      if (category) {
        return ref.where('kategori', '==', category);
      }
      if (order) {
        if (order === 'trending') {
          return ref.orderBy('tiketTerjual', 'desc');
        } else if (order === 'latest') {
          return ref;
        } else if (order === 'low-budget') {
          return ref.orderBy('harga');
        } else if (order === 'near-me') {
          return ref;
        }
      }
      return ref;
    }).valueChanges();
  }

  getWisataDetail(wisataId): Observable<WisataDetail> {
    return this.firestore.collection('wisata').doc<WisataDetail>(wisataId).valueChanges();
  }
}
