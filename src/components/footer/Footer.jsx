import React from "react";
import bgfootertop from "./../../assets/bg-footer-top-desktop.svg";

function Footer(props) {
  return (
    <div className="footer-full">
      <img src={bgfootertop} alt="top" />
      <div className="footer-content">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <h5> Phone: +1-543-123-4567</h5>
          <h5> example@huddle.com</h5>
          <div className="social-icons"></div>
        </div>
        <div className="news-letter">
          <h2>Newsletter</h2>
          <p>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <div className="email-form">
            <input type="email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
