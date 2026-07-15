import type { ChangeEvent, SubmitEvent } from "react";
import type { ContactFormErrors, ContactFormValues } from "@/utils/types";

export type ContactField =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export interface UseContactFormResult {
  values: ContactFormValues;
  errors: ContactFormErrors;
  sent: boolean;
  handleChange: (field: keyof ContactFormValues) => (event: ChangeEvent<ContactField>) => void;
  handleSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
  reset: () => void;
}
