import React, {useState} from "react"

function NewListing({onHandleNewListing}){
    const [newListing, setNewListing] = useState({
      "description": "",
      "image": "",
      "location": ""
    })
    
    function handleInputChange(e){
        const key = e.target.name
        const value = e.target.value
        const formData={...newListing, [key]: value}
        setNewListing(formData)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(newListing)
            })
        .then((r)=> r.json())
        .then((data)=> onHandleNewListing(data))
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} name="description" type="text" placeholder="description.."></input>
            <input onChange={handleInputChange} name = "location" type="text" placeholder="location.."></input>
            <input onChange={handleInputChange} name="image" type="text" placeholder="image URL.." ></input>
            <button type="submit">Submit listing</button>
        </form>
    )
}

export default NewListing