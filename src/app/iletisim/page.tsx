import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} ile e-posta, GitHub ve Instagram üzerinden iletişime geçin.`,
  alternates: { canonical: "/iletisim" },
};

const items = [
  { label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "hidirbozankubra-cyber", href: site.github },
  { label: "Instagram", value: "@kubraahd", href: site.instagram },
];

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold">İletişim</h1>
      <p className="mt-3 text-muted">Staj, proje veya iş birliği için aşağıdaki kanallardan ulaşabilirsiniz.</p>
      <ul className="mt-10 space-y-4">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
               className="flex items-center justify-between rounded-xl border border-line bg-panel px-6 py-5 transition hover:border-accent">
              <span className="text-muted">{i.label}</span>
              <span className="font-medium">{i.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
