import React from "react";
import Layout from "../../Layout/Layout";
import gridCard1 from "../../../Images/gridCard1.png";
import gridCard1Responsive from "../../../Images/gridCard1_responsive.png";
import gridCard2 from "../../../Images/gridCard2.png";
import gridCard2Responsive from "../../../Images/gridCard2_responsive.png";
import center_card from "../../../Images/center card.png";
import center_card_responsive from "../../../Images/center card responsive.png";

const GridCard = () => {
  return (
    <Layout>
      <div className="name">
        <h2>Grid card</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>grid-card-1 (HTML)</h3>
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
            <h3>grid-card-2 (HTML)</h3>
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

      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>center card (HTML)</h3>
            <img src={center_card} alt="nav" />
          </div>
          <div className="card">
            <h3>center card responsive</h3>
            <img src={center_card_responsive} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/grid-card-center"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/grid-card-center/"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          visit site
        </a>
        <a
          href="https://codepen.io/dev-ashik/pen/PoRxQOz"
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
