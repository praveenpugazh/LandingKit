import React from "react";
import styles from "./SubLanding.module.css";
import toggles from "../../assets/toggles.svg";
import stone from "../../assets/stoneage.svg";
import code from "../../assets/code.svg";
const SubLanding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={toggles} alt="toggles icon" />
        <h3>Built for developers</h3>
        <p>Landkit is buil to make your life easier.</p>
        <p>Variables, build tooling, documentation,</p>
        <p>and resuable components</p>
      </div>
      <div className={styles.content}>
        <img src={stone} alt="toggles icon" />
        <h3>Designed to be modern</h3>
        <p>Landkit is buil to make your life easier.</p>
        <p>Variables, build tooling, documentation,</p>
        <p>and resuable components</p>
      </div>
      <div className={styles.content}>
        <img src={code} alt="toggles icon" />
        <h3>Documentation for everything</h3>
        <p>Landkit is buil to make your life easier.</p>
        <p>Variables, build tooling, documentation,</p>
        <p>and resuable components</p>
      </div>
    </div>
  );
};

export default SubLanding;
