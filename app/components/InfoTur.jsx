'use client';

import { jadwalTur } from '@/lib/laras';
import useHariIni from './useHariIni';

// Potongan info tur yang bergantung tanggal (bulan tur / tanggal tiket dibuka).
// data-tanggal: penanda teks bertanggal (disembunyikan saat membuat og.jpg statis).
export default function InfoTur({ jenis, hari: awal }) {
  const hari = useHariIni(awal);
  const j = jadwalTur(hari);
  return <span data-tanggal="">{jenis === 'bulan' ? j.bulan : jenis === 'dibuka' ? j.dibukaPendek : j.dibuka}</span>;
}
