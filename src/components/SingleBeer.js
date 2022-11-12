import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import SingleBeerDisplay from "./SingleBeerDisplay";

function SingleBeer({ beers }) {
  const params = useParams();
  const [singleBeer, setSingleBeer] = useState({});

  useEffect(() => {
    async function displayBeer() {
      const beerId = params.id.substring(1);
      const foundBeer = beers.find((elem) => elem._id === beerId);
      console.log("foundBeer: ", foundBeer);
      setSingleBeer(foundBeer);
    }
    displayBeer();
  }, [params, beers]);
  if (singleBeer) {
    return (
      <>
        <Header />
        <SingleBeerDisplay singleBeer={singleBeer} />
      </>
    );
  }
  return (
    <>
      <Header />
      <p>Loading..</p>
    </>
  );
}

export default SingleBeer;
