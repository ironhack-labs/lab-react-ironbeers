import React, { Component, useState, useEffect } from 'react';
import Header from './Header';


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
      event.preventDefault();
  
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        state
      );
  
      props.history.push('/');
    }
  
    return (
      <form className="container new-beer" onSubmit={handleSubmit}>
        <Header></Header>
        <h1 className="new-beer">NEW BEER</h1>
  
        <div className="form-group">
          <label htmlFor="a">NAME</label>
          <input
            type="text"
            className="form-control"
            id="a"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="b">TAGLINE</label>
          <input
            type="text"
            className="form-control"
            id="b"
            name="tagline"
            onChange={handleChange}
            value={state.tagline}
          />
        </div>
  
        <div className="form">
          <label htmlFor="c">DESCRIPTION</label>
          <input
            type="textarea"
            className="form-control"
            id="c"
            name="description"
            onChange={handleChange}
            value={state.description}
          />
        </div>
  
        <div className="form">
          <label htmlFor="d">FIRST BREWED</label>
          <input
            type="text"
            className="form-control"
            id="d"
            name="first_brewed"
            onChange={handleChange}
            value={state.first_brewed}
          />
        </div>
  
        <div className="form">
          <label htmlFor="e">ATTENUATION LEVEL</label>
          <input
            type="number"
            className="form-control"
            id="e"
            name="attenuation_level"
            onChange={handleChange}
            value={state.attenuation_level}
          />
        </div>
  
        <div className="form">
          <label htmlFor="f">BREWER TIPS</label>
          <input
            type="text"
            className="form-control"
            id="f"
            name="brewer_tips"
            onChange={handleChange}
            value={state.brewer_tips}
          />
        </div>
  
        <div className="form">
          <label htmlFor="g">CONTRIBUTED BY</label>
          <input
            type="text"
            className="form-control"
            id="g"
            name="contributed_by"
            onChange={handleChange}
            value={state.contributed_by}
          />
        </div>
  
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    );
  }
  
  export default NewBeer;