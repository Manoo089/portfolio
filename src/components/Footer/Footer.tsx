import clsx from "clsx";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx("Footer")}>
      <div className="Footer__copyright">
        <span>© {year} Manuel Hohenadl.dev</span>
        <span>
          Built with <span className="Footer__heart">♥</span> & viel Kaffee
        </span>
      </div>
      <nav className="Footer__legal">
        <ul className="Footer__legal-list">
          <Link href="/impressum" className="Footer__legal-link" rel="nofollow">
            <li>Impressum</li>
          </Link>
          <Link href="/datenschutz" className="Footer__legal-link" rel="nofollow">
            <li>Datenschutzerklärung</li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}
