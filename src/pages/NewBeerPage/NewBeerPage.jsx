import './NewBeerPage.css';
import { HeaderBeers } from "../../components";
import { useState } from 'react';
import { createNewBeer } from '../../services/beers.services';

const NewBeerPage = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState('');
    const [contributed_by, setContributed_by] = useState('');

    const handleSubmit = async (e) => {          // <== HANDLER FUNCTION
        try {
            // Prevent page reload on submit
            e.preventDefault();
            // Create the body for the POST request
            const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };

            const response = await createNewBeer(body);
            console.log('Que es response', response)
        } catch (error) {
            console.log('Error en el form')
        }
      };

    return(
        <div>
            <HeaderBeers />
            <form onSubmit={handleSubmit}>
                <div className='containerInputs'>
                    <div className="containerForm">
                        <div>
                            <label htmlFor="">Name</label>
                            <input name='name' type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Tagline</label>
                            <input name='tagline' type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <textarea name="description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label htmlFor="">First Brewed</label>
                            <input name='first_brewed' type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Brewers Tips</label>
                            <input name='brewers_tips' type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Atenuation Level</label>
                            <input name='attenuation_level' type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Contributed By</label>
                            <input name='contributed_by' type="text" />
                        </div>
                        <div>
                            <button type='submit'>ADD NEW</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default NewBeerPage;