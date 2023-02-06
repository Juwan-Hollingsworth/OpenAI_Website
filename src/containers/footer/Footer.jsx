import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__main">
      <div className="openAI__logo">
        <svg xmlns="http://www.w3.org/2000/svg" />
      </div>
      <div class="footer__row">
        <div class="column__A">
          <h3>FEATURED</h3>
          <ul class="featured__links">
            <li>ChatGPT</li>
            <li>DALL-E2</li>
            <li>Whisper</li>
            <li>Alignment</li>
            <li>Startup Fund</li>
          </ul>
        </div>
        <div class="column__B">
          <h3>API</h3>
          <ul class="api__links">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Examples</li>
            <li>Docs</li>
            <li>Terms & Policies</li>
            <li>Status</li>
            <li>Log in</li>
          </ul>
        </div>
        <div class="column__C">
          <h3>BLOG</h3>
          <ul class="blog__links">
            <li>Index</li>
            <li>Research</li>
            <li>Announcements</li>
            <li>Events</li>
            <li>Milestones</li>
          </ul>
        </div>
        <div class="column__D">
          <h3>INFROMATION</h3>
          <ul class="information__links">
            <li>About Us</li>
            <li>Our Charter</li>
            <li>Our Research</li>
            <li>Publications</li>
            <li>Newsroom</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer__banner">
          <div class="row">
            <div class="banner__colA">
              <a>OpenAI © 2015–2023</a>
              <a>Privacy Policy</a>
              <a>Terms of Use</a>
            </div>
            <div class="banner__colB">B</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
