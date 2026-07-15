"use client";

import type { RevealInitProps } from "./interface";
import { useRevealInit } from "./useRevealInit";

export default function RevealInit({
  selector = "[data-reveal]",
}: RevealInitProps) {
  useRevealInit(selector);
  return null;
}
