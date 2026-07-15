import SectionHeading from "@/components/SectionHeading";
import { competencias } from "@/utils/content";
import type { CompetenciasProps } from "./interface";
import styles from "./styles.module.scss";

export default function Competencias({
  items = competencias,
}: CompetenciasProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="07 · Competencias"
          title="Áreas de competencia principales"
          size="md"
        />
        <div className={styles.tags} data-reveal="">
          {items.map((item) => (
            <span key={item} className={`tag tag-outline ${styles.tag}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
