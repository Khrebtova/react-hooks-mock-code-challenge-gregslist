import React from "react";
import Search from "./Search";
import NewListing from "./NewListing"

function Header({onHandleSearch, onHandleNewListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSearch={onHandleSearch}/>
      <NewListing onHandleNewListing={onHandleNewListing}/>
    </header>
  );
}

export default Header;
