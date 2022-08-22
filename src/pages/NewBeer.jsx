import axios from "axios";
import React from "react";

import { useState } from "react";

const beerLink = "https://ih-beers-api2.herokuapp.com/beers";

function NewBeer() {
  const [newBeer, setNewBeer] = useState("");

 /*  const body = {
    name,
    image,
    description,
    tagline,
    first_brewed,
    contributedby,
    attenuationlevel,
  }; */

  const createNewBeer = async () => {
    try {
      const response = await axios.post(beerLink);
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-center">
            <form actionFor="" onSubmit={handleSubmit}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="text-center" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="text-center" htmlFor="image">
                Image
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="text-center" htmlFor="tagline">
                Tagline
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="text-center" htmlFor="first_brewed">
                first brewed
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="text-center" htmlFor="attenuationlevel">
                Attenuation Level
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="text-center" htmlFor="contributedby">
                Contributed by{" "}
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />

              <button type="submit"> Send new beer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBeer;
