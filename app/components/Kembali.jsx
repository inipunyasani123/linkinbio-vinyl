import Link from 'next/link';

export default function Kembali() {
  return (
    <Link href="/" className="inline-flex min-h-11 items-center gap-3 text-sm text-krem/80 hover:text-amberv">
      <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-amberv text-studio">←</span>
      <span className="font-serif text-xl italic">Laras</span>
    </Link>
  );
}
