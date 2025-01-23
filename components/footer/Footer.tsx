import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h1 className={styles.phrase}>
          Resolviendo problemas con tecnología y pasión ❤️‍🔥.
        </h1>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/mauricio-joaquin-dionicio-ali-13b553227"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a href="mailto:joaquin.dionicioo@gmail.com" className={styles.link}>
            Email
          </a>
        </div>
        <p className={styles.text}>
          © {new Date().getFullYear()} Mauricio Dionicio Ali.
        </p>
      </div>
    </footer>
  );
}
