import SectionHeading from "@/components/SectionHeading";
import { metodologia } from "@/utils/content";
import styles from "./styles.module.scss";

export default function Metodologia() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="06 · Metodología de trabajo"
          title="Un proceso claro para organizar la tecnología"
        />
        <div className={styles.grid}>
          {metodologia.map((step) => (
            <div key={step.num} className={styles.step} data-reveal="">
              <div className={styles.stepNumber}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
