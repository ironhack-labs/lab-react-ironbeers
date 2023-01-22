import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

export default function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState("");
    const [contributed_by, setContributedBy]=  useState("");
    
    const createBeer = (newBeer) => {
         axios.post(process.env.REACT_APP_API_URL + "/beers/new", newBeer)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    createBeer(newBeer);
    //clear form
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel("");
    setContributedBy("");
  };
  
    return (

        <>
            <Header />
      <h1>Create a new beer</h1>
      <div className="NewBeer">
        <form onSubmit={handleSubmit}>
          <label> Name:
            <input required={true} value={name} onChange={(e) => {setName(e.target.value); }}/>
          </label>
          <label> Tagline:
            <input required={true} value={tagline} onChange={(e) => {setTagline(e.target.value); }}/>
          </label>
          <label> Description:
            <input required={true} value={description} onChange={(e) => {setDescription(e.target.value); }}/>
          </label>
          <label> First brewed:
            <input required={true} value={first_brewed} onChange={(e) => {setFirstBrewed(e.target.value); }}/>
          </label>
          <label> Brewers tips:
            <input required={true} value={brewers_tips} onChange={(e) => {setBrewersTips(e.target.value); }}/>
          </label>
          <label> Attenuation level :
            <input required={true} value={attenuation_level} onChange={(e) => {setAttenuationLevel(Number(e.target.value)); }}/>
          </label>
          <label>Contributed by:
            <input required={true} value={contributed_by} onChange={(e) => {setContributedBy(e.target.value); }}/>
          </label>

          <button>Create</button>
         </form>
      </div>
        </>
    )
}
  
