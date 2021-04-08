import React, { useState } from 'react';
import Navbar from './Navbar';
import Beer from './Beer';

const NewBeer = () => {
  // componentDidMount() {
  //   getRamdon().then((beer) => this.setState({ beer, loading: false }));
  // }
  const [state, setState] = useState({
    values: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    },
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(value);

    setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  const check = () => {
    const data = { ...state.values };
    for (const i in data) {
      if (data[i] === '' || data[i] === undefined) {
        return null;
      }
    }
    return data;
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    const data = check();
    console.log(data);
  };

  const {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  } = state.values;

  return (
    <div className="">
      <Navbar />
      <div className="__cont">
        <div className="__flex __jc-center __mt-3">
          <form onSubmit={onSubmit} className="__form col-5">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={onChange} value={name} />
            <br />
            <label htmlFor="tagline">Tagline:</label>
            <input
              type="text"
              name="tagline"
              onChange={onChange}
              value={tagline}
            />
            <br />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              onChange={onChange}
              value={description}
            />
            <br />
            <label htmlFor="first_brewed">First brewed:</label>
            <input
              type="text"
              name="first_brewed"
              onChange={onChange}
              value={first_brewed}
            />
            <br />
            <label htmlFor="brewers_tips">Brewers tips:</label>
            <input
              type="text"
              name="brewers_tips"
              onChange={onChange}
              value={brewers_tips}
            />
            <br />
            <label htmlFor="attenuation_level">Attenuation level:</label>
            <input
              type="text"
              name="attenuation_level"
              onChange={onChange}
              value={attenuation_level}
            />
            <br />
            <label htmlFor="contributed_by">Contributed by:</label>
            <input
              type="text"
              name="contributed_by"
              onChange={onChange}
              value={contributed_by}
            />
            <br />
            <button type="submit" value="Submit" className="">
              Submit
            </button>
          </form>
        </div>
        <Beer />
      </div>
    </div>
  );
};

export default NewBeer;
