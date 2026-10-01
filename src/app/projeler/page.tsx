import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projeler",
  description: "Veri analizi ve veri görselleştirme projeleri: Wine Quality (Vinho Verde) ve EPİAŞ + Open-Meteo.",
  alternates: { canonical: "/projeler" },
};

export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold">Projeler</h1>
      <p className="mt-3 max-w-xl text-muted">Ders kapsamında ve bireysel olarak yürüttüğüm çalışmalar.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{site.projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
    </main>
  );
}
