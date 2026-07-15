"use client";

import { CheckIcon } from "@/components/Icons";
import { tipoOptions } from "@/utils/content";
import { useContactForm } from "./useContactForm";
import styles from "./styles.module.scss";

function inputClass(hasError: boolean, extra?: string) {
  return ["input", hasError ? styles.inputError : "", extra ?? ""]
    .filter(Boolean)
    .join(" ");
}

export default function ContactForm() {
  const { values, errors, sent, handleChange, handleSubmit, reset } =
    useContactForm();

  if (sent) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <CheckIcon size={28} />
        </div>
        <h3 className={styles.successTitle}>Mensaje preparado</h3>
        <p className={styles.successText}>
          Gracias por escribir. Este es un formulario demostrativo; conéctalo a
          tu correo o servicio preferido para recibir los mensajes.
        </p>
        <button
          type="button"
          onClick={reset}
          className={`btn btn-secondary ${styles.successReset}`}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.row}>
        <div className="field">
          <label htmlFor="jo-nombre">Nombre *</label>
          <input
            id="jo-nombre"
            className={inputClass(Boolean(errors.nombre))}
            type="text"
            value={values.nombre}
            onChange={handleChange("nombre")}
            placeholder="Tu nombre"
          />
          {errors.nombre && (
            <span className={styles.errorMessage}>{errors.nombre}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="jo-empresa">Empresa</label>
          <input
            id="jo-empresa"
            className="input"
            type="text"
            value={values.empresa}
            onChange={handleChange("empresa")}
            placeholder="Nombre de la empresa"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className="field">
          <label htmlFor="jo-correo">Correo electrónico *</label>
          <input
            id="jo-correo"
            className={inputClass(Boolean(errors.correo))}
            type="email"
            value={values.correo}
            onChange={handleChange("correo")}
            placeholder="correo@dominio.com"
          />
          {errors.correo && (
            <span className={styles.errorMessage}>{errors.correo}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="jo-tel">Teléfono o WhatsApp</label>
          <input
            id="jo-tel"
            className="input"
            type="tel"
            value={values.telefono}
            onChange={handleChange("telefono")}
            placeholder="+00 000 000 0000"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="jo-tipo">Tipo de necesidad *</label>
        <select
          id="jo-tipo"
          className={inputClass(Boolean(errors.tipo), styles.select)}
          value={values.tipo}
          onChange={handleChange("tipo")}
        >
          <option value="">Selecciona una opción…</option>
          {tipoOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.tipo && (
          <span className={styles.errorMessage}>{errors.tipo}</span>
        )}
      </div>
      <div className="field">
        <label htmlFor="jo-msg">Mensaje *</label>
        <textarea
          id="jo-msg"
          className={inputClass(Boolean(errors.mensaje))}
          value={values.mensaje}
          onChange={handleChange("mensaje")}
          placeholder="Cuéntame sobre tus sistemas, procesos y necesidades."
        />
        {errors.mensaje && (
          <span className={styles.errorMessage}>{errors.mensaje}</span>
        )}
      </div>
      <button
        type="submit"
        className={`btn btn-primary btn-block ${styles.submit}`}
      >
        Enviar mensaje
      </button>
    </form>
  );
}
