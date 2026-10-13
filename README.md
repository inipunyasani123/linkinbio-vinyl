# Laras — Penyanyi & Penulis Lagu

Tautan Laras, penyanyi dan penulis lagu: album "Senja Kala" sepuluh lagu dengan kredit dan penggalan lirik, tur akustik lima kota November–Desember 2026, dan pengingat tiket.

**Demo live:** https://linkinbio-vinyl.vercel.app

![Tangkapan layar Laras](public/og.jpg)

> Template link-in-bio dengan persona fiktif. Akun, klien, harga, dan jadwal hanya contoh; tautan utama menuju halaman dalam yang benar-benar ada, dan formulir tidak mengirim data.

## Konsep

Persona Laras, penyanyi. Piringan hitam berputar dengan label foto, bar now-playing, dan tracklist sisi A/B.

## Halaman

- `/` — piringan hitam berputar dengan label tipografi (tanpa foto), kartu album baru, tracklist tautan Side A/B
- `/album` — tracklist sisi A/B dengan total durasi dihitung, penggalan lirik, kredit
- `/tur` — tur lima kota, formulir pengingat tiket per kota atau booking

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Lucide (ikon)
- Font: Instrument Serif, DM Sans (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 12 template link-in-bio di [PortalBio](https://www.pintuweb.id/link-in-bio). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
