import axios from "axios";
import { useState } from "react";
import Header from "./Header";


function NewBeer () {
  
    const [name, setName]=useState('');
    const [tagline, setTagline]=useState('');
    const [description, setDescription]=useState('');
    const [firstBrewed, setFirstBrewed]=useState('');
    const [brewersTips, setBrewersTips]=useState('');
    const [attenuationLevel, setAttenuationLevel]=useState('');
    const [contributedBy, setContributedBy]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
        name, tagline, description, firstBrewed,
        brewersTips, attenuationLevel, contributedBy,
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(response => {
                console.log(response.data)
                setName(''); setTagline(''); setDescription(''); setFirstBrewed('');
                setBrewersTips(''); setAttenuationLevel(''); setContributedBy('');
            })
            .catch(e => console.log('Sending newBeer to API err', e))




    }

    return (
        <div>
            <Header />
            <h1>this is the New Beer Page</h1>
            <form onSubmit={handleSubmit}>
                <label> Name:
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label> <br/>
                <label> Tagline:
                    <input
                        type='text'
                        name='tagline'
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </label> <br/>
                <label> Description:
                    <textarea
                        rows='4'
                        cols='40'
                        type='text'
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label> <br/>
                <label> First Brewed:
                    <input
                        type='text'
                        name='firstBrewed'
                        value={firstBrewed}
                        onChange={(e) => setFirstBrewed(e.target.value)}
                    />
                </label> <br/>
                <label> Brewers tips:
                    <input
                        name='brewersTips'
                        type='text'
                        value={brewersTips}
                        onChange={(e) => setBrewersTips(e.target.value)}
                    />
                </label> <br/>
                <label> Attenuation level:
                    <input
                        name='attenuationLevel'
                        type='number'
                        min={0}
                        value={attenuationLevel}
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                    />
                </label> <br/>
                <label> Contributed by:
                    <input
                        name='contributedBy'
                        type='text'
                        value={contributedBy}
                        onChange={(e) => setContributedBy(e.target.value)}
                    />
                </label>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default NewBeer;