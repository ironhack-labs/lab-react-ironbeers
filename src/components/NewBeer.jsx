import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from './Navbar';
// import Beer from './Beer';
import { postBeer } from '../services/BaseService';

const NewBeer = () => {
  const { push } = useHistory();

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
    beer: null,
    error: false,
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
    for (const field in data) {
      if (data[field] === '' || data[field] === undefined) {
        console.log(field)
        return { error: true, field: field };
      }
    }
    return {error:false, data: data};
  };

  const errorInput = (d) => {
    console.log(d);
    setState((prevState) => ({
      ...prevState,
      error: d
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = check();
    !data.error
      ? postBeer(data.data).then((beer) => {
          setState((prevState) => ({
            ...prevState,
            beer,
            error: false,
          }));
          push('/list-beers');
        })
      : errorInput(data.field);
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
  console.log(state.error);
  return (
    <div className="">
      <Navbar />
      <div className="__cont">
        {state.beer ? (
          // <Beer {...state.beer} />
          <h1>New beer successfully saved to database!</h1>
        ) : (
          <div className="__flex __jc-center __mt-3">
            <form onSubmit={onSubmit} className="__form col-5">
              <label htmlFor="name" className={state.error === 'name' ? '__c-r' : null}>Name:</label>
              <input type="text" name="name" onChange={onChange} className={state.error === 'name' ? '__bc-r' : null} value={name} />
              <br />
              <label htmlFor="tagline"
              className={state.error === 'tagline' ? '__c-r' : null}>Tagline:</label>
              <input
                type="text"
                name="tagline"
                onChange={onChange}
                value={tagline}
                className={state.error === 'tagline' ? '__bc-r' : null}
              />
              <br />
              <label htmlFor="description"
              className={state.error === 'description' ? '__c-r' : null}>Description:</label>
              <input
                type="text"
                name="description"
                onChange={onChange}
                value={description}
                className={state.error === 'description' ? '__bc-r' : null}
              />
              <br />
              <label htmlFor="first_brewed"
              className={state.error === 'first_brewed' ? '__c-r' : null}>First brewed:</label>
              <input
                type="date"
                name="first_brewed"
                onChange={onChange}
                value={first_brewed}
                className={state.error === 'first_brewed' ? '__bc-r' : null}
              />
              <br />
              <label htmlFor="brewers_tips"
              className={state.error === 'brewers_tips' ? '__c-r' : null}>Brewers tips:</label>
              <input
                type="text"
                name="brewers_tips"
                onChange={onChange}
                value={brewers_tips}
                className={state.error === 'brewers_tips' ? '__bc-r' : null}
              />
              <br />
              <label htmlFor="attenuation_level"
              className={state.error === 'attenuation_level' ? '__c-r' : null}>Attenuation level:</label>
              <input
                type="number"
                name="attenuation_level"
                onChange={onChange}
                value={attenuation_level}
                className={state.error === 'attenuation_level' ? '__bc-r' : null}
              />
              <br />
              <label htmlFor="contributed_by"
              className={state.error === 'contributed_by' ? '__c-r' : null}>Contributed by:</label>
              <input
                type="text"
                name="contributed_by"
                onChange={onChange}
                value={contributed_by}
                className={state.error === 'contributed_by' ? '__bc-r' : null}
              />
              <br />
              {
                state.error && (<i className='__mb-1 __bc-r'>The {state.error} field has to be completed!</i>)
              }
              <button type="submit" value="Submit" className="">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewBeer;
