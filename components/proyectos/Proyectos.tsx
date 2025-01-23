import React from "react";
import styles from "./proyecto.module.css";
import Github from "@/utils/github.svg";
import Python from "@/utils/python.svg";
import ReactJs from "@/utils/reactjs.svg";
import Mongo from "@/utils/mongo.svg";
import Sql from "@/utils/sql.svg";
import Go from "@/utils/go.svg";
import VenserLogo from "@/utils/androiico.png";
import Image from "next/image";
export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Trabajos Realizados</h2>

      <div className={styles.projectCard}>
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <Image src={VenserLogo.src} alt="Venser Logo" />
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              Optimización de Procesos en Venser
            </h3>
            <p className={styles.projectRole}>
              Rol:{" "}
              <span className={styles.colorRole}>Full Stack Developer </span>
            </p>
            <p className={styles.projectCompany}>Empresa: Venser S.R.L</p>
            <p className={styles.projectDescription}>
              Plataforma integral para la gestión de datos de ensayos no
              destructivos en ductos, optimizando el trabajo en campo mediante
              la recolección móvil de datos y fotos, con generación automática
              de reportes en la web. Ahorra tiempo y maximiza la eficiencia
              operativa.
            </p>
            <div className={styles.techContent}>
              <div className={styles.techStack}>
                <ReactJs />
                <Go />
                <Python />
                <Mongo />
                <Github />
              </div>
              <a href="/blog/venser">
                <button className={styles.ctaButton}>Ver Proyecto</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <Image src={VenserLogo.src} alt="Venser Logo" />
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              Digitalización del Consumo de Agua
            </h3>
            <p className={styles.projectRole}>
              Rol:{" "}
              <span className={styles.colorRole}>Full Stack Developer </span>
            </p>
            <p className={styles.projectCompany}>
              Empresa: Centro Vecinal de Uquia
            </p>
            <p className={styles.projectDescription}>
              Solución digital para el registro y análisis del consumo de agua
              en comunidades, integrando captura fotográfica y medición desde la
              app móvil, con reportes, facturación y automatización de cobros
              desde la web.
            </p>
            <div className={styles.techContent}>
              <div className={styles.techStack}>
                <ReactJs />
                <Go />
                <Sql />
                <Github />
              </div>
              <a href="/blog/uquia">
                <button className={styles.ctaButton}>Ver Proyecto</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
