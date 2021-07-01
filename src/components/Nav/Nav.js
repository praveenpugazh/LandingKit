import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <header className={styles.headContainer}>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <h1>Landkit.</h1>
        </div>
        <div className={styles.pages}>
          <p>Landings</p>
          <p>Pages</p>
          <p>Account</p>
          <p>Documentation</p>
        </div>
        <div className={styles.btn}>
          <button>Buy Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
