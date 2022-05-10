import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/new"

function NewBeerPage() {

  const navigate = useNavigate()

  const [ formState, setFormState ] = useState({
    name:'',
    tagline:'',
    description:'',
    first_brewed:'',
    brewers_tips:'',
    attenuation_level:0,
    contributed_by:'',
  })

  const handleSetFormState = event => setFormState({
    ...formState,
    [event.target.name]: event.target.value
  })
  
  const handleFormSubmit = event => {
    event.preventDefault();

    const body = 
    {
      name: formState.name,
      tagline: formState.tagline,
      description: formState.description,
      first_brewed: formState.first_brewed,
      brewers_tips: formState.brewers_tips,
      attenuation_level: formState.attenuation_level,
      contributed_by: formState.contributed_by
    }

    axios.post(API_URL, body)
      .then(res => {
        console.log(res);
        setFormState({
          name:'',
          tagline:'',
          description:'',
          first_brewed:'',
          brewers_tips:'',
          attenuation_level:'',
          contributed_by:'',
        });
        navigate('/');
      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      <Header />
      <div className="createnewbeer">
        <form onSubmit={handleFormSubmit}>
          <div className="createbeerlabel">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={formState.name} onChange={handleSetFormState}/>
          </div>

          <div className="createbeerlabel">
            <label htmlFor="tagline">Tagline</label>
            <input id="tagline" type="text" name="tagline" value={formState.tagline} onChange={handleSetFormState}/>
          </div>

          <div className="createbeerlabel">
            <label htmlFor="description">Description</label>
            <input id="description" type="text" name="description" value={formState.description} onChange={handleSetFormState}/>
          </div>

          <div className="createbeerlabel">
            <label htmlFor="first_brewed">First Brewed</label>
            <input id="first_brewed" type="text" name="first_brewed" value={formState.first_brewed} onChange={handleSetFormState}/>
          </div>

          <div className="createbeerlabel">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input id="brewers_tips" type="text" name="brewers_tips" value={formState.brewers_tips} onChange={handleSetFormState}/>
          </div>

          <div className="createbeerlabel">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input id="attenuation_level" type="text" name="attenuation_level" value={formState.attenuation_level} onChange={handleSetFormState}/>
          </div>

          <div className="createbeerlabel">
            <label htmlFor="contributed_by">Contributed By</label>
            <input id="contributed_by" type="text" name="contributed_by" value={formState.contributed_by} onChange={handleSetFormState}/>
          </div>

          <button>ADD NEW</button>

        </form>
      </div>
    </div>
  )
}

export default NewBeerPage;