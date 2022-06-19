import { useState } from "react";

function CreateBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState("1");
  const [creator, setCreator] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const body = {name: name, attenuation_level: attenuation, brewers_tips: tips, description: description, first_brewed: firstBrewed, contributed_by: creator, tagline: tagline}
    console.log(body)
    await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })}
  

  return (
    <div>
      <header>
        <a href="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="Home"
          />
        </a>
      </header>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
        <label>Brewer's Tips</label>
        <input
          type="text"
          name="tips"
          onChange={(e) => setTips(e.target.value)}
          value={tips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation"
          onChange={(e) => setAttenuation(e.target.value)}
          value={attenuation}
        />
        <label>Created By</label>
        <input
          type="text"
          name="creator"
          onChange={(e) => setCreator(e.target.value)}
          value={creator}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateBeer;
