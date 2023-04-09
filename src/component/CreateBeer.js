import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBeer() {

    const navigate = useNavigate();

    const [name, SetName] = useState(null);
    const [tagline, SetTagline] = useState(null);
    const [description, SetDescription] = useState(null);
    const [first_brewed, SetFirst_brewed] = useState(null);
    const [brewers_tips, SetBrewers_tips] = useState(null);
    const [attenuation_level, SetAttenuation_level] = useState(null);
    const [contributed_by, SetContributed_by] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        const beerToBeCreated = {
            name, tagline, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by

        };


        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", beerToBeCreated)
            .then((e) => {
                navigate('/apartments');
            })
            .catch(e => console.log(e))
    }
    const handleNameChange = (e) => {
        SetName(e.target.value);
    };

    const handleTaglineChange = (e) => {
        SetTagline(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        SetDescription(e.target.value);
    };
    const handleFirstBrewedChange = (e) => {
        SetFirst_brewed(e.target.value);
    };

    const handleBrewersTipsChange = (e) => {
        SetBrewers_tips(e.target.value);
    };
    const handleAttenuationLevelChange = (e) => {
        SetAttenuation_level(e.target.value);
    };
    const handleContributedByChange = (e) => {
        SetContributed_by(e.target.value);
    };



    return (
        <form onSubmit={handleSubmit}>
            <div>starch</div>
            <label htmlFor="">Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>

            <label htmlFor="">tagline:
                <input type="text" value={tagline} onChange={handleTaglineChange} />
            </label>

            <label htmlFor="">description:
                <input type="text" value={description} onChange={handleDescriptionChange} />
            </label>

            <label htmlFor="">first_brewed:
                <input type="text" value={first_brewed} onChange={handleFirstBrewedChange} />
            </label>

            <label htmlFor="">brewers_tips:
                <input type="text" value={brewers_tips} onChange={handleBrewersTipsChange} />
            </label>

            <label htmlFor="">attenuation_level:
                <input type="number" value={attenuation_level} onChange={handleAttenuationLevelChange} />
            </label>

            <label htmlFor="">contributed_by:
                <input type="text" value={contributed_by} onChange={handleContributedByChange} />
            </label>

            <button type="submit">submit</button>
        </form>
    )


}
export default CreateBeer;