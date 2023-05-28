import axios from "axios";
import { useEffect, useState } from "react";
import Beer from "../components/Beer";
import Header from "../components/Header";

function ListOfBeers() {
  const [everyBeer, setEveryBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setEveryBeer(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (everyBeer === null) {
    return (
      <>
        <Header />
        "...loading"
      </>
    );
  }

  return (
    <div>
      <Header />

      {everyBeer.map((eachBeer) => {
        return <Beer key={eachBeer._id} data={eachBeer} />;
      })}
    </div>
  );
}

export default ListOfBeers;
