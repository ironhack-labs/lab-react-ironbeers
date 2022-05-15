import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateBeers() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setBrewersTip] = useState('');
    const [attenuation_level , setAttenuationLevel] = useState(0);
    const [contributed_by , setContributedBy] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }

    

      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
       .then(() => {
           console.log('new beer added');
           navigate('/');
       })
    }









    return (
        <div className="create">
            <h2>Add a New Beer</h2>
            <form onSubmit={handleSubmit}>
                <label>Beer name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Tagline:</label>
                <input
                    type="text"
                    required
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                />
                <label>Description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>First brewed:</label>
                <input
                    type="text"
                    required
                    value={first_brewed}
                    onChange={(e) => setFirstBrewed(e.target.value)}
                /><label>Brewer tips:</label>
                <input
                    type="text"
                    required
                    value={brewers_tips}
                    onChange={(e) => setBrewersTip(e.target.value)}
                /><label>Attenuation level:</label>
                <input
                    type="number"
                    required
                    value={attenuation_level}
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                /><label>Contributed by:</label>
                <input
                    type="text"
                    required
                    value={contributed_by}
                    onChange={(e) => setContributedBy(e.target.value)}
                />
                <button>Add blog</button>          
            </form>

        </div>
    );
}

export default CreateBeers;