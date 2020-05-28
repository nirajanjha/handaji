import React from "react";
import { Container, Grid, Button } from "@material-ui/core";

function Main() {
  return (
    <div className="widget-section">
      <Container>
        <h1>Voice Tech for Kids That Actually Works</h1>

        <Grid container>
          <Grid item sm={1} xs={0}></Grid>
          <Grid item sm={10} xs={12}>
            <div className="card-wrapper">
              <div className="card">
                <p className="top-para">
                  "SoapBox Labs has developed a unique speech recognition
                  technology that actually works for children"
                </p>
                <p className="bottom-para">
                  Dr. Yaacov Petscher, Florida Center for Reading Research,
                  Florida State University
                </p>
              </div>
              <Button
                className="button"
                variant="contained"
                style={{
                  backgroundColor: "#f0800e",

                  color: "white"
                }}
              >
                Learn More
              </Button>
            </div>
          </Grid>
          <Grid item sm={1} xs={0}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
