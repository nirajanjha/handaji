import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import news from "../images/news.jpg";

function News() {
  return (
    <div className="news-section">
      <h1>Our Latest News</h1>
      <Container>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div className="news-content">
              <p
                style={{
                  fontSize: "20px",
                  color: "#677294",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  lineHeight: "1.5em"
                }}
              >
                Dublin-based Developer of Voice Tech for Kids Raises $6.5M
              </p>
              <p>
                DUBLIN, Ireland (April 21st, 2020) — SoapBox Labs, pioneering
                developer of safe and accurate voice technology for kids, today
                announced new funding of $6.5M.
                <br></br>
                “SoapBox is at the nexus of some big trends right now – remote
                learning, voice, kidtech and data privacy. We’ve invested deeply
                over the last 7 years in our people and our technology. With
                this funding we’re poised to capitalize on our strengths and the
                global market opportunities opening up to us in literacy,
                language learning and toys” says Dr. Patricia Scanlon, Founder
                and CEO.
              </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <img className="news-image" src={news} alt="Logo" />
            <Button
              className="news-button"
              variant="contained"
              style={{
                backgroundColor: "#f0800e",

                color: "white",
                display: "block",
                margin: "auto",
                padding: "12px 30px"
              }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default News;
