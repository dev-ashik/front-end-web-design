import React from "react";
import Layout from "../../Layout/Layout";
import toggleButtonDark from "../../../images/toggleButtonDark.png";
import styles from "./ToggleButton.module.css";
import toggleButton from "../../../images/toggleButton.png";

const ToggleButton = () => {
  return (
    <Layout>
      <div className="name">
        <h2>Button Toggle</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className={styles.card}>
            <h3>Toggle Button</h3>
            <img src={toggleButton} alt="toggle Button" />
          </div>
          <div className={styles.card}>
            <h3>Toggle Button dark</h3>
            <img src={toggleButtonDark} alt="toggle Button Dark" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/Toggle_button"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/Toggle_button/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a>
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