import React from "react";
import Soapbox from "../images/soapbox.png";
import Footer from "../images/footer.png";
import { Grid, Container } from "@material-ui/core";

function Foot() {
  return (
    <div className="footer">
      <Container>
        <Grid container>
          <Grid item md={5} xs={12}>
            <img className="footer-image" src={Soapbox} alt="Logo" />
            <img src={Footer} alt="Logo" />
          </Grid>
          <Grid item md={3} xs={12}>
            <h2>Menu</h2>
            <ul>
              <li>Use Case</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Services Policy</li>
            </ul>
          </Grid>
          <Grid item md={4} xs={12}>
            <h2>Follow Us</h2>
            <p>
              Email:<span>hello@soapboxlabs.com</span>
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Foot;
