import React from "react";
import Phone from "../assets/Phone.jpg";
import "../styles/Contact.css";

function Contact() {
  //Contact Information
  return (
    <main className="contact">
      <main
      //Background
        className="leftSide"
        style={{ backgroundImage: `url(${Phone})` }}
      ></main>
      <main className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter your full name name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Please write a message"
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </main>
    </main>
  );
}

export default Contact;