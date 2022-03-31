import React from "react";
import { NavLink } from "react-router-dom";
import BannerImage from '../assets/Gadgets.jpg';
import "../styles/Home.css"

function Home() {

  //Homepage//
  return (
    <main className="home" style={{backgroundImage: `url(${BannerImage})` }}>
      <main className="headerContainer"> 
        <h1> DPM Fun Stuff </h1>
          <p> A COOL FEATURE OF IMAGES AND INVENTORIES</p>
            <NavLink to="/project">
              <button>CHECK IT OUT</button>
            </NavLink>
      </main>
    </main>
  );
}

export default Home;