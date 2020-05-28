import React from "react";
import Soapbox from "../images/soapboxlogo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
// import { ListItem, List, Button, Menu, MenuItem } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar style={{ backgroundColor: "#fff" }} title="My App">
      <Container>
        <Grid container>
          <Grid sm={4}>
            <Toolbar>
              <TypoGraphy variant="title" color="inherit">
                <img className="logo-image" src={Soapbox} alt="Logo" />
              </TypoGraphy>
            </Toolbar>
          </Grid>
          <Grid sm={8}>
            <ul className="nav-menu">
              <li>
                <a>Use Cases</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Navbar;
