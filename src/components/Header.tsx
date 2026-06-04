import Link from "next/link";
import { LayoutGrid, BarChart3 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/", label: "Today", icon: LayoutGrid },
  { href: "/overview", label: "Overview", icon: BarChart3 },
] as const;

export function Header({ activePath }: { activePath: string }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          <span className="brand-title">Ideas for Today</span>
          <span className="brand-sub">What will you do?</span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = activePath === href;
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${active ? " nav-link-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={18} aria-hidden />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
