import type { FooterColumnLink } from "./interface";
import styles from "./styles.module.scss";

const navigationLinks: FooterColumnLink[] = [
  { href: "#perfil", label: "Perfil" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

const contactLinks: FooterColumnLink[] = [
  { href: "mailto:Jhosue.osuna@gmail.com", label: "Correo" },
  { href: "https://wa.me/573107949684", label: "WhatsApp" },
  { href: "#contacto", label: "Aviso de privacidad" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brandName}>Jhosue Osuna</div>
            <div className={styles.brandRole}>
              Gerencia de Informática y Sistemas POS
            </div>
            <p className={styles.brandTagline}>
              Tecnología organizada para operaciones que necesitan avanzar.
            </p>
          </div>
          <div>
            <div className={styles.columnTitle}>Navegación</div>
            <div className={styles.columnLinks}>
              {navigationLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.columnTitle}>Contacto</div>
            <div className={styles.columnLinks}>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {year} Jhosue Osuna. Derechos reservados.</span>
          <span>
            Contenido en español · Arquitectura preparada para versión en
            inglés
          </span>
        </div>
      </div>
    </footer>
  );
}
