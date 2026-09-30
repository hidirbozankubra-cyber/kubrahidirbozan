import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl space-y-20 px-6 pb-24">
        <section>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold">Öne çıkan projeler</h2>
            <Link href="/projeler" className="text-sm text-accent hover:underline">Tüm projeler</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">{site.projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
        </section>
        <section className="rounded-2xl border border-line bg-panel px-8 py-12">
          <h2 className="font-display text-3xl font-semibold">Birlikte çalışalım</h2>
          <p className="mt-3 max-w-lg text-muted">Staj, proje veya iş birliği teklifleri için benimle iletişime geçebilirsiniz.</p>
          <Link href="/iletisim" className="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-medium text-bg">İletişime geç</Link>
        </section>
      </main>
    </>
  );
}
