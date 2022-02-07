import React, {useState} from "react";

function Search({onHandleSearch}) {
  const [searchBy, setSearchBy] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchBy, "submitted");
    onHandleSearch(searchBy)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
