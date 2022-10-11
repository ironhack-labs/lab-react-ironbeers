import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const[input, setInput] = useState("")

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) =>{
    setInput(e.target.value)
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${input}`)
    .then(response => setBeers(response.data))
    .catch((err) => console.log(err));
  }
  return (
    <div>
      <label htmlFor="input">Name Search: </label>
      <input value={input} onChange={handleInput} type="text" id="input"></input>
      {beers?.map((beer) => {
        const { image_url, name, tagline, _id} = beer;
        return (
          <Link key={_id} to={`/beer/${_id}`} style={{textDecoration: "none"}}>
            <div style={{ display: "flex", margin: "15px" }}>
              <div>
                <img style={{ maxHeight: "80px", width: "30px" }} src={image_url} alt="" />
              </div>
              <div style={{marginLeft: "50px", textAlign: "left"}}>
                <h4>{name}</h4>
                <p>{tagline}</p>
              </div>
            </div>
            <hr />
          </Link>
        );
      })}
    </div>
  );
};

export default Beers;
