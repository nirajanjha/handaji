import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/image-area";
import Image from "./images/main-image-2.jpg";
import Widget from "./components/widget";
import Client from "./components/client";
import Card from "./components/card";
import News from "./components/news";
import Media from "./components/media";
import Subscribe from "./components/subscribe";
import Foot from "./components/footer";

function App() {
  return (
    <div className="App">
      <div
        className="image-area"
        style={{ color: "white", backgroundImage: `url( ${Image} )` }}
      >
        <Navbar></Navbar>
        <Main></Main>
      </div>
      <Widget></Widget>

      <Client></Client>
      <Card></Card>
      <News></News>
      <Media></Media>
      <Subscribe></Subscribe>
      <Foot></Foot>
    </div>
  );
}

export default App;
