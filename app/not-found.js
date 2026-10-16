import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-sm text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-amberv">Track 404</p>
        <h1 className="mt-3 font-serif text-5xl">Lagu ini tidak ada di album</h1>
        <p className="mt-3 text-krem/80">Mungkin masih di buku catatan, belum sempat direkam.</p>
        <Link href="/" className="mt-7 inline-flex min-h-11 items-center rounded-full bg-amberv px-6 py-3 font-semibold text-studio hover:bg-krem">Kembali ke Side A</Link>
      </div>
    </main>
  );
}
