import React, { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Beers() {
  const [beerdata, setBeerData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        console.log(result.data);
        setBeerData(result.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);

  return (
    <div>
      <div>
        <Link to={"/"}>
          <Header />
        </Link>
      </div>
      <div>
        {beerdata.map((element) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                padding: "30px",
              }}
              onClick={() => {
                navigate(`/beers/${element._id}`);
              }}
              key={element._id}
            >
              <div>
                <img
                  src={element.image_url}
                  alt="beerimage"
                  style={{
                    height: "150px",
                    marginBottom: "50px",
                    float: "inline-start",
                  }}
                />
              </div>

              <div style={{ textAlign: "start", flexDirection: "column" }}>
                <h1>{element.name}</h1>
                <p>{element.tagline}</p>
                <p>{element.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Beers;
