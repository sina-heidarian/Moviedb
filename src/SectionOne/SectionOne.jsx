import React from "react";
import "./SectionOne.css"
import Search from "../Search/Search"
const SectionOne = () => {
    return (
      <div className="MainSectionOne">
        <div className="main-content">
          <div className="Title">
            <h2>Welcome.</h2>
            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
          </div>
          <div>
            <Search />
          </div>
          </div>
      </div>
    );
  };
  
  export default SectionOne;