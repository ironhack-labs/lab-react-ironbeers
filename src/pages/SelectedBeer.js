import Beer from "../components/Beer";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function SelectedBeer() {
  const [selectedBeer, setSelectedBeer] = React.useState([]);

  const { beerId } = useParams();
  React.useEffect(() => {
    axios
      .get(`${apiURL}/${beerId}`)
      .then((response) => setSelectedBeer(response.data))
      .catch((error) => console.log(error));
  }, [beerId]);

  return (
    <div>
      <h1>Selected Beer</h1>
      <Beer
        beer={selectedBeer}
        showDetails={true}
      />
    </div>
  );
}

export default SelectedBeer;
