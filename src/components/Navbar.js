import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Huvudnavigering">
      <div className="nav-inner">
        <Link to="/" className="logo-link" aria-label="Gå till startsidan">
          <img src="/logo.png" alt="Mikaels logotyp" className="logo" />
        </Link>

        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/about">Om</Link></li>
          <li><Link to="/projects">Projekt</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}
