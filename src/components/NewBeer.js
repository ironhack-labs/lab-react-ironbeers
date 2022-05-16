import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./NewBeer.css"


function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstbrewed] = useState("");
    const [brewers_tips, setBrewerstips] = useState("");
    const [attenuation_level, setAttenuationlevel] = useState("");
    const [contributed_by, setContributedby] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = {
            name, /* - must be type text */
            tagline, /* - must be type text */
            description, /* - must be type text */
            first_brewed, /* - must be type text */
            brewers_tips, /* - must be type text */
            attenuation_level, /* - must be type number !!! */
            contributed_by /* must be type text */
        }

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", details)
            .then( response => {
                console.log(response.data)

                navigate("/beers"); // redirect to beer list
                // navigate(`/beers/${response.data._id}`); // redirect to beer page

                // clear form...
                setName("");
                setTagline("");
                setDescription("");
                setFirstbrewed("");
                setBrewerstips("");
                setAttenuationlevel("");
                setContributedby("");
            })
            .catch(e => console.log("error creating beer...", e));

    }

    //axios.post(process.env.REACT_APP_API_URL + "/beers", details)

    return (
        <section className="NewBeer">
            <h1>Create a new Beer</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>
                    Tagline
                    <input
                        type="text"
                        name="tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </label>

                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label>
                    First Brewed:
                    <input
                        type="text"
                        name="firstbrewed"
                        value={first_brewed}
                        onChange={(e) => setFirstbrewed(e.target.value)}
                    />
                </label>

                <label>
                    Brewers Tips
                    <input
                        type="text"
                        name="brewertips"
                        value={brewers_tips}
                        onChange={(e) => setBrewerstips(e.target.value)}
                    />
                </label>

                <label>
                    Attenuation level
                    <input
                        type="number"
                        min={0}
                        name="attenuationlevel"
                        value={attenuation_level}
                        onChange={(e) => setAttenuationlevel(e.target.value)}
                    />
                </label>

                <label>
                    Contributed by:
                    <input
                        type="text"
                        name="contributedby"
                        value={contributed_by}
                        onChange={(e) => setContributedby(e.target.value)}
                    />
                </label>

                <button type="submit">Create beer</button>

            </form>

        </section>
    )
}

export default NewBeer;