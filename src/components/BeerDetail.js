import React from "react";
import { useParams } from "react-router-dom";

const BeerDetail = ({ beers }) => {
  const params = useParams();
  const beerId = params.id;
  const beer = beers.find((beer) => beer._id === beerId);
  console.log(beers);
  return (
    <div>
      {/* <RandomBeer beers={beer} /> */}
      <main className="text-center d-flex flex-column alto justify-content-center mt-5 ">
        <div className="col-12 col-sm-8 mt-2 mx-auto " key={beer._id}>
          <div className="row">
            {/* <div className='border border-0 rounded rounded-3'> */}
            <div className="col-12 col-lg-6 mx-auto mb-3 mx-0 px-0">
              <img
                src={`${beer.image_url}`}
                alt={`Poster for ${beer.name}`}
                className="col-2"
              />
            </div>
            <div className="col-12 col-lg-8 mt-2 mx-auto ">
              <div className="row">
                <div className="col-8">
                  <h2 className="fs-1 fw-light text-start mx-3">{beer.name}</h2>
                </div>
                <div className="col-4">
                  <p className="fs-3 text-black-50 text-end mx-3">
                    {beer.attenuation_level}
                  </p>
                </div>
                <div className="col-8">
                  <p className="text-black-50 text-start mx-3">
                    {beer.tagline}
                  </p>
                </div>
                <div className="col-4 text-end">
                  <p className="fw-bold mx-3">{beer.first_brewed}</p>
                </div>
              </div>

              <p className="text-start w-bolder mx-3">{beer.description}</p>
              <p className="text-black-50 text-start mx-3">
                {beer.contributed_by}
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BeerDetail;
