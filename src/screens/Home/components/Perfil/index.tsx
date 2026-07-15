import BlueprintCard from "@/components/BlueprintCard";
import SectionHeading from "@/components/SectionHeading";
import { perfilCards } from "@/utils/content";
import styles from "./styles.module.scss";

export default function Perfil() {
  return (
    <section id="perfil" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="01 · Perfil profesional"
          title="Gestión tecnológica orientada a resultados"
          description="Mi trabajo se concentra en asegurar que los sistemas utilizados por una organización respondan correctamente a sus procesos comerciales y administrativos. Coordino operaciones, superviso plataformas, identifico necesidades, organizo incidencias y sirvo como enlace entre usuarios, responsables del negocio y equipos técnicos."
        />
        <div className={styles.grid}>
          {perfilCards.map((card) => {
            const Icon = card.icon;
            return (
              <BlueprintCard key={card.title} reveal className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.desc}</p>
              </BlueprintCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
