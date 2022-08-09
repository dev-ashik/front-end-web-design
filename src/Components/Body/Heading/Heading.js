import React from "react";
import Layout from "../../Layout/Layout";

const Heading = () => {
  return (
    <Layout>
      <div className="name">
        <h2>Heading</h2>
      </div>
      <section className="section">
        <div>
          <h1>heading 1</h1>
          <h2>heading 2</h2>
          <h3>heading 3</h3>
          <h4>heading 4</h4>
          <h5>heading 5</h5>
          <h6>heading 6</h6>
        </div>

        <br />
        {/* <a
          href="https://github.com/dev-ashik/grid-card"
          target="_blank"
          className="codeAndSitebtn"
          rel="noreferrer"
        >
          code
        </a> */}
      </section>
    </Layout>
  );
};

export default Heading;
