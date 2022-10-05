import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function AddBeer() {
  const [newBeerData, setNewBeerData] = useState({
    name: "",
    description: "",
    tagline: "",
    brewers_tips: "",
    attenuation_level: 100,
    first_brewed: "",
    contributed_by: "",
  });

  console.log("newBeer:", newBeerData);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerData)
      .then((response) => {
        setNewBeerData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setNewBeerData({ ...newBeerData, [name]: value });
  }

  return (
    <div>
      <div>
        <Link to={"/"}>
          <Header />
        </Link>
      </div>

      <div className="form">
        <form
          onSubmit={handleSubmit}
          // action="https://ih-beers-api2.herokuapp.com/beers/new"
          method="post"
          style={{ padding: "30px" }}
        >
          <div>
            <label>Name</label>
            <input
              className="input"
              type="text"
              name="name"
              value={newBeerData.name}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label>Tagline</label>
            <input
              className="input"
              type="text"
              name="tagline"
              value={newBeerData.tagline}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label>Description</label>
            <input
              className="textarea"
              type="text"
              name="description"
              value={newBeerData.description}
              onChange={handleChange}
            />
          </div>

          <br />
          <div>
            <label>First Brewed </label>
            <input
              className="input"
              type="text"
              name="first_brewed"
              value={newBeerData.first_brewed}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label>Brewers Tips </label>
            <input
              className="input"
              type="text"
              name="brewers_tips"
              value={newBeerData.brewers_tips}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label>Attenuation Level </label>
            <input
              className="input"
              type="number"
              name="attenuation_level"
              value={newBeerData.attenuation_level}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label>Contributed By </label>
            <input
              className="input"
              type="text"
              name="contributed_by"
              value={newBeerData.contributed_by}
              onChange={handleChange}
            />
          </div>

          <br />
          <button type="submit"> ADD NEW</button>
        </form>
      </div>
    </div>
  );
}

export default AddBeer;
