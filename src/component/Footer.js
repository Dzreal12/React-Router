import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";

//Footer
function Footer() {
  return (
    <main className="footer">
      <main className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </main>
      <p> &copy; 2022 DPM Fun Stuff</p>
    </main>
  );
}

export default Footer;
