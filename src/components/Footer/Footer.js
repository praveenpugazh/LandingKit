import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <h1>Landkit.</h1>
          <p>A better way to build.</p>
          <p>socials</p>
        </div>
        <div className={styles.extras}>
          <p>PRODUCTS</p>
          <p>Page Builder</p>
          <p>UI Kit</p>
          <p>Style Guide</p>
          <p>Page Builder</p>
          <p>UI Kit</p>
          <p>Style Guide</p>
          <p>Changle Log</p>
        </div>
        <div className={styles.extras}>
          <p>SERVICES</p>
          <p>Documentation</p>
          <p>Changle Log</p>
          <p>Style Guide</p>
        </div>
        <div className={styles.extras}>
          <p>CONNECT</p>
          <p>Documentation</p>
          <p>Changle Log</p>
          <p>Style Guide</p>
          <p>Page Builder</p>
          <p>UI Kit</p>
          <p>Style Guide</p>
        </div>
        <div className={styles.extras}>
          <p>LEGAL</p>
          <p>Documentation</p>
          <p>Changle Log</p>
          <p>Style Guide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
