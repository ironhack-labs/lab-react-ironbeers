import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function AddBeerPage() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0); 
    const [contributedBy, setContributedBy] = useState("");

    const navigate = useNavigate()

    function handleSubmit(e){
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

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(()=>{
            alert("Congrats you added a beer")
            navigate('/beers')

        })
        .catch((err)=>{console.log(err)})

    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br /><br />

            <label htmlFor="tagline">Tagline:</label><br />
            <input
                type="text"
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
            /><br /><br />

            <label htmlFor="description">Description:</label><br />
            <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea><br /><br />

            <label htmlFor="firstBrewed">First Brewed:</label><br />
            <input
                type="text"
                id="firstBrewed"
                name="firstBrewed"
                value={firstBrewed}
                onChange={(e) => setFirstBrewed(e.target.value)}
            /><br /><br />

            <label htmlFor="brewersTips">Brewer Tips:</label><br />
            <input
                type="text"
                id="brewersTips"
                name="brewersTips"
                value={brewersTips}
                onChange={(e) => setBrewersTips(e.target.value)}
            /><br /><br />

            <label htmlFor="attenuationLevel">Attenuation Level:</label><br />
            <input
                type="number"
                id="attenuationLevel"
                name="attenuationLevel"
                value={attenuationLevel}
                onChange={(e) => setAttenuationLevel(Number(e.target.value))}
            /><br /><br />

            <label htmlFor="contributedBy">Contributed By:</label><br />
            <input
                type="text"
                id="contributedBy"
                name="contributedBy"
                value={contributedBy}
                onChange={(e) => setContributedBy(e.target.value)}
            /><br /><br />

            <button type="submit">Add Beer</button>
            </form>


        </div>
    )
}

export default AddBeerPage
