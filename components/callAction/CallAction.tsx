import React from "react";
import styles from "./callSection.module.css";

export default function CallAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>¿Te gustó mi trabajo?</h2>
        <p className={styles.text}>
          Si crees que puedo ayudarte con tu próximo proyecto o deseas
          colaborar, no dudes en ponerte en contacto.
        </p>
        <a
          href="https://www.linkedin.com/in/tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          ¡Contáctame!
        </a>
      </div>
    </section>
  );
}
