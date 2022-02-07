import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({listings, setListings}) {

   function onHandleDelete(id){
    const updatedList = listings.filter((listing) => listing.id !== id)
    setListings(updatedList)

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then((listing) => console.log(listing , "has been deleted"))
  }


  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=> <ListingCard key={listing.id} listing={listing} onHandleDelete={onHandleDelete}/> )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
