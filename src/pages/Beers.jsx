import React from "react";
import {Link} from 'react-router-dom'

function Beers(props) {
  const { beers } = props;

  return (
    <div>
      {beers.map((elem) => {
        return (
          <div key={elem._id} className="flex flex-col w-full">
            <div className="hero min-h-screen bg-base-200 ">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <figure className="flex justify-center">
                    <img className="w-20" src={elem.image_url} alt="beer" />
                  </figure>
                  <h1 className="text-5xl font-bold">{elem.name}</h1>
                  <h1 className="text-5xl font-bold">{elem.title}</h1>
                  <p className="py-6">{elem.description}</p>
                  <p className="py-6">
                    Beer ABV: {elem.abv} - Beer IBU: {elem.ibu}
                  </p>
                  <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
