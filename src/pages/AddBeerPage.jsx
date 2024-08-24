import React, { useState } from 'react';

function AddBeerPage() {
    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBeerData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make POST request to the API endpoint with beerData
        // Example: fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(beerData)
        // })
        //   .then((response) => {
        //     if (response.ok) {
        //       // Beer added successfully
        //       console.log('Beer added!');
        //     } else {
        //       // Error adding beer
        //       console.log('Error adding beer');
        //     }
        //   })
        //   .catch((error) => {
        //     console.log('Error:', error);
        //   });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={beerData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="tagline">Tagline:</label>
                <input
                    type="text"
                    id="tagline"
                    name="tagline"
                    value={beerData.tagline}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={beerData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="first_brewed">First Brewed:</label>
                <input
                    type="text"
                    id="first_brewed"
                    name="first_brewed"
                    value={beerData.first_brewed}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="brewers_tips">Brewer's Tips:</label>
                <input
                    type="text"
                    id="brewers_tips"
                    name="brewers_tips"
                    value={beerData.brewers_tips}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="attenuation_level">Attenuation Level:</label>
                <input
                    type="number"
                    id="attenuation_level"
                    name="attenuation_level"
                    value={beerData.attenuation_level}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="contributed_by">Contributed By:</label>
                <input
                    type="text"
                    id="contributed_by"
                    name="contributed_by"
                    value={beerData.contributed_by}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Beer</button>
        </form>
    );
}

export default AddBeerPage;
