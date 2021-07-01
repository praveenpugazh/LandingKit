import React from "react";
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>
          Welcome to <span>Landkit.</span>
        </h1>
        <h1>Deploy Anything.</h1>
        <p>Build a beautiful, modern website with flexible </p>
        <p>Bootstrap components built from scratch </p>
      </div>
      <div className={styles.imageContent}></div>
    </div>
  );
};

export default Landing;
