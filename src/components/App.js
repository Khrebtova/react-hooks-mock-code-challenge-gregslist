import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [listToDisplay, setListTodisplay] = useState([])
    
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then((r)=> r.json())
    .then((data)=>{
      setListings(data); 
      setListTodisplay(data)
    })
  }, [listToDisplay])

  function handleSearch(searchBy){
    if(searchBy){
      const filteredArray = listings.filter((listing) => listing.description.toLowerCase().includes(searchBy))
      setListTodisplay(filteredArray)
    }else{
      setListTodisplay(listings)
    }
  }

  function addNewListing(newListing){
    const updatedArray = [...listToDisplay, newListing]
    setListTodisplay(updatedArray)
  }

  return (
    <div className="app">
      <Header onHandleSearch={handleSearch} onHandleNewListing={addNewListing}/>
      <ListingsContainer listings={listToDisplay} setListings={setListTodisplay}/>
    </div>
  );
}

export default App;
