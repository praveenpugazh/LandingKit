import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prev) => !prev);
  };
  const closeToggle = () => {
    setNavToggle(false);
  };
  return (
    <header className={styles.headContainer}>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Landkit.</h1>
          </Link>
        </div>
        <div className={styles.pages}>
          <Link to="/landings">
            <p>Landings</p>
          </Link>
          <Link to="/pages">
            <p>Pages</p>
          </Link>
          <Link to="/account">
            <p>Account</p>
          </Link>
          <Link to="/documentation">
            <p>Documentation</p>
          </Link>
        </div>
        <div className={styles.btn}>
          <button>Buy Now</button>
        </div>
      </nav>
      <div className={styles.mobileNav}>
        <div className={styles.hamburger} onClick={navHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`${styles.mobilePages} ${navToggle && styles.active}`}
        onClick={closeToggle}
      >
        <Link to="/landings">
          <p>Landings</p>
        </Link>
        <Link to="/pages">
          <p>Pages</p>
        </Link>
        <Link to="/account">
          <p>Account</p>
        </Link>
        <Link to="/documentation">
          <p>Documentation</p>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
