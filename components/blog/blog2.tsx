import React from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import BuyCoffe from "@/utils/coffee.svg";
import In from "@/utils/linkedin.svg";

type SectionType = "main" | "paragraph" | "list";

interface Section {
  id: string;
  type: SectionType;
  title: string;
  content: string | string[]; // Puede ser texto o lista
  hasImage: boolean;
  image?: string;
}

const sections: Section[] = [
  {
    id: "intro",
    type: "paragraph",
    title: "Introducción",
    content:
      "En un centro vecinal, surgió la necesidad de optimizar un proceso crítico: el registro manual de datos de consumo de agua. Este proceso era ineficiente, propenso a errores y poco práctico para la generación de reportes y análisis. En respuesta, desarrollé una solución tecnológica integral que digitalizó y mejoró radicalmente este flujo de trabajo, permitiendo obtener resultados más rápidos y precisos.",
    hasImage: false,
  },
  {
    id: "problem",
    type: "list",
    title: "Planteamiento del Problema",
    content: [
      "El registro de consumo de agua se realizaba manualmente en papel.",
      "Los datos se transcribían a una hoja de Excel, lo que generaba errores humanos.",
      "No existía evidencia gráfica de las lecturas tomadas.",
      "La generación de reportes y análisis de consumo era tardada y poco eficiente.",
    ],
    hasImage: false,
  },
  {
    id: "solution",
    type: "paragraph",
    title: "Solución Implementada",
    content:
      "Desarrollé un ecosistema tecnológico compuesto por tres componentes principales: una app móvil para capturar lecturas, un backend con API REST para procesar y almacenar los datos, y una app web para visualización y gestión. Este sistema permite registrar los datos del consumo de agua de forma digital, capturar fotos de los medidores como comprobante visual y generar reportes automáticos para análisis más efectivos.",
    hasImage: false,
  },
  {
    id: "benefits",
    type: "list",
    title: "Principales Beneficios",
    content: [
      "Mayor rapidez en el registro y disponibilidad de datos en tiempo real.",
      "Eliminación de errores de transcripción manual.",
      "Mejor trazabilidad gracias a las fotos de los medidores.",
      "Capacidad de generar facturas con un solo clic.",
      "Análisis detallado del consumo para una toma de decisiones más informada.",
    ],
    hasImage: false,
  },
  {
    id: "architecture",
    type: "paragraph",
    title: "Arquitectura del Software",
    content:
      "El sistema está basado en una arquitectura modular y moderna. La app móvil fue desarrollada con React Native, lo que permite su despliegue en múltiples plataformas. El backend, implementado en Go, maneja la lógica de negocio, la comunicación con la base de datos y la carga de imágenes de los medidores. La base de datos, basada en SQL Server, asegura un almacenamiento robusto y estructurado. Finalmente, la app web, desarrollada en React, permite la visualización y administración de los datos de manera ágil e intuitiva.",
    hasImage: false,
  },
  {
    id: "conclusion",
    type: "paragraph",
    title: "Conclusión",
    content:
      "Este proyecto demostró cómo la digitalización puede transformar procesos manuales en sistemas eficientes y precisos. La solución no solo mejoró la gestión del consumo de agua, sino que también permitió al centro vecinal tomar decisiones más informadas basadas en datos confiables. Es un ejemplo claro de cómo la tecnología puede ser utilizada para resolver problemas cotidianos y generar un impacto positivo en la comunidad.",
    hasImage: false,
  },
];
export default function Blog2() {
  return (
    <div className={styles.blog}>
      <header className={styles.header}>
        <h1>Digitalización del Consumo de Agua</h1>
        <p>Caso de Éxito en un Centro Vecinal</p>
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
                          width={500}
                          height={300}
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
}
