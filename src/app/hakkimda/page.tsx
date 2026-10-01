import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: `${site.name}: ${site.school} ${site.program}. Eğitimler, sertifikalar, yetenekler ve yabancı diller.`,
  alternates: { canonical: "/hakkimda" },
};

export default function About() {
  return (
    <main className="mx-auto max-w-4xl space-y-16 px-6 py-16">
      <section>
        <h1 className="font-display text-4xl font-semibold">Hakkımda</h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-fg/80">
          {site.about.map((t) => <p key={t}>{t}</p>)}
        </div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-semibold">Eğitim</h2>
        <div className="mt-4 rounded-xl border border-line bg-panel p-6">
          <p className="font-medium">{site.school}</p>
          <p className="text-muted">{site.program}</p>
        </div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-semibold">Eğitimler ve sertifikalar</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {site.certificates.map((c) => (
            <div key={c.title} className="rounded-xl border border-line bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-accent">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.org}{c.date ? `, ${c.date}` : ""}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/80">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-semibold">Yetenekler</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {Object.entries(site.skills).map(([level, items]) => (
            <div key={level} className="rounded-xl border border-line bg-panel p-6">
              <h3 className="text-muted">{level}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => <li key={s} className="rounded-full bg-bg px-4 py-1.5 text-sm font-medium text-accent">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-semibold">Yabancı diller</h2>
        <ul className="mt-4 flex gap-3">
          {site.spoken.map((l) => <li key={l} className="rounded-full border border-line px-4 py-1.5">{l}</li>)}
        </ul>
      </section>
    </main>
  );
}
