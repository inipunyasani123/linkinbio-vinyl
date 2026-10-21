import Link from 'next/link';
import Gambar from './components/Gambar';
import { Bell, FileText, Mic2, Play, Ticket } from 'lucide-react';
import { ALBUM, LINKS, durasiSisi } from '@/lib/laras';
import { hariIniWIB } from '@/lib/waktu';
import InfoTur from './components/InfoTur';

const IKON = { putar: Play, lirik: FileText, tiket: Ticket, lonceng: Bell, mic: Mic2 };

export default function Home() {
  const hari = hariIniWIB();
  const sisi = durasiSisi();
  const total = sisi.reduce((s, [, , t]) => s + t, 0);
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12 lg:px-8">
      <div className="w-full max-w-md lg:grid lg:max-w-5xl lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        {/* Sampul album + piringan yang menyembul dari sampulnya. Ilustrasi asli, persona fiktif. */}
        <div className="rise relative mx-auto h-52 w-full max-w-[20rem] lg:h-[22rem] lg:max-w-[32rem]" aria-hidden="true">
          <Gambar src="/images/sampul-senja-kala.webp" alt="" width={352} height={352} asli={800} sizes="(min-width: 1024px) 288px, 176px" priority className="absolute inset-y-4 left-0 z-10 aspect-square h-[calc(100%-2rem)] w-auto rounded-md shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)] lg:inset-y-8 lg:h-[calc(100%-4rem)]" />
          {/* Piringan diputar di dalam pembungkus bulat ber-overflow-hidden: sudut kotak yang berputar tidak melebarkan halaman. */}
          <div className="absolute inset-y-0 right-0 aspect-square overflow-hidden rounded-full shadow-[0_20px_60px_-15px_rgba(232,161,60,0.35)] lg:inset-y-4">
            <div className="record absolute inset-0 rounded-full" />
            <div className="absolute left-1/2 top-1/2 grid h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-studio bg-amberv text-center text-studio">
              <span className="font-serif text-lg leading-none lg:text-2xl">Laras</span>
              <span className="-mt-3 text-[8px] font-semibold uppercase tracking-[0.12em] lg:text-[10px]">Senja Kala</span>
            </div>
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-studio" />
          </div>
        </div>

        <div>
          <header className="rise mt-7 text-center lg:mt-0 lg:text-left" style={{ animationDelay: '0.06s' }}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-amberv">Penyanyi · Penulis lagu</p>
            <h1 className="mt-2 font-serif text-5xl lg:text-7xl">Laras</h1>
            <p className="mt-2 text-sm text-krem/80">Lagu-lagu tentang pulang, hujan, dan hal-hal yang tak sempat dikatakan.</p>
          </header>

          {/* Album terbaru: dua sisi piringan sesuai durasinya (bukan progres putar palsu) */}
          <div className="rise mt-6 rounded-2xl border border-krem/15 bg-white/5 p-4" style={{ animationDelay: '0.12s' }}>
            <div className="flex items-center justify-between text-xs text-krem/75">
              <span>Album terbaru</span>
              <span>{ALBUM.lagu.length} lagu · {Math.round(total / 60)} menit</span>
            </div>
            <p className="mt-1 font-serif text-xl italic">&ldquo;{ALBUM.judul}&rdquo; — rilis {ALBUM.rilis.split(', ')[1]}</p>
            <div className="mt-3 flex h-1.5 gap-1" aria-hidden="true">
              {sisi.map(([x, , t]) => <span key={x} className={`rounded-full ${x === 'A' ? 'bg-amberv' : 'bg-krem/40'}`} style={{ width: `${(t / total) * 100}%` }} />)}
            </div>
            <p className="mt-1.5 flex justify-between text-[11px] text-krem/70">
              {sisi.map(([x, d]) => <span key={x}>Side {x} · {d}</span>)}
            </p>
          </div>

          <nav className="mt-6" aria-label="Tautan">
            <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-krem/70" aria-hidden="true">Side A / Side B</p>
            {LINKS.map((t, i) => {
              const Ikon = IKON[t.ikon];
              return (
                <Link
                  key={t.no}
                  href={t.href}
                  className="rise group flex items-center gap-4 border-b border-krem/15 py-4 transition-[background-color,padding] hover:bg-white/5 hover:px-3"
                  style={{ animationDelay: `${0.18 + i * 0.05}s` }}
                >
                  <span className="w-7 font-serif text-lg italic text-amberv">{t.no}</span>
                  <Ikon size={17} className="text-krem/60 transition group-hover:text-amberv" aria-hidden="true" />
                  <span className="flex-1 font-medium">{t.label}</span>
                  <span className="text-xs text-krem/70">{t.info ? <InfoTur jenis={t.info} hari={hari} /> : t.dur}</span>
                </Link>
              );
            })}
          </nav>

          <p className="rise mt-7 text-center text-sm text-krem/75 lg:text-left" style={{ animationDelay: '0.45s' }}>Dengarkan di semua platform musik — cari &ldquo;Laras Senja Kala&rdquo;.</p>
          <p className="rise mt-3 text-center text-xs text-krem/70 lg:text-left" style={{ animationDelay: '0.5s' }}>℗ 2026 Laras · Jakarta · penyanyi fiktif untuk purwarupa desain</p>
        </div>
      </div>
    </main>
  );
}
