import React from 'react';
import Layout from '../../Layout/Layout';
import swiper from "../../../Images/swiper.png";

const Slider = () => {
    return (
        <Layout>
      <div className="name">
        <h2>navigation bar</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>nav-fa-bars-close (HTML)</h3>
            <img src={swiper} alt="nav" />
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
          href="https://dev-ashik.github.io/slider-swiper-html/"
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

export default Slider;