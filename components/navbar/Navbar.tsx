"use client";
import styles from "./navbar.module.css";
import { redirect, usePathname } from "next/navigation";
import Logo from "@/utils/logo.svg";
export default function Navbar() {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className={`${currentPath === "/" ? styles.navbar : styles.navBlog}`}>
      <div
        className={`${
          currentPath === "/" ? styles.container : styles.containerBlog
        }`}
      >
        <div className={styles.logo} onClick={() => redirect("/")}>
          <Logo />
        </div>
        <div className={styles.links}>
          <div className={styles.button}>¡Contactame!</div>
        </div>
      </div>
    </nav>
  );
}
