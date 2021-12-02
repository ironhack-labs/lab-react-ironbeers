import React, { useState } from 'react';
import BeersApi from '../../services/beers.service';

export default function CreateBeers() {
  const [userRequest, setValue] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  let service = new BeersApi();

  let handechange = (e) => {
    let { value, name } = e.currentTarget;
    // setValue((name = value));
    setValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    service
      .createNewBeer(userRequest)
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={userRequest.name} onChange={handechange} />
      <input
        name="tagline"
        value={userRequest.tagline}
        onChange={handechange}
      />
      <input
        name="description"
        value={userRequest.description}
        onChange={handechange}
      />
      <input
        name="first_brewed"
        value={userRequest.first_brewed}
        onChange={handechange}
      />
      <input
        name="brewers_tips"
        value={userRequest.brewers_tips}
        onChange={handechange}
      />
      <input
        type="number"
        name="attenuation_level"
        value={userRequest.attenuation_level}
        onChange={handechange}
      />
      <input
        name="contributed_by"
        value={userRequest.contributed_by}
        onChange={handechange}
      />
      <button>Summit</button>
    </form>
  );
}
