import React from "react";
import Hockey from "../assets/Hockey.jpg"
import "../styles/About.css";

function About() {

  //About Page
  return (
    <main className="about">
      <main
        className="aboutTop"
          style={{ backgroundImage: `url(${Hockey})` }}
      ></main>

      <main className="aboutBottom">
        <h1>WHAT IS DPM FUN STUFF</h1>
          <p>
            DPM Fun Stuff is a sport and electronic for everyone who wanted to look for their favourite consoles and equipment
          </p>
      </main>
    </main>
  );
}

export default About;