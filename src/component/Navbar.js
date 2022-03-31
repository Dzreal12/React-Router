import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/OliveLogo.png';
import TocIcon from '@mui/icons-material/Toc';
import "../styles/Navbar.css";

 //Navigation Bar
function Navbar() {
  const [ openLinks, setOpenLinks ] = useState (false);

  const toggleNavbar = () => {
    setOpenLinks( !openLinks );
  };

//Setup for the Navigation Bar
  return (
    <main className="navbar">
      <main className="leftSide" id={ openLinks ? "open" : "close" }>

        <img src={ Logo } />
            <main className="hiddenLinks">
              <NavLink to="/"> Home </NavLink>
                <NavLink to="/project"> Project </NavLink>
                  <NavLink to="/about"> About </NavLink>
                    <NavLink to="/contact"> Contact </NavLink>
        </main>

      </main>
        <main className="rightSide">
          <NavLink to="/"> Home </NavLink>
            <NavLink to="/project"> Project </NavLink>
              <NavLink to="/about"> About </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
            
            <button onClick={toggleNavbar}>
                <TocIcon />
            </button>

      </main>
    </main>
  );
}

export default Navbar;