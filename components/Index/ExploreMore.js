import React from "react";
import styles from "styles/Index/ExploreMore.module.css";

const ExploreMore = () => (
  <div className={styles.exploreContainer}>
    <div className={styles.exploreTitle}>Explore More</div>
    <a href="/Csplusx" className={styles.exploreLink}>
      <img
        src="/computer.png"
        alt="Explore More Computer"
        className={styles.exploreImage}
      />
    </a>
  </div>
);

export default ExploreMore;
