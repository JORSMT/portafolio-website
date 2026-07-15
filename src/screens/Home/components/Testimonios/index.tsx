import BlueprintCard from "@/components/BlueprintCard";
import SectionHeading from "@/components/SectionHeading";
import type { TestimoniosProps } from "./interface";
import styles from "./styles.module.scss";

export default function Testimonios({ count = 3 }: TestimoniosProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="09 · Testimonios"
          title="Referencias profesionales"
          size="md"
        />
        <div className={styles.grid}>
          {Array.from({ length: count }, (_, index) => (
            <BlueprintCard key={index} reveal className={styles.card}>
              <div className={styles.quoteMark}>”</div>
              <p className={styles.pending}>
                Testimonio pendiente de autorización
              </p>
              <div className={styles.author}>
                <div className={styles.avatar} />
                <div className={styles.lines}>
                  <span />
                  <span />
                </div>
              </div>
            </BlueprintCard>
          ))}
        </div>
      </div>
    </section>
  );
}
