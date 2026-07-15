import type { CSSProperties, ElementType, ReactNode } from "react";

export interface BlueprintCardProps {
  children: ReactNode;
  className?: string;
  reveal?: boolean;
  as?: ElementType;
  style?: CSSProperties;
}
