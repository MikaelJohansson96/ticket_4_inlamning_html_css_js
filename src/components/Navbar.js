import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Huvudnavigering">
      <a href="/" className="logo" aria-label="Gå till startsidan">
        <img src="/logo.png" alt="Mikaels logotyp" />
        <span style={{ marginLeft: 8 }}>Mikaels Webbplats</span>
      </a>

      <ul className="nav-list" role="menubar" aria-label="Huvudmeny">
        <li role="none">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)} role="menuitem">Hem</NavLink>
        </li>
        <li role="none">
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)} role="menuitem">Om</NavLink>
        </li>
        <li role="none">
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : undefined)} role="menuitem">Projekt</NavLink>
        </li>
        <li role="none">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)} role="menuitem">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
}
