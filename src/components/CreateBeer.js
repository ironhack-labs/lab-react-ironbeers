import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const navigate = useNavigate();

    const url = "https://ih-beers-api2.herokuapp.com/beers/new"

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBeer = {
           name: name,
           tagline: tagline,
           description: description,
           first_brewed: firstBrewed,
           brewers_tips: brewersTips,
           attenuation_level: attenuationLevel,
           contributed_by: contributedBy
        };
        axios.post(url, newBeer)
          .then(function (response) {
            console.log(response);
            navigate("/beers");
          })
          .catch(function (error) {
            console.log(error);
          });

          setName("");
          setTagline("");
          setDescription("");
          setFirstBrewed("");
          setBrewersTips("");
          setAttenuationLevel(0);
          setContributedBy("");
      };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required={true}
          placeholder="Enter the name of the beer"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="tagline"
          placeholder="Enter the tagline"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter the description of the beer"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          name="first_brewed"
          placeholder="Enter when it was first brewed"
          value={firstBrewed}
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
        <input
          type="text"
          name="brewers_tips"
          placeholder="Enter your best brewing tips"
          value={brewersTips}
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />
        <input
          type="number"
          name="attenuation_level"
          required={true}
          placeholder="Enter the attenuation level"
          value={attenuationLevel}
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />
        <input
          type="text"
          name="contributed_by"
          placeholder="Enter your name"
          value={contributedBy}
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
        

        <button>Create</button>
      </form>
    </>
  );
}

export default CreateBeer;
