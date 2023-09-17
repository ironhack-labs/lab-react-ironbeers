import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await axios.post(
            "https://ih-beers-api2.herokuapp.com/beers/new",
            beer
        );
        navigate("/beers");
    };

    const [beer, setBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={(e) => {
                        beer.name = e.target.value;
                    }}
                />
                <br />
                <input
                    type="text"
                    name="tagline"
                    placeholder="tagline"
                    onChange={(e) => {
                        beer.tagline = e.target.value;
                    }}
                />
                <br />
                <textarea
                    name="description"
                    type="text"
                    placeholder="description"
                    onChange={(e) => {
                        beer.description = e.target.value;
                    }}
                ></textarea>
                <br />
                <input
                    type="text"
                    name="first_brewed"
                    placeholder="first_brewed"
                    onChange={(e) => {
                        beer.first_brewed = e.target.value;
                    }}
                />
                <br />
                <input
                    type="text"
                    name="brewers_tips"
                    placeholder="brewers_tips"
                    onChange={(e) => {
                        beer.brewers_tips = e.target.value;
                    }}
                />
                <br />
                <input
                    type="number"
                    name="attenuation_level"
                    placeholder="attenuation_level"
                    onChange={(e) => {
                        beer.attenuation_level = e.target.value;
                    }}
                />
                <br />
                <input
                    type="text"
                    name="contributed_by"
                    placeholder="contributed_by"
                    onChange={(e) => {
                        beer.contributed_by = e.target.value;
                    }}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </>
    );
}

export default AddBeerPage;
