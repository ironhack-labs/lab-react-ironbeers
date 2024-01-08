import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setData(response.data);
      console.log("data:", data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("data:", data);
  }, []);

  return (
    <div className="allBeers">
      {data && data.length > 0 ? (
        data.map((beer, index) => (
          <div key={index} className="beerData">
            <img src={beer.image_url} alt="" className="beerImg" />

            <div className="beerData">
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
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AllBeersPage;
