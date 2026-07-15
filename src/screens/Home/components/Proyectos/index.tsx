import BlueprintCard from "@/components/BlueprintCard";
import { ArrowUpRightIcon, CheckIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { proyectos } from "@/utils/content";
import styles from "./styles.module.scss";

export default function Proyectos() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="04 · Proyectos asesorados"
          title="Asesoría y colaboración en proyectos digitales"
        />
        <div className={styles.grid}>
          {proyectos.map((proyecto) => (
            <BlueprintCard key={proyecto.name} reveal className={styles.card}>
              <span className={`tag tag-accent ${styles.category}`}>
                {proyecto.cat}
              </span>
              <h3 className={styles.name}>{proyecto.name}</h3>
              <p className={styles.desc}>{proyecto.desc}</p>
              <div className={styles.contribList}>
                {proyecto.contrib.map((item) => (
                  <span key={item} className={styles.contribItem}>
                    <CheckIcon size={15} />
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={proyecto.url}
                target="_blank"
                rel="noopener"
                className={`btn btn-ghost ${styles.link}`}
              >
                Ver referencia
                <ArrowUpRightIcon size={15} />
              </a>
            </BlueprintCard>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Colaboraciones de asesoría. No se atribuyen cargos oficiales,
          responsabilidades técnicas ni resultados no confirmados.
        </p>
      </div>
    </section>
  );
}
