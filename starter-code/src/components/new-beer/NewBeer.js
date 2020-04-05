import React, { useState } from 'react'
import axios from 'axios'


export default function NewBeer() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tagline, setTagline] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setBrewersTips] = useState('');
    const [attenuation_level, setAttenuationLevel] = useState('');
    const [contributed_by, setContributedBy] = useState('');

    const sendForm = async event => {
        event.preventDefault();
        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name, description, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by })
            setName('');
            setDescription('');
            setTagline('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationLevel('');
            setContributedBy('');
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <div>
            <div>
                <div className="d-flex justify-content-center">
                    <form className="d-flex flex-column justify-content-center text-center align-items-center" onSubmit={sendForm}>
                        <label>name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>description:</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <label>tagline:</label>
                        <input
                            type="text"
                            name="tagline"
                            value={tagline}
                            onChange={e => setTagline(e.target.value)}
                        />
                        <label>first brewed:</label>
                        <input
                            type="text"
                            name="first_brewed"
                            value={first_brewed}
                            onChange={e => setFirstBrewed(e.target.value)}
                        />
                        <label>brewers tips:</label>
                        <input
                            type="text"
                            name="brewers_tips"
                            value={brewers_tips}
                            onChange={e => setBrewersTips(e.target.value)}
                        />
                        <label>attenuation level:</label>
                        <input
                            type="number"
                            name="attenuation_level"
                            value={attenuation_level}
                            onChange={e => setAttenuationLevel(e.target.value)}
                        />


                        <label>contributed by:</label>
                        <input
                            type="text"
                            name="contributed_by"
                            value={contributed_by}
                            onChange={e => setContributedBy(e.target.value)}
                        />


                        <input type="submit" className="btn btn-primary mt-5" value="Add new Beer" />
                    </form>
                </div>
            </div>
        </div>
    )
}
