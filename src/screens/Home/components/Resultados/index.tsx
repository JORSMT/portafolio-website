import { CheckIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { resultados } from "@/utils/content";
import type { ResultadosProps } from "./interface";
import styles from "./styles.module.scss";

export default function Resultados({ items = resultados }: ResultadosProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="08 · Resultados y propuesta de valor"
          title="Más organización, visibilidad y control"
        />
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item} className={styles.item} data-reveal="">
              <CheckIcon size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
