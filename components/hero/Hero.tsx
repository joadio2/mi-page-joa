import React from "react";
import styles from "./hero.module.css";
import Github from "@/utils/github.svg";
import Python from "@/utils/python.svg";
import Go from "@/utils/go.svg";
import Mongo from "@/utils/mongo.svg";
import ReactJs from "@/utils/reactjs.svg";
import Vite from "@/utils/vite.svg";
import TypeScript from "@/utils/typescript.svg";
import Sql from "@/utils/sql.svg";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div>
            <p className={styles.name}>Mauricio Dionicio Ali</p>
            <h1>
              <span className={styles.highlight}>Full Stack Developer </span>
            </h1>
          </div>
          <div className={styles.socials}>
            <ReactJs />
            <TypeScript />
            <Python />
            <Github />
            <Mongo />
            <Sql />
            <Go />
            <Vite />
          </div>
        </div>

        <div className={styles.imageContent}>
          <img
            src="https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Jose Manuel - Full Stack Developer"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
