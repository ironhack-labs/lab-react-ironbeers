import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const [apiSuccessful, setApiSuccessful] = useState("");

  function createBeer(event) {
    event.preventDefault();
    console.log(
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy
    );

    const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/new";

    axios({
      method: "post",
      url: apiUrl,
      data: {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tip: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      },
    })
      .then((response) => {
        console.log(response.data.message);
        setApiSuccessful(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (apiSuccessful) {
    return (
      <div>
        <p>{apiSuccessful}</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={createBeer}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </label>

        <label htmlFor="tagline">
          <p>Tagline</p>
          <input
            type="text"
            name="tagline"
            id="tagline"
            onChange={(event) => {
              setTagline(event.target.value);
            }}
            value={tagline}
          />
        </label>

        <label htmlFor="description">
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
        </label>

        <label htmlFor="first_brewed">
          <p>First Brewed</p>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            onChange={(event) => {
              setFirstBrewed(event.target.value);
            }}
            value={firstBrewed}
          />
        </label>

        <label htmlFor="brewers_tips">
          <p> Brewer's Tips</p>
          <input
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            onChange={(event) => {
              setBrewersTips(event.target.value);
            }}
            value={brewersTips}
          />
        </label>

        <label htmlFor="attenuation_level">
          <p>Attenuation Level</p>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            onChange={(event) => {
              setAttenuationLevel(event.target.value);
            }}
            value={attenuationLevel}
          />
        </label>

        <label htmlFor="contributed_by">
          <p>Contributed By</p>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            onChange={(event) => {
              setContributedBy(event.target.value);
            }}
            value={contributedBy}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
