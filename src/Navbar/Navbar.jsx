import React from "react";
import "./Navbar.css"
import logo from"./logo.svg"
import Plus from"./Plus.svg"
import Search from"./Search.svg"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="sub_media">
        <div className="nav">
          <a className="logo" href="/">
            <img src={logo} alt="The Movie Database" />
          </a>
          <ul className="navigation">
            <li><a href="/">Movies</a></li>
            <li><a href="/">TV Shows</a></li>
            <li><a href="/">People</a></li>
            <li><a href="/">More</a></li>
          </ul>
        </div>
        <div className="flex">
          <a className="Plus" href="/">
            <img src={Plus} alt="The Movie Database" />
          </a>
          <ul className="right">
            <li>
              <a className="en" href="/">EN</a>
            </li>
            <li>
              <a className="" href="/">
              Login
              </a>
            </li>
            <li>
              <a className="" href="/">
              Join TMDB
              </a>
            </li>
          </ul>
          <a className="nav-search-icon" href="/">
            <img src={Search} alt="search"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;