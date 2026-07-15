import BlueprintCard from "@/components/BlueprintCard";
import { contactChannels } from "@/utils/content";
import styles from "./styles.module.scss";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <div data-reveal="">
          <span className={styles.kicker}>10 · Contacto</span>
          <h2 className={styles.title}>Hablemos de tu operación</h2>
          <p className={styles.lead}>
            Cuéntame sobre tus sistemas y procesos. Escríbeme por correo o
            WhatsApp y te respondo con una propuesta de cómo organizar y dar
            seguimiento a tu tecnología.
          </p>
        </div>
        <BlueprintCard reveal className={styles.formCard}>
          <div className={styles.channels}>
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const detail = (
                <div>
                  <div className={styles.channelLabel}>{channel.label}</div>
                  <div className={styles.channelValue}>{channel.value}</div>
                </div>
              );
              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener" : undefined}
                  className={`${styles.channel} ${styles.channelLink}`}
                >
                  <Icon size={19} />
                  {detail}
                </a>
              ) : (
                <div key={channel.label} className={styles.channel}>
                  <Icon size={19} />
                  {detail}
                </div>
              );
            })}
          </div>
        </BlueprintCard>
      </div>
    </section>
  );
}
