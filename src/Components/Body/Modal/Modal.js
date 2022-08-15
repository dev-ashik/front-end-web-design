import React from "react";
import Layout from "../../Layout/Layout";
import modal_1 from "../../../Images/modal_1.png";

const Modal = () => {
  return (
    <Layout>
      <div className="name">
        <h2>Modal</h2>
      </div>
      <section className="section">
        <div className="wrapper">
          <div className="card">
            <h3>Modal-1 (HTML)</h3>
            <img src={modal_1} alt="nav" />
          </div>
        </div>

        <br />
        <a
          href="https://github.com/dev-ashik/modal-html"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev-ashik.github.io/modal-html/"
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

export default Modal;
