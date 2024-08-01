import React, { useState } from 'react';
import axios from 'axios';

const AddBeerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
            .then(response => {
                if (response.status === 200) {
                    alert('Beer added successfully!');
                }
            })
            .catch(error => {
                console.error('Error adding the beer:', error);
            });
    };

    return (
        <div>
            <h1>Add a New Beer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tagline</label>
                    <input
                        type="text"
                        name="tagline"
                        value={formData.tagline}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>First Brewed</label>
                    <input
                        type="text"
                        name="first_brewed"
                        value={formData.first_brewed}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Brewer's Tips</label>
                    <input
                        type="text"
                        name="brewers_tips"
                        value={formData.brewers_tips}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Attenuation Level</label>
                    <input
                        type="number"
                        name="attenuation_level"
                        value={formData.attenuation_level}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Contributed By</label>
                    <input
                        type="text"
                        name="contributed_by"
                        value={formData.contributed_by}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
};

export default AddBeerPage;
