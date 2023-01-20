import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListBeers = ({ devAPI }) => {
  const [beersArr, setBeersArr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListofBeers();
  }, []);

  const getListofBeers = () => {
    axios
      .get(devAPI + "/beers")
      .then((response) => {
        console.log(response.data);

        setBeersArr(response.data); // I want to access and display the API's response
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <div>
      <nav className="App-header">
        <Link className="App-link" to="/">
          Home
        </Link>
      </nav>
      {beersArr === null
        ? "loading beers ..."
        : beersArr.map((individualBeerofArr) => {
            return (
              <div key={individualBeerofArr._id}>
                <img src={individualBeerofArr.image_url} alt="a beer" />
                <h2>Title: {individualBeerofArr.name}</h2>
                <p>Tagline: {individualBeerofArr.tagline}</p>
                <p>First Brewed: {individualBeerofArr.first_brewed}</p>
                <p>
                  Attenuation Level: {individualBeerofArr.attenuation_level}
                </p>
                <p>Description: {individualBeerofArr.description}</p>
                <p>Contributed by: {individualBeerofArr.contributed_by}</p>
                <Link to={"/beers/" + individualBeerofArr._id}>
                  More Details
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default ListBeers;
