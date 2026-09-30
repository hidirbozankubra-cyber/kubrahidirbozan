"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

const price = "M0 150 C40 150 60 160 100 165 S160 120 200 90 S270 40 320 55 S390 130 430 100 S500 30 550 45 S590 80 600 90";
const temp = "M0 170 C60 168 120 150 200 120 S320 80 400 95 S520 130 600 140";

export default function Hero() {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: { pathLength: reduce ? 1 : 0 },
    animate: { pathLength: 1 },
    transition: { duration: reduce ? 0 : 2.2, delay: reduce ? 0 : delay, ease: "easeInOut" as const },
  });
  return (
    <header className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.2fr_1fr] md:pt-24">
      <div>
        <p className="text-muted">{site.school}</p>
        <h1 className="font-display mt-3 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{site.name}</h1>
        <p className="mt-2 text-xl text-accent">{site.role}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/80">{site.intro}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{t}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projeler" className="rounded-lg bg-accent px-5 py-3 font-medium text-bg transition hover:opacity-90">Projelerim</Link>
          <Link href="/iletisim" className="rounded-lg border border-line px-5 py-3 font-medium transition hover:border-accent hover:text-accent">İletişim</Link>
        </div>
        <svg viewBox="0 0 600 200" className="mt-12 w-full max-w-xl" role="img" aria-label="Elektrik fiyatı ve sıcaklık eğrisi (temsili)">
          <line x1="0" y1="185" x2="600" y2="185" stroke="var(--color-line)" strokeWidth="2" />
          <motion.path d={temp} fill="none" stroke="var(--color-muted)" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" {...draw(0.4)} />
          <motion.path d={price} fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" {...draw(0)} />
        </svg>
        <p className="mt-2 text-sm text-muted">Temsili çizim: saatlik fiyat (pembe) ve sıcaklık (kesikli).</p>
      </div>
      <motion.div initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <Image src="/profile.jpg" alt={`${site.name} fotoğrafı`} width={900} height={1188} priority className="aspect-[4/5] w-full rounded-2xl border border-line object-cover object-top" />
      </motion.div>
    </header>
  );
}
