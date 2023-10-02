import React from "react";
import "./Navbar.css"
import YourSvg from"./logo.svg"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="content">
        <div className="sub_media">
          <div className="nav">
            <a className="logo" href="/">
              <img src={YourSvg} alt="The Movie Database" />
            </a>
            <ul className="navigation">
              <li>Movies</li>
              <li>TV Shows</li>
              <li>People</li>
              <li>More</li>
            </ul>
          </div>
          <div className="flex">
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;