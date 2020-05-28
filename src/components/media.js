import React from "react";
// import { Container, Grid, Button } from "@material-ui/core";
import Wired from "../images/wired.png";
import Voiceotai from "../images/voicebotai.png";
import Siliconrepublic from "../images/siliconrepublic.png";
import Fortune from "../images/fortune_logo-1.png";
import Techcrunch from "../images/techcrunch.png";
import Edsurge from "../images/edsurge.png";
import Forbes from "../images/forbes-1.png";

function Media() {
  return (
    <div className="media-section">
      <h1>SoapBox in the Media</h1>
      <div className="media-image" container>
        <div className="media-image-section">
          <img className="image" src={Wired} alt="Logo" />
        </div>
        <div className="media-image-section">
          <img className="image" src={Voiceotai} alt="Logo" />
        </div>
        <div className="media-image-section">
          <img className="image" src={Siliconrepublic} alt="Logo" />
        </div>
        <div className="media-image-section">
          <img className="image" src={Fortune} alt="Logo" />
        </div>
        <div className="media-image-section">
          <img className="image" src={Techcrunch} alt="Logo" />
        </div>
        <div className="media-image-section">
          <img className="image" src={Edsurge} alt="Logo" />
        </div>
        <div className="media-image-section">
          <img className="image" src={Forbes} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Media;
