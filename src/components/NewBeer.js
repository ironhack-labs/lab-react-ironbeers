import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import BeerForm from './BeerForm';

function NewBeer() {

const history = useHistory();

const [state, setState] = useState([])
    
const handleChange = (event) =>{
    setState({...state,
    [event.currentTarget.name]: event.currentTarget.value});
}

const handleSubmit = async (event) => {
    setState({...state});

    try {
    
    event.preventDefault();

    const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', state);
    
    setState({...state});

    history.push('/beers');

    } catch(err) {
    console.error(err)
    }
}

return(
    <div>
        <h1>New Beer</h1>
      <BeerForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
)
}

export default NewBeer;