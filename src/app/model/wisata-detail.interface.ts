import {Observable} from "rxjs";

export interface WisataDetail {
    id: string;
    deskripsi: string;
    gambar: Array<string>;
    gambarUrl: Observable<string[]>;
    harga: number;
    jam: string;
    kategori: string;
    kota: string;
    lokasi: string;
    nama: string;
    tanggal: string;
    tiketTerjual: number;
    tiketTersedia: number;
    daerah: string;
    position: Array<number>;
}
