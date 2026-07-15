import BlueprintCard from "@/components/BlueprintCard";
import { GridIcon } from "@/components/Icons";
import type { HeroStat } from "./interface";
import styles from "./styles.module.scss";

const salesBars = [
  { height: "40%", color: "var(--color-accent-600)" },
  { height: "62%", color: "var(--color-accent-500)" },
  { height: "48%", color: "var(--color-accent-600)" },
  { height: "80%", color: "var(--color-accent-400)" },
  { height: "66%", color: "var(--color-accent-500)" },
  { height: "92%", color: "var(--color-accent-300)" },
];

const branches: HeroStat[] = [
  { label: "Sucursal A · Operativa", tone: "ok" },
  { label: "Sucursal B · Operativa", tone: "ok" },
  { label: "Sucursal C · En revisión", tone: "warn" },
];

const inventoryLevels = [
  { width: "72%", color: "var(--color-accent-400)" },
  { width: "54%", color: "var(--color-accent-500)" },
  { width: "88%", color: "var(--color-accent-300)" },
];

const issues = [
  { label: "Impresora POS", status: "En proceso", tone: "warn" as const },
  { label: "Sincronización", status: "Abierta", tone: "warn" as const },
  { label: "Acceso usuario", status: "Resuelta", tone: "ok" as const },
];

const recentActivity = ["Alta de producto", "Ajuste de inventario", "Nuevo usuario"];

const systems = ["POS central", "Reportes", "Respaldos"];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div aria-hidden="true" className={styles.gridOverlay} />
      <div className={styles.inner}>
        <div>
          <span className={styles.badge}>
            Gerencia tecnológica · Operaciones · Sistemas POS
          </span>
          <h1 className={styles.title}>
            Tecnología bajo control para que los negocios puedan operar mejor
          </h1>
          <p className={styles.lead}>
            Administración de sistemas, supervisión de plataformas POS y
            asesoría operativa para empresas y proyectos que necesitan
            transformar la tecnología en procesos claros, confiables y
            medibles.
          </p>
          <div className={styles.actions}>
            <a href="#experiencia" className="btn btn-primary">
              Conocer mi experiencia
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactar
            </a>
          </div>
        </div>

        <BlueprintCard reveal className={styles.dashboard}>
          <div className={styles.dashboardHeader}>
            <span className={styles.dashboardTitle}>
              <GridIcon size={17} />
              Panel operativo
            </span>
            <span className={styles.dashboardNote}>Vista demostrativa</span>
          </div>
          <div className={styles.panelGrid}>
            <div className={styles.panel}>
              <div className={styles.panelLabel}>Ventas del día</div>
              <div className={styles.bars}>
                {salesBars.map((bar, index) => (
                  <span
                    key={index}
                    style={{ height: bar.height, background: bar.color }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.panel}>
              <div className={styles.panelLabel}>Estado de sucursales</div>
              <div className={styles.list}>
                {branches.map((branch) => (
                  <span key={branch.label} className={styles.listItem}>
                    <i
                      className={
                        branch.tone === "ok" ? styles.dotOk : styles.dotWarn
                      }
                    />
                    {branch.label}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.panel}>
              <div className={styles.panelLabel}>Inventario</div>
              <div className={styles.progressList}>
                {inventoryLevels.map((level, index) => (
                  <div key={index} className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: level.width, background: level.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.panel}>
              <div className={styles.panelLabel}>Incidencias abiertas</div>
              <div className={styles.list}>
                {issues.map((issue) => (
                  <span key={issue.label} className={styles.issueRow}>
                    <span>{issue.label}</span>
                    <span
                      className={
                        issue.tone === "ok" ? styles.statusOk : styles.statusWarn
                      }
                    >
                      {issue.status}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.panelGrid}>
            <div className={styles.panel}>
              <div className={styles.panelLabel}>Actividad reciente</div>
              <div className={styles.list}>
                {recentActivity.map((activity) => (
                  <span key={activity} className={styles.listItem}>
                    <i className={styles.bullet} />
                    {activity}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.panel}>
              <div className={styles.panelLabel}>Sistemas operativos</div>
              <div className={styles.list}>
                {systems.map((system) => (
                  <span key={system} className={styles.listItem}>
                    <i className={styles.dotOk} />
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BlueprintCard>
      </div>
    </section>
  );
}
