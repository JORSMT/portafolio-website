import {
  ChartIcon,
  ChatIcon,
  ChecklistIcon,
  DocumentIcon,
  ListIcon,
  MailIcon,
  NetworkIcon,
  PhoneIcon,
  PinIcon,
  PosIcon,
  ShieldIcon,
  TrendBarsIcon,
  TruckIcon,
} from "@/components/Icons";
import type {
  ContactChannel,
  MetodologiaStep,
  NavLink,
  Negocio,
  PerfilCard,
  Proyecto,
  Servicio,
} from "./types";

export const navLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#perfil", label: "Perfil" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export const perfilCards: PerfilCard[] = [
  {
    icon: TrendBarsIcon,
    title: "Control operativo",
    desc: "Supervisión del funcionamiento cotidiano de sistemas, usuarios, procesos y puntos de venta.",
  },
  {
    icon: ListIcon,
    title: "Organización tecnológica",
    desc: "Documentación, seguimiento de incidencias, definición de responsables y control de accesos.",
  },
  {
    icon: ChartIcon,
    title: "Visión de negocio",
    desc: "Comprensión de ventas, inventarios, sucursales, atención al cliente y necesidades administrativas.",
  },
  {
    icon: NetworkIcon,
    title: "Coordinación técnica",
    desc: "Comunicación con desarrolladores, proveedores, soporte e infraestructura para resolver necesidades concretas.",
  },
];

export const negocios: Negocio[] = [
  {
    name: "Refrigeraciones MC",
    url: "https://refrigeracionesmc.com/MC/admin/login",
    desc: "Administración del sistema POS y apoyo en la organización de los procesos tecnológicos relacionados con ventas, productos, inventario, usuarios y operación comercial.",
    areas: [
      "Gestión del sistema POS",
      "Supervisión de usuarios",
      "Control operativo",
      "Seguimiento de inventario",
      "Soporte e incidencias",
      "Coordinación de mejoras",
    ],
  },
  {
    name: "Innovaciones LED",
    url: "https://www.innovacionesled.com/LED/admin/login",
    desc: "Gestión tecnológica de las operaciones comerciales mediante un sistema POS centralizado para controlar ventas, productos, inventarios y actividad administrativa.",
    areas: [
      "Administración de ventas",
      "Organización de catálogos",
      "Seguimiento de existencias",
      "Gestión de accesos",
      "Soporte operativo",
      "Mejora de procesos",
    ],
  },
  {
    name: "Eva Shop GM",
    url: "https://www.evashopgm.com/ESGM/admin/login/",
    desc: "Administración del entorno POS utilizado para respaldar la operación comercial, mantener la información organizada y facilitar el seguimiento de ventas e inventario.",
    areas: [
      "Supervisión del POS",
      "Control de productos",
      "Gestión de usuarios",
      "Seguimiento comercial",
      "Resolución de incidencias",
      "Coordinación tecnológica",
    ],
  },
];

export const posCaps: string[] = [
  "Administración de múltiples negocios",
  "Control de usuarios y permisos",
  "Registro y seguimiento de ventas",
  "Gestión de productos y categorías",
  "Control de inventario",
  "Consulta de reportes",
  "Seguimiento de incidencias",
  "Coordinación de respaldos y continuidad",
  "Identificación de mejoras funcionales",
  "Comunicación con proveedores técnicos",
];

export const proyectos: Proyecto[] = [
  {
    name: "Desaparecidos Terremoto Venezuela",
    url: "https://desaparecidosterremotovenezuela.com",
    cat: "Tecnología humanitaria y gestión operativa",
    desc: "Asesoría y apoyo en la organización de procesos tecnológicos y operativos para una plataforma ciudadana orientada a la gestión de información durante una emergencia.",
    contrib: [
      "Organización de procesos",
      "Revisión de necesidades operativas",
      "Coordinación entre usuarios y equipo técnico",
      "Seguimiento de incidencias",
      "Apoyo en decisiones administrativas",
      "Mejora de flujos internos",
    ],
  },
  {
    name: "Finami",
    url: "https://finami.app",
    cat: "Tecnología financiera",
    desc: "Asesoría operativa para una plataforma digital de gestión financiera, apoyando la definición de necesidades, la organización funcional y el seguimiento de procesos.",
    contrib: [
      "Análisis funcional",
      "Organización de requerimientos",
      "Revisión de procesos",
      "Coordinación con responsables técnicos",
      "Seguimiento de mejoras",
      "Perspectiva de usuario y negocio",
    ],
  },
  {
    name: "The Empire",
    url: "https://theempire.tech",
    cat: "Productos y plataformas digitales",
    desc: "Colaboración y asesoría en proyectos tecnológicos desarrollados o gestionados por The Empire, aportando una perspectiva administrativa, operativa y orientada a las necesidades del negocio.",
    contrib: [
      "Evaluación de operaciones",
      "Apoyo en planificación",
      "Seguimiento de proyectos",
      "Revisión funcional",
      "Coordinación con equipos",
      "Identificación de oportunidades de mejora",
    ],
  },
];

