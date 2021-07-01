import React from "react";
import image from "../../assets/dashboard.jpg";
import styles from "./Dashboard.module.css";
import stone from "../../assets/stoneage.svg";
import code from "../../assets/code.svg";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>We have lots of experience</h1>
        <h1 className={styles.blueText}>building Bootstrap themes</h1>
        <p>We've built well over a dozen bootstrap themes and sold</p>
        <p>tens of thousands of copies </p>
        <div className={styles.flexContainer}>
          <img src={stone} alt="" />
          <div>
            <h3>Bootstrap user since begining</h3>
            <p>We've been developing with bootstrap since it was</p>
            <p>published in 2011.</p>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <img src={code} alt="" />
          <div>
            <h3>Deep understanding of Bootstrap</h3>
            <p>We've been developing with bootstrap since it was</p>
            <p>published in 2011.</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContent}>
        <img src={image} alt="landing" />
      </div>
    </div>
  );
};

export default Dashboard;
