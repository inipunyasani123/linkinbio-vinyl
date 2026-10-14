/* Laras — penyanyi & penulis lagu (persona fiktif). Satu sumber isi untuk
   halaman tautan, album, dan tur. Lagu, lirik, venue, dan tanggal adalah
   contoh purwarupa desain; lirik ditulis khusus untuk purwarupa ini. */

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
export const totalDurasi = () => {
  const t = ALBUM.lagu.reduce((s, [, , d]) => s + detik(d), 0);
  return `${Math.floor(t / 60)} menit ${t % 60} detik`;
};

export const LINKS = [
  { no: 'A1', ikon: 'putar', label: `Album "${ALBUM.judul}"`, dur: '10 lagu', href: '/album' },
  { no: 'A2', ikon: 'lirik', label: 'Lirik "Senja Kala"', dur: 'penggalan', href: '/album#lirik' },
  { no: 'B1', ikon: 'tiket', label: 'Tur akustik 5 kota', dur: 'Nov–Des', href: '/tur' },
  { no: 'B2', ikon: 'lonceng', label: 'Ingatkan saat tiket dibuka', dur: '15 Okt', href: '/tur#ingatkan' },
  { no: 'B3', ikon: 'mic', label: 'Booking & kolaborasi', dur: 'manajemen', href: '/tur#booking' },
];

// 6, 20 Nov = Jumat; 7, 21 Nov, 5 Des = Sabtu (2026).
export const TUR = [
  { kota: 'Jakarta', tanggal: 'Jumat, 6 Nov 2026', venue: 'Ruang Dengar Cikini (fiktif)', kursi: 220 },
  { kota: 'Bandung', tanggal: 'Sabtu, 7 Nov 2026', venue: 'Teater Kecil Braga (fiktif)', kursi: 160 },
  { kota: 'Yogyakarta', tanggal: 'Jumat, 20 Nov 2026', venue: 'Pendopo Kotabaru (fiktif)', kursi: 180 },
  { kota: 'Semarang', tanggal: 'Sabtu, 21 Nov 2026', venue: 'Gedung Kesenian Lama (fiktif)', kursi: 150 },
  { kota: 'Surabaya', tanggal: 'Sabtu, 5 Des 2026', venue: 'Balai Musik Darmo (fiktif)', kursi: 200 },
];
export const TIKET_DIBUKA = 'Kamis, 15 Oktober 2026, pukul 12.00 WIB';
