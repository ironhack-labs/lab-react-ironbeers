// a page to display the details of the beet the user clicked on
import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleBeer(props) {
  const { beerId } = useParams(props);
  const beerArr = props.beersList;

  const singleBeerDetails = beerArr.find((beer) => {
    return beer._id === beerId;
  });

  console.log(singleBeerDetails);
  const beer = singleBeerDetails;
  console.log("The beer details are .....", beer);

  const renderBeerDetails = () => {
    return (
      <div className="card mb-3" style={{ maxwidth: "540px" }} key={beer._id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={beer.image_url}
              className="img-fluid rounded-start"
              alt={beer.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-titles">
                <h5 className="card-title-right text-muted">
                  {beer.attenuation_level}
                </h5>
                <h6 className="card-title-right text-muted">
                  {beer.first_brewed}
                </h6>
              </div>
              <h5 className="card-title">
                {beer.name}
                {beer.attenuation_level}
              </h5>
              <p className="card-text">{beer.tagline}</p>

              <p className="card-text">{beer.description}</p>
              <small className="text-muted">
                Contributed By{beer.contributed_by}
              </small>
              <br />
              <Link to={`/beers`}>Back to Beers</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div>{beer ? renderBeerDetails() : <p> Loading.....</p>}</div>
    </>
  );
}

export default SingleBeer;
