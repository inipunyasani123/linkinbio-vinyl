/* Laras — penyanyi & penulis lagu (persona fiktif). Satu sumber isi untuk
   halaman tautan, album, dan tur. Lagu, lirik, venue, dan tanggal adalah
   contoh purwarupa desain; lirik ditulis khusus untuk purwarupa ini. */

import { bulanKe, hariBerikut, tambahHari, tgl } from './waktu';

export const SITE = 'https://linkinbio-vinyl.pintuweb.id';

export const ALBUM = {
  judul: 'Senja Kala',
  rilis: 'Jumat, 25 September 2026',
  label: 'Rilis mandiri',
  lagu: [
    ['A1', 'Senja Kala', '3:47'], ['A2', 'Payung Bersama', '3:12'], ['A3', 'Kereta Terakhir', '4:05'], ['A4', 'Hujan di Jendela', '3:31'], ['A5', 'Surat yang Tak Terkirim', '4:20'],
    ['B1', 'Pulang', '3:58'], ['B2', 'Teh Hangat Ibu', '3:05'], ['B3', 'Lampu Kota', '3:44'], ['B4', 'Yang Tak Sempat', '4:12'], ['B5', 'Senja Kala (akustik)', '3:39'],
  ],
  kredit: [['Lagu & lirik', 'Laras'], ['Produser', 'Bima Saputra (fiktif)'], ['Gitar & piano', 'Raka Anindya (fiktif)'], ['Direkam di', 'Studio rumah, Jakarta Selatan']],
  lirik: ['Senja kala di ujung jalan,', 'lampu menyala satu-satu.', 'Kau titip salam lewat hujan,', 'kubalas dengan rindu yang ragu.'],
};
const detik = (d) => { const [m, s] = d.split(':').map(Number); return m * 60 + s; };
const mmss = (t) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
export const totalDurasi = () => {
  const t = ALBUM.lagu.reduce((s, [, , d]) => s + detik(d), 0);
  return `${Math.floor(t / 60)} menit ${t % 60} detik`;
};
/** Durasi tiap sisi piringan: [['A', '18:55', detik], ['B', …]] */
export const durasiSisi = () => ['A', 'B'].map((x) => {
  const t = ALBUM.lagu.filter(([no]) => no.startsWith(x)).reduce((s, [, , d]) => s + detik(d), 0);
  return [x, mmss(t), t];
});

export const LINKS = [
  { no: 'A1', ikon: 'putar', label: `Album "${ALBUM.judul}"`, dur: '10 lagu', href: '/album' },
  { no: 'A2', ikon: 'lirik', label: 'Lirik "Senja Kala"', dur: 'penggalan', href: '/album#lirik' },
  { no: 'B1', ikon: 'tiket', label: 'Tur akustik 5 kota', info: 'bulan', href: '/tur' },
  { no: 'B2', ikon: 'lonceng', label: 'Ingatkan saat tiket dibuka', info: 'dibuka', href: '/tur#ingatkan' },
  { no: 'B3', ikon: 'mic', label: 'Booking & kolaborasi', dur: 'manajemen', href: '/tur#booking' },
];

// Tur dan pembukaan tiket dihitung dari hari ini (WIB) supaya demo tidak pernah
// basi: tiket dibuka Kamis depan pukul 12.00, konser pertama tiga pekan sesudahnya.
const POLA_TUR = [
  { kota: 'Jakarta', hari: 22, venue: 'Ruang Dengar Cikini (fiktif)', kursi: 220 },
  { kota: 'Bandung', hari: 23, venue: 'Teater Kecil Braga (fiktif)', kursi: 160 },
  { kota: 'Yogyakarta', hari: 36, venue: 'Pendopo Kotabaru (fiktif)', kursi: 180 },
  { kota: 'Semarang', hari: 37, venue: 'Gedung Kesenian Lama (fiktif)', kursi: 150 },
  { kota: 'Surabaya', hari: 51, venue: 'Balai Musik Darmo (fiktif)', kursi: 200 },
];
export const KOTA = POLA_TUR.map((t) => t.kota);
export function jadwalTur(hari) {
  const kamis = hariBerikut(hari, 4);
  const tur = POLA_TUR.map((t) => ({ ...t, tanggal: tgl(tambahHari(kamis, t.hari)) }));
  const awal = bulanKe(tambahHari(kamis, POLA_TUR[0].hari)), akhir = bulanKe(tambahHari(kamis, POLA_TUR[POLA_TUR.length - 1].hari));
  return {
    tur,
    dibuka: `${tgl(kamis, 'lengkap')}, pukul 12.00 WIB`,
    dibukaPendek: tgl(kamis, 'pendek'),
    bulan: awal.pendek === akhir.pendek ? awal.pendek : `${awal.pendek}–${akhir.pendek}`,
  };
}
