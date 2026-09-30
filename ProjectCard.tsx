import { site } from "@/data/site";

export default function ProjectCard({ p }: { p: (typeof site.projects)[number] }) {
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer"
       className="group block rounded-xl border border-line bg-panel p-7 transition hover:border-accent">
      <p className="text-sm text-muted">{p.status}</p>
      <h3 className="font-display mt-2 text-xl font-semibold group-hover:text-accent">{p.title}</h3>
      <p className="mt-3 leading-relaxed text-fg/80">{p.text}</p>
      <ul className="mt-5 flex flex-wrap gap-2 text-sm text-accent">{p.tags.map((t) => <li key={t}>#{t}</li>)}</ul>
    </a>
  );
}
