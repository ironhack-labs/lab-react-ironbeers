import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";


function NewBeer() {
  const [beerName, setBeerName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewerTips, setBrewerTips] = useState("")
  const [attenuation, setAttenuation] = useState(0)
  const [contributedBy, setContributedBy] = useState("")
  const [image,setImage] = useState("")

  const history = useHistory();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const body = {
      name: beerName,
      image_url: image,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attenuation_level: attenuation,
      contributed_by: contributedBy
    }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response)=>{
        setBeerName("");
        setImage("")
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewerTips("");
        setAttenuation(0);
        setContributedBy("");

        history.push('/beers')
      })
  }


    return (
      <div className="NewBeer row-12">
        <Navbar/>
        <h3>Add Beer</h3>      

      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          value={beerName}
          placeholder="Name"
          onChange={(e) => setBeerName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="tagline"
          value={tagline}
          placeholder="Tagline"
          onChange={(e) => setTagline(e.target.value)}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          name="first-brewed"
          value={firstBrewed}
          placeholder="First brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <input
          type="text"
          name="brewer-tips"
          value={brewerTips}
          placeholder="Brewer Tips"
          onChange={(e) => setBrewerTips(e.target.value)}
        />
        <input
          type="number"
          name="attenuation"
          value={attenuation}
          placeholder="Attenuation Level"
          onChange={(e) => setAttenuation(e.target.value)}
        />
        <input
          type="text"
          name="contributed-by"
          value={contributedBy}
          placeholder="Contributed By"
          onChange={(e) => setContributedBy(e.target.value)}
        />
        
        <button type="submit">Add Beer</button>
        
      </form>
      </div>
    );
  }
  export default NewBeer;