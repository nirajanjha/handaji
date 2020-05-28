import React from "react";
import Literacy from "../images/literacy.jpg";
import Language from "../images/language-learning.jpg";
import Toys from "../images/toys.jpg";
import { Grid } from "@material-ui/core";

function Main() {
  return (
    <div className="card-section">
      <div className="card-section-top">
        <h1>Use Cases</h1>
        <p style={{ textAlign: "center", padding: "0px 200px" }}>
          Education and entertainment companies use our technology to give kids
          voice-enabled play and learning experiences that are engaging,
          accurate and private.
        </p>
      </div>

      <Grid
        container
        style={{ display: "flex", flexWrap: "wrap", padding: "50px 50px" }}
      >
        <Grid sm={4} xs={12}>
          <div className="card-main">
            <img className="card-image" src={Literacy} alt="Logo" />
            <div className="card-content">
              <h3>Literacy</h3>
              <p>
                Voice-enable your remote learning tools to provide immediate
                feedback and encouragement to kids, their parents and teachers.
              </p>
              <p>
                <a href="/">Learn More</a>
              </p>
            </div>
          </div>
        </Grid>
        <Grid sm={4} xs={12}>
          <div className="card-main">
            <img className="card-image" src={Language} alt="Logo" />
            <div className="card-content">
              <h3>Language Learning</h3>
              <p>
                Voice-enable your English and multilingual language learning
                tool to give kids an interactive, cost effective, and
                independent learning experience.
              </p>
              <p>
                <a href="/">Learn More</a>
              </p>
            </div>
          </div>
        </Grid>
        <Grid sm={4} xs={12}>
          <div className="card-main">
            <img className="card-image" src={Toys} alt="Logo" />
            <div className="card-content">
              <h3>Toys & entertainment</h3>
              <p>
                Voice technology brings the joy and magic of interactive play to
                toys and games for young kids. Our solution powers those
                experiences for you.
              </p>
              <p>
                <a href="/">Learn More</a>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
