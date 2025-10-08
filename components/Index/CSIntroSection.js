
import React from "react";
import styles from "styles/Index/CSIntroSection.module.css";
import ExploreMore from "./ExploreMore";

const CSIntroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.section}>
          <h2 className={styles.title}>Introduction</h2>
          <p className={styles.paragraph}>
            The increasing demand for computer science (CS) education often leads
            to an overgeneralized, repetitive, one-size-fits-all approach. This can
            result in younger students lacking access to engaging curricula that
            ignite their interest and offer meaningful learning experiences.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>Objective</h2>
          <p className={styles.paragraph}>
            Our research aims to address these challenges by integrating the UIUC's
            CS+X curriculum, which combines computer science with disciplines like
            music, linguistics, anthropology, advertising, philosophy, and
            agriculture.
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.sideTitle}>Problems</h3>
            <ul className={styles.list}>
              <li>Lack of Engaging Material</li>
              <li>Shortage of K-12 CS curriculum and teachers</li>
              <li>General Experiences in CS</li>
              <li>Inequitable access to quality CS education</li>
              <li>Limited exposure to CS career possibilities</li>
              <li>“One-Size-Fits-All”</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.sideTitle}>Solutions</h3>
            <ul className={styles.list}>
              <li>Diverse range of interdisciplinary options blended with CS</li>
              <li>Exposure to different career paths</li>
              <li>Models teacher training for interdisciplinary CS instruction</li>
              <li>Catering to different interests and learning styles</li>
              <li>Provides varied skill levels</li>
            </ul>
          </div>
        </div>

      <ExploreMore />
      </div>
    </div>
  );
};

export default CSIntroSection;