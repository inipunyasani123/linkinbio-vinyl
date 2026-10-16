'use client';

import { jadwalTur } from '@/lib/laras';
import useHariIni from './useHariIni';

export default function JadwalTur({ hari: awal }) {
  const hari = useHariIni(awal);
  const { tur, dibuka } = jadwalTur(hari);
  return (
    <>
      <p className="mt-3 text-sm text-krem/80">Kursi terbatas, tanpa pengeras suara besar. Tiket dibuka {dibuka}.</p>
      <ol className="mt-8 border-l border-krem/20 pl-6">
        {tur.map((t) => (
          <li key={t.kota} className="relative pb-7 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-amberv bg-studio" />
            <p className="text-xs uppercase tracking-[0.2em] text-krem/75">{t.tanggal}</p>
            <h2 className="font-serif text-3xl">{t.kota}</h2>
            <p className="text-sm text-krem/80">{t.venue} · {t.kursi} kursi</p>
          </li>
        ))}
      </ol>
    </>
  );
}
