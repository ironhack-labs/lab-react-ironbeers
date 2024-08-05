import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((randomBeer) => {
        setRandomBeer(randomBeer.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("ERROR OCCURED WHILE FETCHING RANDOM BEER");
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", color: "#80461b" }}>
        Random Beer Page
      </div>

      {loading && (
        <img
          style={{
            marginLeft: "auto",
            display: "block",
            marginRight: "auto",
          }}
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}
      {!loading && (
        <div className="random-beer-container">
          <ul>
            <li
              key={randomBeer._id}
              className="each-beer-detail-item"
              style={{ listStyleType: "none" }}
            >
              <img src={randomBeer.image_url} alt="Beer" />

              <div className="middle">
                <p>
                  <span>Name: </span> <span>{randomBeer.name}</span>
                </p>
                <p>
                  <span>TagLine:</span> <span>{randomBeer.tagline}</span>
                </p>
                <p>
                  <span>First brewed:</span>{" "}
                  <span>{randomBeer.first_brewed}</span>
                </p>
                <p>
                  <span>Attenuation level: </span>
                  <span>{randomBeer.attenuation_level}</span>
                </p>
                <p>
                  <span>Description: </span>
                  <span>{randomBeer.description}</span>
                </p>
                <p>
                  <span>Contributed By:</span>
                  <span>{randomBeer.contributed_by} </span>
                </p>
              </div>
            </li>

            <div
              style={{ border: "1px solid teal", margin: "5px 0px 0px 0px" }}
            ></div>
          </ul>
        </div>
      )}
    </>
  );
}

export default RandomBeerPage;
