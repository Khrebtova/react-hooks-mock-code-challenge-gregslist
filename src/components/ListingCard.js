import React , { useState } from "react";


function ListingCard({listing, onHandleDelete}) {
  const [isFavorite, setIsFavorite] = useState(false)
  
  function handleStarBtn(){
     setIsFavorite(!isFavorite)
  }
  
  function handleDelete(){
    console.log("delete: ", listing.description)
    onHandleDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleStarBtn}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarBtn}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
