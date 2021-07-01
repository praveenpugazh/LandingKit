import React from "react";
import styles from "./FormSection.module.css";
import formImg from "../../assets/form.jpg";
const FormSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formDiv}>
          <div className={styles.formImg}>
            <img src={formImg} alt="" />
          </div>
          <div className={styles.form}>
            <form>
              <input type="text" name="name" placeholder="Name" />
              <br />
              <input type="text" name="email" placeholder="Email" />
              <br />
              <input type="text" name="password" placeholder="Password" />
              <br />
              <button className={styles.btn}>Download a sample</button>
            </form>
          </div>
        </div>
        <div className={styles.textContent}>
          <h2>The most useful resource</h2>
          <h2 className={styles.greenText}>ever created for dev|</h2>
          <p>
            Using landkit to build your site means never worrying about
            designing another page or cross browser compatabiltiy. Our
            ever-growing library of components.cross browser compatabiltiy. Our
            ever-growing library of components
          </p>
          <div className={styles.tick}>
            <p>Lifetime updates</p>
            <p>Tech Supports</p>
            <p>Tons of assets</p>
            <p>Integration Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
