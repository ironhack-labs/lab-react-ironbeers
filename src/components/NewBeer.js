import React, { useState } from 'react';
import Header from './Header';

function NewBeer() {

    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    });

    function handleChange(event) {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        setBeer({ ...beer, [inputName]: inputValue });
    }
 
     const submitBeer = async (event) => {
        event.preventDefault();
        const response = await fetch('https://api.punkapi.com/v2/beers/new', {method: 'POST', body: JSON.stringify(beer)});

        console.log("submitBeer -> response", response.json());
    }

    return (
        <div className="NewBeer">
            <Header />
            <div>
                <h1>Add a new beer</h1>
            </div>
            <div>
                <form onSubmit={submitBeer}>
                    <div>
                        <strong>Name</strong>
                        <input
                            type="text"
                            name="name"
                            value={beer.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Tagline</strong>
                        <input
                            type="text"
                            name="tagline"
                            value={beer.tagline}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Description</strong>
                        <input
                            type="text"
                            name="description"
                            value={beer.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>First Brewed</strong>
                        <input
                            type="text"
                            name="first_brewed"
                            value={beer.first_brewed}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Brewers Tips</strong>
                        <input
                            type="text"
                            name="brewers_tips"
                            value={beer.brewers_tips}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Attenuation Level</strong>
                        <input
                            type="number"
                            name="attenuation_level"
                            value={beer.attenuation_level}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <strong>Contributed By</strong>
                        <input
                            type="text"
                            name="contributed_by"
                            value={beer.contributed_by}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">ADD NEW BEER</button>
                </form>
            </div>
        </div>
    );
}


export default NewBeer;