import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewBeer.css";

function NewBeer() {
  const [beers, setBeers] = useState({});
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState("");
  const [contributed, setContributed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBeers(() => {
      const newBeer = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: tips,
        attenuation_level: attenuation,
        contributed_by: contributed,
      };
      return newBeer;
    });
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setTips("");
    setAttenuation("");
    setContributed("");
  };

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/beers/new", beers)
      .then(() => {
        navigate("/beers", { replace: true });
      })
      .catch((error) => console.log(error.response.data));
  }, [beers, navigate]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="input-box"
          required
          type="text"
          name="name"
          value={name}
          placeholder="Name your beer"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Tagline</label>
        <input
          className="input-box"
          type="text"
          name="tagline"
          value={tagline}
          placeholder="Any tagline?"
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <label>Description</label>
        <textarea
          className="input-box"
          type="text"
          cols={40}
          rows={4}
          name="description"
          value={description}
          placeholder="Add a description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label>First Brewed</label>
        <input
          className="input-box"
          type="text"
          name="first_brewed"
          value={firstBrewed}
          placeholder="When was this brewed"
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
        <label>Brewer's tips</label>
        <input
          className="input-box"
          type="text"
          name="brewers_tips"
          value={tips}
          placeholder="Any tip?"
          onChange={(e) => {
            setTips(e.target.value);
          }}
        />
        <label>Attenuation Level</label>
        <input
          className="input-box"
          type="number"
          name="attenuation_level"
          value={attenuation}
          placeholder="Add the attenuation level"
          onChange={(e) => {
            setAttenuation(e.target.value);
          }}
        />
        <label>Contributed by</label>
        <input
          className="input-box"
          type="text"
          name="contributed_by"
          value={contributed}
          placeholder="Add the attenuation level"
          onChange={(e) => {
            setContributed(e.target.value);
          }}
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
