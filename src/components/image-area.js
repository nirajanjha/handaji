import React from "react";
import { Grid, Button } from "@material-ui/core";

function Main() {
  return (
    <div>
      <Grid container>
        <Grid item md={6} sm={6} xs={12}></Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className="image-right">
            <h1>We Are Voice Tech for Kids.</h1>
            <p>
              Proprietary and built from the ground up, our technology
              voice-enables remote learning literacy and language tools, toys
              and games for kids ages 3-12 years.
            </p>
            <Button
              className="top-button"
              variant="contained"
              style={{
                backgroundColor: "#f0800e",

                color: "white"
              }}
            >
              90 Day Free Access API
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
