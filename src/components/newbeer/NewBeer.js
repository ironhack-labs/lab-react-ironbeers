import React, { useState } from 'react';
import axios from 'axios';

function NewBeer(props) {
  const [state, setState] = useState([
    {
      name: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: '',
      description: '',
      brewer_tips: '',
      contributed_by: '',
    },
  ]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    // Disparar a requisição com os dados para a API
    event.preventDefault();

    const response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      state
    );

    console.log(response);

    // O history é injetado automaticamente pelo component Route
    props.history.push('/');
  }

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h1 className="my-4">New Beer</h1>

      <div className="form-group">
        <label htmlFor="Nucp9sd8pwn">Name</label>
        <input
          type="text"
          className="form-control"
          id="Nucp9sd8pwn"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="WNEULIBI7fSvpf8vS">Tagline</label>
        <input
          type="text"
          className="form-control"
          id="WNEULIBI7fSvpf8vS"
          name="tagline"
          onChange={handleChange}
          value={state.tagline}
        />
      </div>

      <div className="form-group">
        <label htmlFor="moivPSFOnvSfvf">Description</label>
        <input
          type="textarea"
          className="form-control"
          id="moivPSFOnvSfvf"
          name="description"
          onChange={handleChange}
          value={state.weapon}
        />
      </div>

      <div className="form-group">
        <label htmlFor="SOivpfs89VND">First Brewed</label>
        <input
          type="text"
          className="form-control"
          id="SOivpfs89VND"
          name="first_brewed"
          onChange={handleChange}
          value={state.first_brewed}
        />
      </div>

      <div className="form-group">
        <label htmlFor="Dnop8SFnSdivuni">Attenuation Level</label>
        <input
          type="number"
          className="form-control"
          id="Dnop8SFnSdivuni"
          name="attenuation_level"
          onChange={handleChange}
          value={state.attenuation_level}
        />
      </div>

      <div className="form-group">
        <label htmlFor="nISUvpSfvsnv">Brewer Tips</label>
        <input
          type="text"
          className="form-control"
          id="nISUvpSfvsnv"
          name="brewer_tips"
          onChange={handleChange}
          value={state.brewer_tips}
        />
      </div>

      <div className="form-group">
        <label htmlFor="SDNv8sf8pvSf">Contributed By</label>
        <input
          type="text"
          className="form-control"
          id="SDNv8sf8pvSf"
          name="contributed_by"
          onChange={handleChange}
          value={state.contributed_by}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewBeer;
