import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {WisataDetail} from '../model/wisata-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private wisataList: any[] = [
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['pertunjukan-wayang-kulit-1.jpg', 'pertunjukan-wayang-kulit-2.jpg'],
        harga: 50000,
        jam: '10:00-11:00',
        kategori: 'pertunjukan',
        kota: 'Yogyakarta',
        lokasi: 'Gedung Kesenian Kota Yogyakarta',
        nama: 'Pertunjukan Wayang Kulit',
        tanggal: '2020-11-01',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'jateng',
        position: [7.7956, 110.3695]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['tari-barong-1.jpg', 'tari-barong-2.jpg'],
        harga: 60000,
        jam: '11:00-12:00',
        kategori: 'pertunjukan',
        kota: 'Denpasar',
        lokasi: 'Gedung Kesenian Kota Denpasar',
        nama: 'Tari Barong',
        tanggal: '2020-11-02',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'bali',
        position: [8.6705, 115.2126]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['tari-hudoq-1.jpg', 'tari-hudoq-2.jpg'],
        harga: 70000,
        jam: '12:00-13:00',
        kategori: 'pertunjukan',
        kota: 'Samarinda',
        lokasi: 'Gedung Kesenian Kota Samarinda',
        nama: 'Tari Hudoq',
        tanggal: '2020-11-03',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'kaltim',
        position: [0.5016, 117.1265]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['tari-musyoh-1.jpg', 'tari-musyoh-2.jpg'],
        harga: 80000,
        jam: '13:00-14:00',
        kategori: 'pertunjukan',
        kota: 'Jayapura',
        lokasi: 'Gedung Kesenian Kota Jayapura',
        nama: 'Tari Musyoh',
        tanggal: '2020-11-04',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'papua',
        position: [2.5916, 140.6690]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['teater-randai-1.jpg', 'teater-randai-2.jpg'],
        harga: 90000,
        jam: '14:00-15:00',
        kategori: 'pertunjukan',
        kota: 'Padang',
        lokasi: 'Gedung Kesenian Kota Padang',
        nama: 'Teater Randai',
        tanggal: '2020-11-05',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'sumbar',
        position: [0.9471, 100.4172]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['museum-buntu-kalando-1.jpg', 'museum-buntu-kalando-2.jpg'],
        harga: 100000,
        jam: '10:00-17:00',
        kategori: 'museum',
        kota: 'Toraja',
        lokasi: 'Musuem Buntu Kalando',
        nama: 'Musuem Buntu Kalando',
        tanggal: '2020-11-06',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'sulsel',
        position: [3.0753, 119.7426]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['museum-gajah-1.jpg', 'museum-gajah-2.jpg'],
        harga: 110000,
        jam: '10:00-17:00',
        kategori: 'museum',
        kota: 'DKI Jakarta',
        lokasi: 'Museum Gajah',
        nama: 'Museum Gajah',
        tanggal: '2020-11-07',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'jakarta',
        position: [6.2088, 106.8456]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['museum-konferensi-asia-afrika-1.jpg', 'museum-konferensi-asia-afrika-1-2.jpg'],
        harga: 120000,
        jam: '10:00-17:00',
        kategori: 'museum',
        kota: 'Bandung',
        lokasi: 'Museum Konferensi Asia Afrika',
        nama: 'Museum Konferensi Asia Afrika',
        tanggal: '2020-11-08',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'jabar',
        position: [6.9175, 107.6191]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['museum-tsunami-1.jpg', 'museum-tsunami-2.jpg'],
        harga: 130000,
        jam: '10:00-17:00',
        kategori: 'museum',
        kota: 'Banda Aceh',
        lokasi: 'Museum Tsunami',
        nama: 'Museum Tsunami',
        tanggal: '2020-11-09',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'aceh',
        position: [5.5483, 95.3238]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['museum-house-of-sampoerna-1.jpg', 'museum-house-of-sampoerna-2.jpg'],
        harga: 140000,
        jam: '10:00-17:00',
        kategori: 'museum',
        kota: 'Surabaya',
        lokasi: 'Museum House Of Sampoerna',
        nama: 'Museum House Of Sampoerna',
        tanggal: '2020-11-10',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'jatim',
        position: [7.2575, 112.7521]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['workshop-kerajinan-perak-1.jpg', 'workshop-kerajinan-perak-2.jpg'],
        harga: 150000,
        jam: '17:00-18:00',
        kategori: 'workshop',
        kota: 'Yogyakarta',
        lokasi: 'Gedung Kesenian Kota Yogyakarta',
        nama: 'Workshop Kerajinan Perak',
        tanggal: '2020-11-11',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'jateng',
        position: [7.7956, 110.3695]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['workshop-memahat-patung-1.jpg', 'workshop-memahat-patung-2.jpg'],
        harga: 160000,
        jam: '18:00-19:00',
        kategori: 'workshop',
        kota: 'Pontianak',
        lokasi: 'Gedung Kesenian Kota Pontianak',
        nama: 'Workshop Memahat Patung',
        tanggal: '2020-11-12',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'kalbar',
        position: [0.0263, 109.3425]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['workshop-membatik-1.jpg', 'workshop-membatik-2.jpg'],
        harga: 170000,
        jam: '19:00-20:00',
        kategori: 'workshop',
        kota: 'Makassar',
        lokasi: 'Gedung Kesenian Kota Makassar',
        nama: 'Workshop Membatik',
        tanggal: '2020-11-13',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'sulsel',
        position: [5.1477, 119.4327]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['workshop-nganyam-rotan-1.jpg', 'workshop-nganyam-rotan-2.jpg'],
        harga: 180000,
        jam: '20:00-21:00',
        kategori: 'workshop',
        kota: 'Jambi',
        lokasi: 'Gedung Kesenian Kota Jambi',
        nama: 'Workshop Nganyam Rotan',
        tanggal: '2020-11-14',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'jambi',
        position: [1.6101, 103.6131]
    },
    {
        id: '',
        deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        gambar: ['workshop-tari-1.jpg', 'workshop-tari-2.jpg'],
        harga: 100000,
        jam: '21:00-22:00',
        kategori: 'workshop',
        kota: 'Ambon',
        lokasi: 'Gedung Kesenian Kota Ambon',
        nama: 'Workshop Tari',
        tanggal: '2020-11-15',
        tiketTerjual: 50,
        tiketTersedia: 100,
        daerah: 'maluku',
        position: [3.6387, 128.1689]
    },
  ];

  constructor(
      private firestore: AngularFirestore
  ) { }

  createWisataList(): Promise<void> {
    this.wisataList.forEach(wisata => {
      wisata.id = this.firestore.createId();
      this.firestore.collection('wisata').doc(wisata.id).set(wisata);
    });

    return;
  }
}
