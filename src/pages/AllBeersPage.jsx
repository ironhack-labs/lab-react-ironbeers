import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card} from "react-bootstrap"

function AllBeersPage() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setData(response.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="card" style="width: 18rem;">
    <div className="beerList">
      <div className="beerContainer" Card>
      </div>
      {data && data.length > 0 ? (
        data.map((beer, index) => (
          <div key={index} className="beerContainer">
            <img src={beer.image_url} alt="" />
            <div className="beerTextContainer">
              <h2>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </h2>
              <p>{beer.tagline}</p>
              <span>
                <b>Create by:</b>
                {`${beer.contributed_by}`}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No data available....</p>
      )}
    </div>
    </div>
  );
}
export default  AllBeersPage
