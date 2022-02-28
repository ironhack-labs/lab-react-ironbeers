import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [ibu, setIbu] = useState(0);
  const [contributed, setContributed] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      ibu: ibu,
      contributed: contributed,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setTagline("");
        setName(""); 
        setFirstBrewed("");
        setDescription("");
        setBrewersTips("");
        setContributed("");
        setIbu(0);
        navigate("/beers");
      });
  };

  return (
    <div>
      <header>
        <Link to="/">
          <i>home</i>
        </Link>
      </header>
          <h3>Add New Beer</h3>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <div>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <label>Tagline</label>
            <div>
              <input
                type="text"
                name="tagline"
                onChange={(e) => setTagline(e.target.value)}
                value={tagline}/>
            </div>

            <label>Description</label>
            <div>
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}/>
            </div>

            <label>First Brewed</label>
            <div>
              <input
                type="date"
                name="firstBrewed"
                onChange={(e) => setFirstBrewed(e.target.value)}
                value={firstBrewed}/>
            </div>

            <label>Brewers Tips</label>
            <div>
              <input
                type="text"
                name="brewersTips"
                onChange={(e) => setBrewersTips(e.target.value)}
                value={brewersTips}/>
            </div>

            <label>Attenuation Level</label>
            <div>
              <input
                type="number"
                name="ibu"
                onChange={(e) => setIbu(e.target.value)}
                value={ibu}/>
            </div>

            <label>Contributed By:</label>
            <div>
              <input
                type="text"
                name="contributed"
                onChange={(e) => setContributed(e.target.value)}
                value={contributed}/>
            </div>
            <button type="submit">Create Beer</button>
          </form>
        </div>
  );
}

export default NewBeer;
