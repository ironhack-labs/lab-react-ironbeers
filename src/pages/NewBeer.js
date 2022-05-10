import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function NewBeer() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setfirstBrewed] = useState('');
    const [brewerTips, setBrewerTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');



    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { 
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewerTips: brewerTips,
            attenuationLevel: attenuationLevel,
            contributedBy: contributedBy
        }
    

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {


                navigate('/');
            })
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <Header />
        <h1>Add New Beer</h1>

                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                
                        <label>Tagline</label>
                        <input
                        type="text"
                        name="tagline"
                        onChange={(e) => setTagline(e.target.value)}
                        value={tagline}
                        />

                        <label>Description</label>
                        <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        />

                        <label>First Brewed</label>
                        <input
                        type="text"
                        name="firstBrewed"
                        onChange={(e) => setfirstBrewed(e.target.value)}
                        value={firstBrewed}
                        />

                        <label>Brewer Tips</label>
                        <input
                        type="text"
                        name="brewerTips"
                        onChange={(e) => setBrewerTips(e.target.value)}
                        value={brewerTips}
                        />

                        <label>Attenuation Level</label>
                        <input
                        type="number"
                        name="attenuationLevel"
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                        value={attenuationLevel}
                        />
                        
                        <label>Contributed By</label>
                        <input
                        type="text"
                        name="contributedBy"
                        onChange={(e) => setContributedBy(e.target.value)}
                        value={contributedBy}
                        />                        
                        {/* name: String, 
                            tagline: String,
                            description: String,
                            first_brewed: String,
                            brewer_tips: String,
                            attenuation_level: Number,
                            contributed_by: String
                         */}
                        <button type="submit">Create Beer</button>
        
                    </form>

        </div>
    );
}

export default NewBeer;