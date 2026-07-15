import BlueprintCard from "@/components/BlueprintCard";
import { ArrowUpRightIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { negocios } from "@/utils/content";
import styles from "./styles.module.scss";

export default function Negocios() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="02 · Negocios administrados"
          title="Sistemas y operaciones bajo administración"
        />
        <div className={styles.grid}>
          {negocios.map((negocio) => (
            <BlueprintCard key={negocio.name} reveal className={styles.card}>
              <div className={`duotone ${styles.cover}`}>
                <span className={styles.coverName}>{negocio.name}</span>
              </div>
              <span className={styles.kicker}>
                Sistema POS · Administración
              </span>
              <p className={styles.desc}>{negocio.desc}</p>
              <div className={styles.areas}>
                {negocio.areas.map((area) => (
                  <span key={area} className="tag tag-outline">
                    {area}
                  </span>
                ))}
              </div>
              <a
                href={negocio.url}
                target="_blank"
                rel="noopener"
                className={`btn btn-ghost ${styles.link}`}
              >
                Enlace de referencia
                <ArrowUpRightIcon size={15} />
              </a>
            </BlueprintCard>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Los enlaces se muestran únicamente como referencia. No se presentan
          paneles administrativos, credenciales, datos internos ni cifras de
          los negocios.
        </p>
      </div>
    </section>
  );
}
