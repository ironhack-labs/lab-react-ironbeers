import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
      
    };

    axios
      .post(process.env.REACT_APP_APIURL + "/new", newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");

        navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <h1>Create New Beer</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value); }} />
          </label>
        </div>
        <div>
          <label>
            Tagline:
            <input type="text" name="tagline" value={tagline}  onChange={(e) => { setTagline(e.target.value); }} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value);  }} />
          </label>
        </div>
        <div>
          <label>
            First brewed(date):
            <input type="text" name="firstBrewed" value={first_brewed} onChange={(e) => { setFirstBrewed(e.target.value);  }} />
          </label>
        </div>
        <div>
          <label>
            Brewers tips:
            <input  type="text" name="brewers_tips" value={brewers_tips} onChange={(e) => { setBrewersTips(e.target.value); }}  />
          </label>
        </div>
        <div>
          <label>
            Attenuation level:
            <input type="number"  name="attenuation_level" value={attenuation_level} onChange={(e) => { setAttenuationLevel(e.target.value); }} />
          </label>
        </div>
        <div>
          <label>
            Contributed by:
            <input type="text" name="contributed_by" value={contributed_by} onChange={(e) => {  setContributedBy(e.target.value); }} />
          </label>
        </div>
        <button className="btn btn-success">Create</button>
      </form>
    </>
  );
}

export default NewBeer;
