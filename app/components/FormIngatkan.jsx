'use client';

import { useEffect, useState } from 'react';
import { KOTA, jadwalTur } from '@/lib/laras';
import useHariIni from './useHariIni';

export default function FormIngatkan({ hari: awal }) {
  const hari = useHariIni(awal);
  const { dibuka } = jadwalTur(hari);
  const [jenis, setJenis] = useState('ingatkan');
  const [kota, setKota] = useState([]);
  const [selesai, setSelesai] = useState(false);
  useEffect(() => { if (window.location.hash === '#booking') setJenis('booking'); }, []);
  const togel = (k) => setKota((x) => (x.includes(k) ? x.filter((y) => y !== k) : [...x, k]));
  const input = 'w-full rounded-xl border border-krem/40 bg-white/5 px-4 py-3 text-krem focus:border-amberv';

  return (
    <section id="ingatkan" aria-labelledby="ingatkan-h" className="mt-12 scroll-mt-6 rounded-2xl border border-krem/15 bg-white/5 p-6">
      <span id="booking" className="block scroll-mt-6" aria-hidden="true" />
      <h2 id="ingatkan-h" className="font-serif text-3xl">{jenis === 'ingatkan' ? 'Ingatkan saya' : 'Booking & kolaborasi'}</h2>
      {selesai ? (
        <div role="status" className="mt-3">
          <p className="font-serif text-xl italic">{jenis === 'ingatkan' ? `Kami kabari sehari sebelum tiket dibuka: ${dibuka}.` : 'Manajemen akan membalas dalam 3 hari kerja.'}</p>
          <p className="mt-2 text-sm text-krem/75">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-4 min-h-11 rounded-full border border-krem/30 px-5 py-2 text-sm hover:border-amberv">Isi ulang</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (jenis === 'booking' || kota.length) setSelesai(true); }} className="mt-4 space-y-5">
          <div className="flex gap-2" role="group" aria-label="Jenis permintaan">
            {[['ingatkan', 'Pengingat tiket'], ['booking', 'Booking']].map(([k, n]) => (
              <button key={k} type="button" aria-pressed={jenis === k} onClick={() => setJenis(k)} className={`min-h-11 rounded-full px-5 text-sm ${jenis === k ? 'bg-amberv text-studio' : 'border border-krem/25'}`}>{n}</button>
            ))}
          </div>
          {jenis === 'ingatkan' ? (
            <fieldset>
              <legend className="mb-2 text-sm text-krem/80">Kota yang ingin ditonton</legend>
              <div className="flex flex-wrap gap-2">
                {KOTA.map((k) => (
                  <label key={k} className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-amberv ${kota.includes(k) ? 'border-amberv bg-amberv/15' : 'border-krem/25'}`}>
                    <input type="checkbox" checked={kota.includes(k)} onChange={() => togel(k)} className="sr-only" />
                    {kota.includes(k) ? '✓ ' : ''}{k}
                  </label>
                ))}
              </div>
              {!kota.length && <p className="mt-2 text-xs text-krem/70">Pilih setidaknya satu kota.</p>}
            </fieldset>
          ) : (
            <div>
              <label htmlFor="i-pesan" className="mb-1 block text-sm text-krem/80">Ceritakan acaranya atau idenya</label>
              <textarea id="i-pesan" required rows={3} className={input} />
            </div>
          )}
          <div>
            <label htmlFor="i-surel" className="mb-1 block text-sm text-krem/80">Surel</label>
            <input id="i-surel" type="email" required autoComplete="email" className={input} />
          </div>
          <button type="submit" className="w-full rounded-full bg-amberv py-3 font-semibold text-studio hover:bg-krem">{jenis === 'ingatkan' ? `Ingatkan${kota.length ? ` (${kota.length} kota)` : ''}` : 'Kirim ke manajemen'}</button>
          <p className="text-xs text-krem/70">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
