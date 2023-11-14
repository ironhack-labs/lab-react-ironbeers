import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
        name : name,
        tagline : tagline,
        description : description,
        first_brewed : firstBrewed,
        brewers_tips : brewersTips,
        attenuation_level : attenuationLevel,
        contributed_by : contributedBy
    }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new",newBeer)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log("error to add new beer : ",error))

  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="enter the name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Tagline
        <input
          type="text"
          name="tagline"
          value={tagline}
          placeholder="enter the tagline"
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
      </label>
      <label>
        Description
        <textarea
          type="text"
          name="description"
          value={description}
          placeholder="enter the description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <label>
        First brewed
        <input
          type="text"
          name="first_brewed"
          value={firstBrewed}
          placeholder="MM/YYYY"
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
      </label>
      <label>
        Brewer's Tips
        <input
          type="text"
          name="brewers_tips"
          value={brewersTips}
          placeholder="enter the brewer's tips"
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />
      </label>
      <label>
        Attenuation Level
        <input
          type="number"
          name="attenuation_level"
          value={attenuationLevel}
          placeholder="enter the attenuation level"
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />
      </label>
      <label>
        Contributed by
        <input
          type="text"
          name="contributed_by"
          value={contributedBy}
          placeholder="enter the contributor"
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
      </label>

      <button type="submit">Add beer</button>
    </form>
  );
}

export default AddBeerPage;
