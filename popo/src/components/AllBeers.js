import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(prevState => {
          return [...prevState, ...data];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="all">
      <h1>IronBeers</h1>
      {beers.map(beer => {
        return (
          <Card>
            <div className="allBeers" key={beer._id}>
              <h2>{beer.name}</h2>
              <img src={beer.image_url} alt={beer.name} />
              <br />
              <Link to={`/all/${beer._id}`}>
                <Button>More</Button>
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default AllBeers;
