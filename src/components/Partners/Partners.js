import React from "react";
import styles from "./Partners.module.css";
import airbnb from "../../assets/airbnb.png";
import coinbase from "../../assets/Coinbase.png";
import dribbble from "../../assets/dribbble.png";
import insta from "../../assets/insta.png";
import netflix from "../../assets/netflix.png";
const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={airbnb} alt="" />
        <img src={coinbase} alt="" />
        <img src={dribbble} alt="" />
        <img src={insta} alt="" />
        <img src={netflix} alt="" />
      </div>
    </div>
  );
};

export default Partners;
