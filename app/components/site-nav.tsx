import Link from "next/link";

type SiteNavProps = { active: "home" | "projects" | "contact" };

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/contact", label: "Contact", key: "contact" },
] as const;

export function SiteNav({ active }: SiteNavProps) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Yudhist portfolio home">
        <span className="brand-mark">Y<span>+</span></span>
        <span className="brand-name">YUDHIST<small>GEO / WEB / FIELD NOTES</small></span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <Link className={active === link.key ? "active" : undefined} href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </nav>
      <span className="topbar-coordinate">GEO-PORTFOLIO <i>●</i> 2026</span>
    </header>
  );
}
