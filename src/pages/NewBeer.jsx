import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [newBeerObj, setNewBeerObj] = useState({
    name: "",
    tagline: "",
    contributed_by: "",
    description: ""

  });
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setNewBeerObj({ ...newBeerObj, [name]: value }); 
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("new beer", newBeerObj);
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeerObj
      );
      // not sure if i need to reset the state, but i i do it´s here i should do it

    } catch (error) {
      console.log("fridge did not accept new beer. If IPA, then throw in trash", error)
    }
  }



  return (
    <div>
      {" "}
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
      <div>
        <h1>Create a New Beer</h1>
        <form onSubmit={handleSubmit}>
          <label>Name Your Beer:</label>
          <input type="text" name="name" value={newBeerObj.name} onChange={handleChange}/>

          <label>Tagline:</label>
          <input type="text" name="tagline" value={newBeerObj.tagline} onChange={handleChange}/>
          
         <label>Made By:</label>
          <input type="text" name="contributed_by" value={newBeerObj.contributed_by} onChange={handleChange}/>

          <label>Description:</label>
          <input type="text" name="description" value={newBeerObj.description} onChange={handleChange}/>


          <button>Brew!</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
