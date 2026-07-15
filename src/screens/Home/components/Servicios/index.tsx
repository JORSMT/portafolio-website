import BlueprintCard from "@/components/BlueprintCard";
import SectionHeading from "@/components/SectionHeading";
import { servicios } from "@/utils/content";
import styles from "./styles.module.scss";

export default function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="05 · Servicios profesionales"
          title="Cómo puedo ayudar a una organización"
        />
        <div className={styles.grid}>
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <BlueprintCard
                key={servicio.title}
                reveal
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{servicio.title}</h3>
                <p className={styles.cardText}>{servicio.desc}</p>
              </BlueprintCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
