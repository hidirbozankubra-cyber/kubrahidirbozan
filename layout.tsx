import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const display = Fraunces({ subsets: ["latin", "latin-ext"], variable: "--font-fraunces" });
const sans = Instrument_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-instrument" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  keywords: ["Kübra Hıdırbozan", "Büyük Veri Analistliği", "veri analizi", "veri görselleştirme", "Manisa Celal Bayar Üniversitesi"],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: site.url,
    locale: "tr_TR",
    type: "website",
    siteName: site.name,
    images: [{ url: "/profile.jpg", width: 900, height: 1188, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: site.email,
    affiliation: { "@type": "CollegeOrUniversity", name: site.school },
    knowsLanguage: ["tr", "en", "de"],
    sameAs: [site.github, site.instagram],
  };
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <footer className="border-t border-line py-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </body>
    </html>
  );
}
