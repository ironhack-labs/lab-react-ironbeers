import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";

function SingleBeer(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${props.match.params.id}`)
      .then(({ data }) => {
        setBeer(prevState => {
          return {
            ...prevState,
            ...data
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.match.params.id]);
  console.log(beer);
  return (
    <div className="random">
      <Card>
        <h2>{beer.name}</h2>
        <img src={beer.image_url} />
        <p>{beer.description}</p>
      </Card>
    </div>
  );
}

export default SingleBeer;
