import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const navigate = useNavigate();
    const [newBeer, setnewBeer] = useState({
        name: String,
        tagline: String,
        description: String,
        first_brewed: String,
        brewers_tips: String,
        attenuation_level: Number,
        contributed_by: String,
    });

    const handleCreateBeer = () => {
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then((response) => {
                console.log(response.data);
                navigate("/beers");
            })
            .catch((error) => {
                console.error('Error creating new beer', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setnewBeer({
            ...newBeer,
            [name]: value,
        });
    };
    return (
        <div>
            <h1>Create Beer</h1>
            <form onSubmit={handleCreateBeer}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newBeer.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tagline">Tagline</label>
                    <input
                        type="text"
                        id="tagline"
                        name="tagline"
                        value={newBeer.tagline}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={newBeer.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input
                        type="text"
                        id="first_brewed"
                        name="first_brewed"
                        value={newBeer.first_brewed}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="brewers_tips">Brewer's Tips</label>
                    <input
                        type="text"
                        id="brewers_tips"
                        name="brewers_tips"
                        value={newBeer.brewers_tips}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input
                        type="number"
                        id="attenuation_level"
                        name="attenuation_level"
                        value={newBeer.attenuation_level}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contributed_by">Contributed By</label>
                    <input
                        type="text"
                        id="contributed_by"
                        name="contributed_by"
                        value={newBeer.contributed_by}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="button" onClick={handleCreateBeer}>Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;
