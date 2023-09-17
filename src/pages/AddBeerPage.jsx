import React, { useState } from "react";
import axios from "axios";

function AddBeerPage() {
    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBeerData({ ...beerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerData);
            alert("Beer added successfully!");
        } catch (error) {
            console.error("Error adding beer: ", error);
            alert("Error adding beer. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Add a New Beer</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={beerData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tagline">Tagline</label>
                    <input
                        type="text"
                        id="tagline"
                        name="tagline"
                        value={beerData.tagline}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={beerData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input
                        type="text"
                        id="first_brewed"
                        name="first_brewed"
                        value={beerData.first_brewed}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="brewers_tips">Brewer's Tips</label>
                    <input
                        type="text"
                        id="brewers_tips"
                        name="brewers_tips"
                        value={beerData.brewers_tips}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input
                        type="number"
                        id="attenuation_level"
                        name="attenuation_level"
                        value={beerData.attenuation_level}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contributed_by">Contributed By</label>
                    <input
                        type="text"
                        id="contributed_by"
                        name="contributed_by"
                        value={beerData.contributed_by}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;
