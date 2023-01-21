import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function CreateBeer() {

    const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            "name": name,
            "tagline": tagline,
            "description": description,
            "first_brewed": first_brewed,
            "attenuation_level": attenuation_level,
            "contributed_by": contributed_by
        }

        axios.post(baseURL + '/new', newBeer)
            .then((response) => {
                setName("");
                setTagline("");
                setDescription("");
                setFirst_brewed("");
                setAttenuation_level(0);
                setContributed_by("");
                console.log(response.data)
            })
            .catch((e) => {
                console.log(e);
              });
              navigate("/")
    }


  return (
    <>
      <NavLink to="/">Home</NavLink>
      <h2>Create a Beer</h2>
      <form onSubmit={handleSubmit}>
        <label> Name
          <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={name} 
          onChange={(e) => {setName(e.target.value)}}/>
        </label>
        <label> Tagline
          <input
          type="text"
          name="tagline"
          placeholder="Enter the tagline"
          value={tagline} 
          onChange={(e) => {setTagline(e.target.value)}}
          />
        </label>
        <label> Description
          <textarea
          type="text"
          name="description"
          placeholder="Enter the description"
          cols="50"
          rows="6"
          value={description}
          onChange={(e) => {setDescription(e.target.value)}}/>
        </label>
        <label> First brewed
          <input
          type="text"
          name="first_brewed"
          placeholder="Enter the first brewed"
          value={first_brewed} 
          onChange={(e) => {setFirst_brewed(e.target.value)}} />
        </label>
        <label> Attenuation level
          <input
          type="number"
          name="attenuation"
          placeholder={0}
          min={0}
          value={attenuation_level}
          onChange={(e) => {setAttenuation_level(e.target.value)}} />
        </label>
        <label> Contributed by
          <input
          type="text"
          name="contributor"
          placeholder="Enter thr contributor"
          value={contributed_by}
          onChange={(e) => {setContributed_by(e.target.value)}} />
        </label>
        <button>Create beer</button>
      </form>
    </>
  );
}
export default CreateBeer;
