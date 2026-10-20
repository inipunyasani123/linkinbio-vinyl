import Link from 'next/link';
import { ALBUM, SITE, totalDurasi } from '@/lib/laras';
import Kembali from '../components/Kembali';
import Gambar from '../components/Gambar';

export const metadata = {
  title: 'Album "Senja Kala"',
  description: 'Album "Senja Kala" dari Laras: sepuluh lagu di sisi A dan B, total durasi, kredit, dan penggalan lirik lagu utama.',
  alternates: { canonical: `${SITE}/album` },
};

export default function Album() {
  const sisi = ['A', 'B'].map((s) => [s, ALBUM.lagu.filter(([no]) => no.startsWith(s))]);
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-xl">
        <Kembali />
        <div className="mt-10 grid items-end gap-6 sm:grid-cols-[10rem_1fr]">
          <Gambar src="/images/sampul-senja-kala.webp" alt="Sampul album Senja Kala: siluet profil Laras bermata terpejam di depan matahari senja, gerimis, dan lampu kota yang menyala satu-satu" width={160} height={160} asli={800} priority className="aspect-square w-40 rounded-md shadow-[0_20px_50px_-20px_rgba(232,161,60,0.5)]" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-amberv">Album · {ALBUM.label}</p>
            <h1 className="mt-1 font-serif text-5xl">{ALBUM.judul}</h1>
            <p className="mt-2 text-sm text-krem/80">{ALBUM.rilis} · {ALBUM.lagu.length} lagu · {totalDurasi()}</p>
          </div>
        </div>

        {sisi.map(([s, lagu]) => (
          <section key={s} aria-labelledby={`sisi-${s}`} className="mt-10">
            <h2 id={`sisi-${s}`} className="text-[11px] uppercase tracking-[0.35em] text-krem/75">Side {s}</h2>
            <ol className="mt-2">
              {lagu.map(([no, judul, dur]) => (
                <li key={no} className="flex items-baseline gap-4 border-b border-krem/15 py-3">
                  <span className="w-7 font-serif text-lg italic text-amberv">{no}</span>
                  <span className="flex-1">{judul}</span>
                  <span className="text-sm tabular-nums text-krem/75">{dur}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section id="lirik" aria-labelledby="lirik-h" className="mt-12 scroll-mt-6 rounded-2xl border border-krem/15 bg-white/5 p-6">
          <h2 id="lirik-h" className="text-[11px] uppercase tracking-[0.35em] text-amberv">Penggalan lirik · Senja Kala</h2>
          <blockquote className="mt-4 font-serif text-2xl italic leading-relaxed">
            {ALBUM.lirik.map((l) => <span key={l} className="block">{l}</span>)}
          </blockquote>
        </section>

        <section aria-labelledby="kredit-h" className="mt-10">
          <h2 id="kredit-h" className="text-[11px] uppercase tracking-[0.35em] text-krem/75">Kredit</h2>
          <dl className="mt-3 space-y-2 text-sm">
            {ALBUM.kredit.map(([k, v]) => <div key={k} className="flex justify-between gap-4 border-b border-dashed border-krem/15 pb-2"><dt className="text-krem/75">{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </section>

        <Link href="/tur" className="mt-10 flex justify-center rounded-full bg-amberv py-3.5 font-semibold text-studio hover:bg-krem">Dengar langsung di tur akustik →</Link>
        <p className="mt-6 text-center text-xs text-krem/70">Album, lagu, dan lirik adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
