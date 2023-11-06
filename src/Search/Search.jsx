import React from "react";
import "./Search.css"

const Search = () => {
    return (
      <div className="search">
        <form action="/search" method="get" acceptCharset="utf-8">
          <label >
            <input className="inner-input" type="text" dir="auto" name="query" tabIndex={1} autoCorrect="off" autoComplete="off" spellCheck="false" placeholder="Search for a movie, tv show, person......"/>
          </label>
          <input className="outer-input" type="submit" value="Search" />
        </form>
      </div>
    );
  };
  
  export default Search;