"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/icon-arrow-down.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Ashwin Shaharkar
      </div>
    </main>
  );
}


