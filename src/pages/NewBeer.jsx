import {useState} from 'react'

import newBeerImg from '../assets/new-beer.png'
import BasicFormGenerator from '../components/BasicFormGenerator';

const NewBeer = () => {
	const initialState = {
		name: '',
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: 0,
		contributed_by: '',
	};
  const [beer, setBeer] = useState(initialState)

  const formData = {
    API_URL: 'https://ih-beers-api2.herokuapp.com/beers/new',
    redirctURL: '/beers',
    initialState: initialState,
    imgSrc:newBeerImg,
    state: beer,
    setState: setBeer,
    title: 'Add New Beer',
    buttonText: 'Create New Beer'
  }

 // To use it we need a initial state and a State Hook initializated and imported
	return <BasicFormGenerator formData={formData}/>
};

export default NewBeer;
