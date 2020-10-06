import Axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import Header from './Header'



const NewBeer = (props) => {

  const history = useHistory();

  const { apiUrl } = props;

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [state, setState] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.currentTarget.name]: event.currentTarget.value })
    console.log(event.currentTarget.name, ': ', event.currentTarget.value)
  }

  const handleSubmit = async (event) => {
    setLoadingSubmit(true)

    try {
      event.preventDefault();

      await Axios.post(apiUrl + '/new', state);

      setLoadingSubmit(false);
      history.push('/beers');

    } catch (err) {
      setLoadingSubmit(false);
      console.error(err.message)
    }

  }

  return (
    <div>
      <Header />
      <form className='form' onSubmit={handleSubmit}>

        <div className="control">
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' value={state.name} onChange={handleChange} />
        </div>

        <div className="control">
          <label htmlFor='tagline'>Tagline</label>
          <input name='tagline' type='text' value={state.tagline} onChange={handleChange} />
        </div>

        <div className="control">
          <label htmlFor='description'>Description</label>
          <textarea name='description' type='text' rows='5' onChange={handleChange}>{state.tagline}</textarea>
        </div>

        <div className="control">
          <label htmlFor='first_brewed'>First Brewed</label>
          <input name='first_brewed' type='text' value={state.first_brewed} onChange={handleChange} />
        </div>

        <div className="control">
          <label htmlFor='brewers_tips'>Brewers Tips</label>
          <input name='brewers_tips' type='text' value={state.brewers_tips} onChange={handleChange} />
        </div>

        <div className="control">
          <label htmlFor='attenuation_level'>Attenuation Level</label>
          <input name='attenuation_level' type='number' value={state.attenuation_level} onChange={handleChange} />
        </div>

        <div className="control">
          <label htmlFor='contributed_by'>Contributed By</label>
          <input name='contributed_by' type='text' value={state.contributed_by} onChange={handleChange} />
        </div>
        {loadingSubmit ? (
          'LOADING ...'
        ) : (
            <button type='submit'>ADD NEW</button>
          )
        }
      </form>
    </div>
  )
}

export default NewBeer;