import { SITE } from '@/lib/laras';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import FormIngatkan from '../components/FormIngatkan';
import JadwalTur from '../components/JadwalTur';

export const metadata = {
  title: 'Tur Akustik 5 Kota',
  description: 'Tur akustik "Senja Kala" Laras di Jakarta, Bandung, Yogyakarta, Semarang, dan Surabaya: minta pengingat saat tiket dibuka atau ajukan booking.',
  alternates: { canonical: `${SITE}/tur` },
};

export default function Tur() {
  const hari = hariIniWIB();
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-xl">
        <Kembali />
        <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-amberv">Tur akustik · Senja Kala</p>
        <h1 className="mt-1 font-serif text-5xl">Lima kota, satu gitar</h1>
        <JadwalTur hari={hari} />

        <FormIngatkan hari={hari} />
        <p className="mt-6 text-center text-xs text-krem/70">Venue dan tanggal adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
