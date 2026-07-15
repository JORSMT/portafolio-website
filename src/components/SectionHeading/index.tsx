import type { SectionHeadingProps } from "./interface";
import styles from "./styles.module.scss";

export default function SectionHeading({
  kicker,
  title,
  description,
  tone = "light",
  size = "lg",
  className,
}: SectionHeadingProps) {
  const classes = [
    styles.heading,
    tone === "dark" ? styles.dark : "",
    size === "md" ? styles.md : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} data-reveal="">
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
