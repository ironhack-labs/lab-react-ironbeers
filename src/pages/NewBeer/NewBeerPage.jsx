import './NewBeerPage.css'
import axios from 'axios'
import { useState } from 'react'

function NewBeerPage(){
    const [error, setError] = useState(null);
  const [beer, setBeer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: parseInt(e.target.attenuation_level.value),
      contributed_by: e.target.contributed_by.value,
    };

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
        const newBeer = response.data;
        setBeer(newBeer);
        setError(null);

        e.target.reset();
        window.alert('Beer added successfully!');
      })
      .catch((error) => {
        console.log(error);
        setError('Error adding beer. Please try again.');
      });
  };

    return(
    <div className='new-beer'>
        <form onSubmit={handleSubmit}>
			<div className="form">
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>Beer name: </label>
                    <input type="text" name="name" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="tagline" className='form-label'>Tagline: </label>
                    <input type="text" name="tagline" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className='form-label'>Description: </label>
                    <textarea type="text" name='description' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="first_brewed" className='form-label'>First Brewed: </label>
                    <input type="text" name="first_brewed" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="brewers_tips" className='form-label'>Brewer tips: </label>
                    <input type="text" name="brewers_tips" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="attenuation_level" className='form-label'>Attenuation level: </label>
                    <input type="number" name="attenuation_level" className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="contributed_by" className='form-label'>Contributed by: </label>
                    <input type="text" name="contributed_by" className='form-control' />
                </div>
			</div>
			<div className="button">
				<button type='submit' className='btn btn-dark'>Add Beer</button>
			</div>
		</form>
    </div>
    )
}

export default NewBeerPage

