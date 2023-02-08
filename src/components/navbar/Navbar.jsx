import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar__main">
      <div class="nav__row">
        <div class="nav__columnA">LOGO</div>
        <div class="nav__columnB">
          {" "}
          <ul class="nav__links">
            <li>
              <a>API</a>
            </li>
            <li>
              <a>Research</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
