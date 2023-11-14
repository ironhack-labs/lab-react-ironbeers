import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then( response => {
                console.log('beer uploaded!')
                console.log(response.data)
                navigate("/beers")
            })
            .error( error => {
                console.log('issues by uploading the beer...' + error)
            } )
    }

    return (
        <main>
            <h1>Add your own beer</h1>
            <form onSubmit={handleFormSubmit}>

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
                    <textarea
                        name="description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    First Brewed
                    <input
                        type="text"
                        name="first_brewed"
                        value={firstBrewed}
                        onChange={(e) => setFirstBrewed(e.target.value)}
                    />
                </label>
                <label>
                    Brewer's Tips
                    <input
                        type="text"
                        name="brewers_tips"
                        value={brewersTips}
                        onChange={(e) => setBrewersTips(e.target.value)}
                    />
                </label>
                <label>
                    Attenuation Level
                    <input
                        type="number"
                        name="attenuation_level"
                        value={attenuationLevel}
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                    />
                </label>
                <label>
                    Contributed By
                    <input
                        type="text"
                        name="contributed_by"
                        value={contributedBy}
                        onChange={(e) => setContributedBy(e.target.value)}
                    />
                </label>
                <button type="submit">Add Beer</button>

            </form>
        </main>
    )
}

export default AddBeerPage;
