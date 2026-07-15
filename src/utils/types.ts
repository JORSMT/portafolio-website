import type { ComponentType } from "react";

export interface IconProps {
  size?: number;
  className?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface PerfilCard {
  icon: ComponentType<IconProps>;
  title: string;
  desc: string;
}

export interface Negocio {
  name: string;
  url: string;
  desc: string;
  areas: string[];
}

export interface Proyecto {
  name: string;
  url: string;
  cat: string;
  desc: string;
  contrib: string[];
}

export interface Servicio {
  icon: ComponentType<IconProps>;
  title: string;
  desc: string;
}

export interface MetodologiaStep {
  num: string;
  title: string;
  desc: string;
}

export interface ContactChannel {
  icon: ComponentType<IconProps>;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormValues {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  tipo: string;
  mensaje: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;
