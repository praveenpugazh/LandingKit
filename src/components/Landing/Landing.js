import React from "react";
import image from "../../assets/landing.svg";
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>
          Welcome to <span>Landkit.</span>
        </h1>
        <h1>Deploy Anything.</h1>
        <p>Build a beautiful, modern website with flexible</p>
        <p>Bootstrap components built from scratch. </p>
        <button className={styles.viewBtn}>View all pages &rarr;</button>
        <button className={styles.docBtn}>Documentation</button>
      </div>
      <div className={styles.imageContent}>
        <img src={image} alt="landing" />
      </div>
    </div>
  );
};

export default Landing;
