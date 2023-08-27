import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description , setDescription] = useState('');
    const [brewed, setFirstBrewed] = useState('');
    const [tips, setBrewersTips] = useState('');
    const [attenuation, setAttenuationLevel] = useState(1);
    const [contributed, setContributedBy] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {name: name, tagline: tagline, description: description, first_brewed: brewed, brewers_tips: tips, attenuation_level: attenuation, contributed_by: contributed};

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then(() => {
            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationLevel(1);
            setContributedBy('');
            navigate('/');

        })
    }

    return (
        <div>
            <h3>Add New Beers</h3> 
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" onChange={(e) => setName (e.target.value)} value={name}/>
                </label>
                <label>
                    Tagline
                    <input type="text" name="tagline" onChange={(e) => setTagline (e.target.value)} value={tagline}/>
                </label>
                <label>
                    Description
                    <input type="text" name="description" onChange={(e) => setDescription (e.target.value)} value={description}/>
                </label>
                <label>
                    Brewed
                    <input type="text" name="first_brewed" onChange={(e) => setFirstBrewed (e.target.value)} value={brewed}/>
                </label>
                <label>
                    Tips
                    <input type="text" name="brewers_tips" onChange={(e) => setBrewersTips (e.target.value)} value={tips}/>
                </label>
                <label>
                    Attenuation
                    <input type="number" name="attenuation_level" onChange={(e) => setAttenuationLevel (e.target.value)} value={attenuation}/>
                </label>
                <label>
                    Contributed By
                    <input type="text" name="contributed_by" onChange={(e) => setContributedBy (e.target.value)} value={contributed}/>
                </label>
                <button type="submit">
                    Add a Beer
                </button>
            </form>

        </div>
    )
}

export default AddBeerPage;
