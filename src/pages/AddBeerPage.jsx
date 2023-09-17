import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/CSS/addBeer.css";

function AddBeerPage() {
    const navigate = useNavigate();

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then((response) => {
                navigate("/beers");
            })
            .catch((error) => {
                console.error("Error creating new beer", error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewBeer({ ...newBeer, [name]: value });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create Beer</h1>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newBeer.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="tagline">Tagline:</label>
                    <input
                        type="text"
                        id="tagline"
                        name="tagline"
                        value={newBeer.tagline}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={newBeer.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="first_brewed">First Brewed:</label>
                    <input
                        type="text"
                        id="first_brewed"
                        name="first_brewed"
                        value={newBeer.first_brewed}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="brewers_tips">Brewer's Tips:</label>
                    <input
                        type="text"
                        id="brewers_tips"
                        name="brewers_tips"
                        value={newBeer.brewers_tips}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="attenuation_level">Attenuation Level:</label>
                    <input
                        type="number"
                        id="attenuation_level"
                        name="attenuation_level"
                        value={newBeer.attenuation_level}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="contributed_by">Contributed by:</label>
                    <input
                        type="text"
                        id="contributed_by"
                        name="contributed_by"
                        value={newBeer.contributed_by}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Add Beer</button>
            </form>
        </>
    );
}

export default AddBeerPage;
