import { useCallback, useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import type { ContactFormErrors, ContactFormValues } from "@/utils/types";
import type { ContactField, UseContactFormResult } from "./interface";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues: ContactFormValues = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  tipo: "",
  mensaje: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.nombre.trim()) errors.nombre = "Indica tu nombre.";
  if (!values.correo.trim()) errors.correo = "Indica tu correo.";
  else if (!EMAIL_REGEX.test(values.correo)) errors.correo = "Correo no válido.";
  if (!values.tipo) errors.tipo = "Selecciona una opción.";
  if (!values.mensaje.trim()) errors.mensaje = "Escribe un mensaje.";
  return errors;
}

export function useContactForm(): UseContactFormResult {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sent, setSent] = useState(false);

  const handleChange = useCallback(
    (field: keyof ContactFormValues) => (event: ChangeEvent<ContactField>) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      const nextErrors = validate(values);
      if (Object.values(nextErrors).some(Boolean)) {
        setErrors(nextErrors);
        return;
      }
      setSent(true);
    },
    [values],
  );

  const reset = useCallback(() => {
    setValues(emptyValues);
    setErrors({});
    setSent(false);
  }, []);

  return { values, errors, sent, handleChange, handleSubmit, reset };
}
