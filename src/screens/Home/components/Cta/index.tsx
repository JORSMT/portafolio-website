import type { CtaProps } from "./interface";
import styles from "./styles.module.scss";

export default function Cta({
  title = "¿Necesitas organizar la tecnología de tu negocio?",
  description = "Conversemos sobre tus sistemas, procesos comerciales y necesidades operativas para identificar cómo mejorar su administración y seguimiento.",
}: CtaProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner} data-reveal="">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.lead}>{description}</p>
        <div className={styles.actions}>
          <a href="#contacto" className="btn btn-primary">
            Solicitar una conversación
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Enviar un mensaje
          </a>
        </div>
      </div>
    </section>
  );
}
