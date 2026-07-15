import { Fragment } from "react";
import BlueprintCard from "@/components/BlueprintCard";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { posCaps } from "@/utils/content";
import type { FlowNode } from "./interface";
import styles from "./styles.module.scss";

const flowNodes: FlowNode[] = [
  { title: "Sucursales y usuarios", subtitle: "Puntos de venta y personal" },
  { title: "Sistema POS", subtitle: "Centro operativo", highlighted: true },
  { title: "Ventas, inventario y productos" },
  { title: "Reportes y control administrativo" },
];

export default function EcosistemaPos() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          kicker="03 · Ecosistema POS"
          title="Gestión integral de sistemas POS"
          description="El sistema POS funciona como el centro operativo de los negocios administrados, permitiendo organizar la información comercial, supervisar las actividades diarias y mantener una visión clara del funcionamiento de cada empresa."
          tone="dark"
        />
        <div className={styles.flow} data-reveal="">
          {flowNodes.map((node, index) => (
            <Fragment key={node.title}>
              {index > 0 && (
                <div className={styles.flowArrow}>
                  <ArrowRightIcon size={26} />
                </div>
              )}
              <BlueprintCard
                className={
                  node.highlighted
                    ? `${styles.flowNode} ${styles.flowNodeHighlighted}`
                    : styles.flowNode
                }
              >
                <div className={styles.flowNodeTitle}>{node.title}</div>
                {node.subtitle && (
                  <div className={styles.flowNodeSubtitle}>{node.subtitle}</div>
                )}
              </BlueprintCard>
            </Fragment>
          ))}
        </div>
        <div className={styles.caps}>
          {posCaps.map((cap) => (
            <div key={cap} className={styles.capItem}>
              <CheckIcon size={17} />
              <span>{cap}</span>
            </div>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Jhosue administra, gestiona, supervisa y coordina estos sistemas. No
          se atribuye su desarrollo ni autoría.
        </p>
      </div>
    </section>
  );
}
