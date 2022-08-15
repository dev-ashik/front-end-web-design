import React from "react";
import styles from "./ToggleButton.module.css";
import Layout from "../../Layout/Layout";
import toggleButton from "../../../Images/toggleButton.png";
import toggleButtonDark from "../../../Images/toggleButtonDark.png";

const ToggleButton = () => {
  return (
    <Layout>
      <div className="name">
        <h2>Toggle Button</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className={styles.card}>
            <h3>Toggle Button (HTML)</h3>
            <img src={toggleButton} alt="nav" />
          </div>
          <div className={styles.card}>
            <h3>Toggle Button Dark</h3>
            <img src={toggleButtonDark} alt="nav" />
          </div>
        </div>

        <br />
        {/* <a
          href="https://github.com/dev-ashik/grid-card"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a> */}
        {/* <a
          href="https://dev-ashik.github.io/grid-card/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a> */}
        <a
          href="https://codepen.io/dev-ashik/pen/ZExjYYv"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          Codepen
        </a>
      </section>
    </Layout>
  );
};

export default ToggleButton;