export const servicios: Servicio[] = [
  {
    icon: PosIcon,
    title: "Administración de sistemas POS",
    desc: "Configuración operativa, usuarios, permisos, productos, inventarios, ventas y seguimiento general.",
  },
  {
    icon: ChecklistIcon,
    title: "Organización de operaciones tecnológicas",
    desc: "Definición de procesos, responsables, prioridades, incidencias y mecanismos de seguimiento.",
  },
  {
    icon: ChatIcon,
    title: "Asesoría funcional",
    desc: "Conversión de necesidades comerciales en requerimientos comprensibles para proveedores y equipos técnicos.",
  },
  {
    icon: TruckIcon,
    title: "Coordinación de proveedores",
    desc: "Seguimiento de servicios tecnológicos, solicitudes, entregables, fallas y acuerdos operativos.",
  },
  {
    icon: ShieldIcon,
    title: "Soporte y continuidad",
    desc: "Organización de incidencias, escalamiento de problemas y prevención de interrupciones prolongadas.",
  },
  {
    icon: DocumentIcon,
    title: "Documentación y control",
    desc: "Creación de inventarios tecnológicos, manuales, procedimientos, matrices de acceso y reportes de seguimiento.",
  },
];

export const metodologia: MetodologiaStep[] = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Comprender el negocio, sus usuarios, sistemas, dificultades y prioridades.",
  },
  {
    num: "02",
    title: "Organización",
    desc: "Definir procesos, accesos, responsables, documentación y mecanismos de control.",
  },
  {
    num: "03",
    title: "Coordinación",
    desc: "Trabajar con usuarios, proveedores y equipos técnicos para ejecutar las mejoras necesarias.",
  },
  {
    num: "04",
    title: "Seguimiento",
    desc: "Medir avances, revisar incidencias y mantener una operación tecnológica estable.",
  },
];

export const competencias: string[] = [
  "Gestión de sistemas POS",
  "Administración tecnológica",
  "Operaciones comerciales",
  "Gestión de inventarios",
  "Coordinación de equipos",
  "Soporte a usuarios",
  "Gestión de proveedores",
  "Documentación de procesos",
  "Análisis funcional",
  "Seguimiento de proyectos",
  "Gestión de incidencias",
  "Continuidad operativa",
  "Comunicación entre negocio y tecnología",
  "Priorización de necesidades",
  "Control de accesos y usuarios",
];

export const resultados: string[] = [
  "Procesos tecnológicos más claros",
  "Mejor seguimiento de las operaciones",
  "Menor dependencia de conocimiento informal",
  "Incidencias correctamente registradas y escaladas",
  "Mejor comunicación entre el negocio y los proveedores",
  "Mayor control sobre usuarios, sistemas e información",
  "Decisiones apoyadas en datos y reportes",
  "Continuidad operativa más estructurada",
];

export const contactChannels: ContactChannel[] = [
  {
    icon: MailIcon,
    label: "Correo profesional",
    value: "Jhosue.osuna@gmail.com",
    href: "mailto:Jhosue.osuna@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "WhatsApp · Colombia",
    value: "+57 310 794 9684",
    href: "https://wa.me/573107949684",
  },
  {
    icon: PhoneIcon,
    label: "WhatsApp · Venezuela",
    value: "+58 414 921 3918",
    href: "https://wa.me/584149213918",
  },
  { icon: PinIcon, label: "Ciudad y país", value: "Bogotá, Colombia" },
];

export const tipoOptions: string[] = [
  "Administración de sistema POS",
  "Organización de procesos",
  "Asesoría tecnológica",
  "Soporte operativo",
  "Coordinación de proveedores",
  "Colaboración en proyectos",
  "Otro",
];
