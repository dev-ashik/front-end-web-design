import React from "react";
import Layout from "../../Layout/Layout";
import nav1 from "../../../Images/nav1.png";
import nav1_responsive from "../../../Images/nav1_responsive.png";
import nav2 from "../../../Images/nav2.png";
import nav2_responsive from "../../../Images/nav2_responsive.png";

const Navigation = () => {
  return (
    <Layout>
      <div className="name">
        <h2>navigation bar</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>nav-1</h3>
            <img src={nav1} alt="nav" />
          </div>
          <div className="card">
            <h3>nav-1 responsive</h3>
            <img src={nav1_responsive} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/nav-1"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/nav-1/"
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
            <h3>nav-2</h3>
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
