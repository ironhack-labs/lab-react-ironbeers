import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

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
        <div className="singleBeerPage">
          <img src={singleBeer.image_url} alt={singleBeer.name} />
          <div className="singleBeerPageText">
            <h2>{singleBeer.name} <span>{singleBeer.attenuation_level}</span></h2>
            <h4 style={{ color: "grey" }}>
              {singleBeer.tagline}
              <span>{singleBeer.first_brewed}</span>
            </h4>
            <p>{singleBeer.description}</p>
            <p style={{fontWeight: "lighter"}}>{singleBeer.contributed_by}</p>
          </div>
        </div>
      </>
    );
  }
  return <>Loading..</>
  
}

export default SingleBeer;
