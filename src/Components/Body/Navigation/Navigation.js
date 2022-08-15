import React from "react";
import Layout from "../../Layout/Layout";
import nav1 from "../../../Images/nav1.png";
import nav1_responsive from "../../../Images/nav1_responsive.png";
import nav2 from "../../../Images/nav2.png";
import nav2_responsive from "../../../Images/nav2_responsive.png";
import nav_fa_bars_close  from "../../../Images/nav-fa-bars-close.png";
import nav_fa_bars_close_responsive from "../../../Images/nav-fa-bars-close responsive.png";

const Navigation = () => {
  return (
    <Layout>
      <div className="name">
        <h2>navigation bar</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>nav-fa-bars-close (HTML)</h3>
            <img src={nav_fa_bars_close} alt="nav" />
          </div>
          <div className="card">
            <h3>nav-fa-bars-close responsive</h3>
            <img src={nav_fa_bars_close_responsive} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/nav-fa-bars-close"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/nav-fa-bars-close/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a>
      </section>

      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>nav-using-checkBox (HTML)</h3>
            <img src={nav1} alt="nav" />
          </div>
          <div className="card">
            <h3>nav-using-checkBox responsive</h3>
            <img src={nav1_responsive} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/nav-using-checkBox"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/nav-using-checkBox/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a>
      </section>

      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>nav-2 (HTML)</h3>
            <img src={nav2} alt="nav" />
          </div>
          <div className="card">
            <h3>nav-2 responsive</h3>
            <img src={nav2_responsive} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/nav-2"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/nav-2/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a>
      </section>
    </Layout>
  );
};

export default Navigation;
