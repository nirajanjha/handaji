import React from "react";
import Lingumi from "../images/Lingumi-Logo.png";
import MIT from "../images/MIT_new.png";
import Microsoft from "../images/microsoft_new.png";
import FCRR from "../images/FCRR_new-1.png";
import Reach from "../images/reacheveryreader_new.png";
// import { Grid } from "@material-ui/core";

function Main() {
  return (
    <div className="client-section">
      <div>
        <h1>We've Unlocked The Market</h1>
        <p>
          After 7 years researching kids’ speech patterns and behaviors, we’ve
          developed voice technology for kids that is accurate, private, and
          scalable enough to become the gold standard across education and
          entertainment for kids markets globally.
        </p>
      </div>
      <h2>Our Voice Technology is Trusted By</h2>
      <div
        container
        style={{ display: "flex", flexWrap: "wrap", padding: "50px 50px" }}
      >
        <img className="image-section" src={Lingumi} alt="Logo" />
        <img className="image-section" src={MIT} alt="Logo" />
        <img className="image-section" src={Microsoft} alt="Logo" />
        <img className="image-section" src={FCRR} alt="Logo" />
        <img className="image-section" src={Reach} alt="Logo" />
      </div>
    </div>
  );
}

export default Main;
