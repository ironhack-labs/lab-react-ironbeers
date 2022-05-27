import React, { useState, useEffect } from "react";

function NewBeer() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  




  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name}></input>

        <label htmlFor="tagline">Tagline:</label>
        <input type="text" name="tagline" value={tagline}></input>

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" value={description}></input>

        <label htmlFor="brewers_tips">Crewers Tps:</label>
        <input type="text" name="brewers_tips" value={brewers_tips}></input>

        <label htmlFor="attenuation_level ">Attenuation Level :</label>
        <input
          type="number"
          name="attenuation_level "
          value={attenuation_level}
        ></input>

        <label htmlFor="contributed_by">Contributed by:</label>
        <input type="text" name="contributed_by" value={contributed_by}></input>
        <button type="submit">Create new beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
