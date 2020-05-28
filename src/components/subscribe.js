import React from "react";
// import { Grid, Container } from "@material-ui/core";

function Subscribe() {
  return (
    <div className="subscribe-section">
      <h1>Subscribe for News and Updates</h1>
      <form style={{ textAlign: "center" }}>
        <input type="text" name="name" placeholder="email address" />
        <input
          style={{
            padding: "11px 25px",
            backgroundColor: "#f0800e",
            border: "none",
            color: "white",
            borderRadius: "4px",
            marginLeft: "5px"
          }}
          type="submit"
          value="Subscribe"
        />
      </form>
    </div>
  );
}

export default Subscribe;
