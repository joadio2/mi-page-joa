import React from "react";
import styles from "./education.module.css";

export default function Education() {
  type EducationEntry = {
    degree: string;
    institution: string;
    year: string;
  };

  const educationData = [
    {
      degree: "Tecnico en Ciberseguridad",
      institution: "IEFP - Instituto de Formación Profesional Portugal",
      year: "2024 - 2025",
    },
    {
      degree: "Analista de Datos",
      institution: "Coder House",
      year: "2023",
    },
  ];
  return (
    <section className={styles.education}>
      <h2 className={styles.sectionTitle}>Educación</h2>
      <div className={styles.educationList}>
        {educationData.map((entry: EducationEntry, index: number) => (
          <div key={index} className={styles.educationEntry}>
            <div className={styles.timeline}></div>
            <div className={styles.content}>
              <h3 className={styles.degree}>{entry.degree}</h3>
              <p className={styles.institution}>{entry.institution}</p>
              <p className={styles.year}>{entry.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
