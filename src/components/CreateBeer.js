import { Link } from "react-router-dom";
import { useState } from "react";

function CreateBeer({callbackToCreate}) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [description, setDescription] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      first_brewed: first_brewed,
      description: description,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    callbackToCreate(newBeer);

    // to clear form
    setName("");
    setTagline("");
    setFirst_brewed("");
    setDescription("");
    setBrewers_tips("");
    setAttenuation_level("");
    setContributed_by("");
  };

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>

      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          name='name'
          placeholder='beer name'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        <input
          type='text'
          name='tagline'
          placeholder='beer tagline'
          value={tagline}
          onChange={(e) => { setTagline(e.target.value) }}
        />
        <input
          type='text'
          name='description'
          placeholder='beer description'
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
        />
        <input
          type='text'
          name='first brewed'
          placeholder='first brewed'
          value={first_brewed}
          onChange={(e) => { setFirst_brewed(e.target.value) }}
        />
        <input
          type='text'
          name='brewers tips'
          placeholder='brewers tips'
          value={brewers_tips}
          onChange={(e) => { setBrewers_tips(e.target.value) }}
        />
        <input
          type='number'
          name='attenuation_level'
          placeholder='attenuation level'
          value={attenuation_level}
          min={0}
          max={100}
          onChange={(e) => { setAttenuation_level(e.target.value) }}
        />
        <input
          type='text'
          name='contributed_by'
          placeholder='contributed by'
          value={contributed_by}
          onChange={(e) => { setContributed_by(e.target.value) }}
        />

        <button>Create a new beer</button>
      </form>
    </div>
  );
}

export default CreateBeer;
