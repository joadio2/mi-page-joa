import React from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import BuyCoffe from "@/utils/coffee.svg";
import In from "@/utils/linkedin.svg";

// Definición de tipos
type SectionType = "main" | "paragraph" | "list";

interface Section {
  id: string;
  type: SectionType;
  title: string;
  content: string | string[]; // Puede ser texto o lista
  hasImage: boolean;
  image?: string;
}

// Datos del blog
const sections: Section[] = [
  {
    id: "intro",
    type: "paragraph",
    title: "Introducción",
    content:
      "En Venser, enfrentamos un desafío que muchas empresas pueden reconocer: un proceso de recolección y organización de datos que resultaba ineficiente, costoso en tiempo y con margen de error. Al analizar las necesidades de la empresa, desarrollamos una solución tecnológica integral que revolucionó su flujo de trabajo, reduciendo significativamente los tiempos operativos y mejorando la calidad de los resultados.",
    hasImage: false,
  },
  {
    id: "problem",
    type: "list",
    title: "Planteamiento del Problema",
    content: [
      "Inspección de tuberías y equipos relacionados mediante ensayos no destructivos.",
      "Recolección de datos en campo, incluyendo fotografías, medidas y observaciones.",
      "Transferencia manual de datos a una computadora en la oficina.",
      "Revisión manual, organización de información y armado de reportes.",
    ],
    hasImage: false,
  },
  {
    id: "solution",
    type: "paragraph",
    title: "Solución Implementada",
    content:
      "Diseñamos un ecosistema tecnológico compuesto por una app móvil, un backend robusto con una API REST y una app web para revisión y administración. Esta solución no solo optimizó los tiempos operativos, sino que también mejoró la calidad y consistencia del trabajo realizado.",
    hasImage: true,
    image:
      "https://media.licdn.com/dms/image/D4E12AQH4ZJ7lhRNh1A/article-cover_image-shrink_720_1280/0/1719285339235?e=2147483647&v=beta&t=ukjHNNY3KItcBN47WAKuHy11-NJzym5FJ6cAm2z13kc",
  },
  {
    id: "benefits",
    type: "list",
    title: "Principales Beneficios",
    content: [
      "Ahorro de tiempo: la app móvil permite enviar datos directamente desde el campo.",
      "Generación automática de reportes PDF, eliminando el trabajo manual.",
      "Mejora en la trazabilidad de los datos y procesos.",
      "Escalabilidad hacia un dashboard administrativo para análisis de datos.",
    ],
    hasImage: false,
  },
  {
    id: "architecture",
    type: "paragraph",
    title: "Arquitectura del Software",
    content:
      "La solución evolucionó desde un backend monolítico en Python con FastAPI a una arquitectura de microservicios con Go, mejorando la eficiencia del manejo de imágenes y procesamiento de datos.",
    hasImage: true,
    image:
      "https://blog.nubecolectiva.com/wp-content/uploads/2023/10/10-tipos-de-arquitectura-o-patron-de-software-1.png",
  },
  {
    id: "conclusion",
    type: "paragraph",
    title: "Conclusión",
    content:
      "El caso de Venser demuestra cómo una implementación tecnológica bien diseñada puede transformar procesos complejos en sistemas eficientes, ahorrando tiempo, mejorando la calidad y fortaleciendo la trazabilidad. Esta experiencia subraya el valor de la innovación tecnológica en la optimización de procesos empresariales.",
    hasImage: false,
  },
];

const Blog: React.FC = () => {
  return (
    <div className={styles.blog}>
      <header className={styles.header}>
        <h1>Optimización de Procesos en Venser</h1>
        <p>Un Caso de Éxito Tecnológico</p>
      </header>

      <div className={styles.content}>
        {sections.map((section) => {
          switch (section.type) {
            case "paragraph":
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                >
                  <h2>{section.title}</h2>
                  <p>{section.content as string}</p>
                  {section.hasImage && (
                    <>
                      <div className={styles.topImg}></div>
                      {section.image ? (
                        <Image
                          src={section.image}
                          alt={section.title || "Default alt"}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                      <div className={styles.btnImg}></div>
                    </>
                  )}
                </section>
              );
            case "list":
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                >
                  <h2>{section.title}</h2>

                  {(section.content as string[]).map((item, index) => (
                    <p key={index}>
                      {" "}
                      {index + 1} - {item}
                    </p>
                  ))}
                </section>
              );
            default:
              return null;
          }
        })}
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.buttonContainer}>
          <a
            href="https://www.buymeacoffee.com/MauricioDionicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BuyCoffe />
            Buy me a coffee
          </a>
          <a
            href="https://www.linkedin.com/in/mauricio-joaquin-dionicio-ali-13b553227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <In />
            LinkedIn
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Blog;
