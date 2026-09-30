"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const path = usePathname();
  return (
    <div className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Ana menü" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold">{site.name}</Link>
        <ul className="flex gap-5 text-sm sm:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={path === l.href ? "page" : undefined}
                className={path === l.href ? "text-accent" : "text-muted transition hover:text-fg"}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
