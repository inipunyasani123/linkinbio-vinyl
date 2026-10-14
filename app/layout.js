import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument", weight: "400", style: ["normal", "italic"] });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Laras","jobTitle":"Penyanyi & Penulis Lagu","url":"https://linkinbio-vinyl.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-vinyl.pintuweb.id"),
  title: { default: "Laras — Penyanyi & Penulis Lagu", template: "%s — Laras" },
  description: "Tautan Laras, penyanyi dan penulis lagu: album \"Senja Kala\" sepuluh lagu dengan kredit dan penggalan lirik, tur akustik lima kota November–Desember 2026, dan pengingat tiket.",
  applicationName: "Laras",
  keywords: ["penyanyi indie", "album senja kala", "tur akustik 2026", "penulis lagu", "link in bio musisi"],
  authors: [{ name: "Laras" }],
  creator: "Laras",
  publisher: "Laras",
  alternates: { canonical: "https://linkinbio-vinyl.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-vinyl.pintuweb.id",
    siteName: "Laras",
    title: "Laras — Penyanyi & Penulis Lagu",
    description: "Tautan Laras, penyanyi dan penulis lagu: album \"Senja Kala\" sepuluh lagu dengan kredit dan penggalan lirik, tur akustik lima kota November–Desember 2026, dan pengingat tiket.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Laras — Penyanyi & Penulis Lagu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laras — Penyanyi & Penulis Lagu",
    description: "Tautan Laras, penyanyi dan penulis lagu: album \"Senja Kala\" sepuluh lagu dengan kredit dan penggalan lirik, tur akustik lima kota November–Desember 2026, dan pengingat tiket.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${instrument.variable} ${dmsans.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
