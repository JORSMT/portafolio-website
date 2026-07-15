"use client";

import { MenuIcon } from "@/components/Icons";
import { navLinks } from "@/utils/content";
import { useHeader } from "./useHeader";
import styles from "./styles.module.scss";

export default function Header() {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <header
      className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}
    >
      <div className={styles.inner}>
        <a href="#inicio" onClick={closeMenu} className={styles.brand}>
          <span className={styles.brandMark}>JO</span>
          Jhosue Osuna
        </a>
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary">
            Hablemos
          </a>
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          className={styles.menuButton}
        >
          <MenuIcon size={20} />
        </button>
      </div>
      <nav
        className={
          menuOpen ? `${styles.mobileNav} ${styles.open}` : styles.mobileNav
        }
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={styles.mobileLink}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={closeMenu}
          className={`btn btn-primary btn-block ${styles.mobileCta}`}
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
