import React from "react";
import Layout from "../../Layout/Layout";
import gridCard1 from "../../../images/grid-card1.png";
import gridCard1Responsive from "../../../images/grid-card1-responsive.png";
import gridCard2 from "../../../images/grid-card-2.png";
import gridCard2Responsive from "../../../images/grid-card-2-responsive.png";

const GridCard = () => {
  return (
    <Layout>
      <div className="name">
        <h2>navigation bar</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>grid-card-1</h3>
            <img src={gridCard1} alt="nav" />
          </div>
          <div className="card">
            <h3>grid-card-1 responsive</h3>
            <img src={gridCard1Responsive} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/grid-card"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/grid-card/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a>
        <a
          href="https://codepen.io/dev-ashik/pen/KKoebzX"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          Codepen
        </a>
      </section>

      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>grid-card-2</h3>
            <img src={gridCard2} alt="nav" />
          </div>
          <div className="card">
            <h3>grid-card-2 responsive</h3>
            <img src={gridCard2Responsive} alt="nav" />
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
          href="https://codepen.io/dev-ashik/pen/YzavdGz"
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

export default GridCard;
