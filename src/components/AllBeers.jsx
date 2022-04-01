import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import InputFormComponent from "./InputFormComponent";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState({ searchQuery: "" });

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      setBeers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData("https://ih-beers-api2.herokuapp.com/beers");
  }, []);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    getData(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
  }, [query]);

  return (
    <div>
      <Navbar />
      <InputFormComponent
        name="searchQuery"
        displayText="Search"
        state={query}
        handleChange={handleChange}
      />

      {beers.map((element, index) => {
        const { name, image_url, tagline, contributed_by } = element;
        const divStyle = {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          borderBottom: "solid 1px grey",
        };

        const imgStyle = {
          height: "150px",
          marginLeft: "auto",
          marginRight: "auto",
        };
        return (
          <div style={divStyle} key={index}>
            <div style={{ flex: "1", display: "flex" }}>
              <img src={image_url} alt="name" style={imgStyle} />
            </div>
            <div style={{ flex: "2" }}>
              <h1>{name}</h1>
              <h2>{tagline}</h2>
              <span>
                <strong>Created by:</strong> {contributed_by}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;
