import { useState } from 'react';
import Header from './Header.js';

function NewBeer() {
    const [name, setName] = useState();
    const [tagline, setTagline] = useState();
    const [description, setDescription] = useState();
    const [firstBrewed, setFirstBrewed] = useState();
    const [brewersTips, setBrewersTips] = useState();
    const [attenuationLevel, setAttenuationLevel] = useState();
    const [contributedBy, setContributedBy] = useState();

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleTaglineChange = event => {
        setTagline(event.target.value);
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    const handleFirstBrewedChange = event => {
        setFirstBrewed(event.target.value);
    }

    const handleBrewersTipsChange = event => {
        setBrewersTips(event.target.value);
    }

    const handleAttenuationLevelChange = event => {
        setAttenuationLevel(event.target.value);
    }

    const handleContributedByChange = event => {
        setContributedBy(event.target.value);
    }

    const handleButtonClick = () => {
        console.log(name);
    }

    return (
        <div className='NewBeer'>
            <Header></Header>
            <div className='new-beer-form'>
                <form>
                    <label>Name</label>
                    <input type='text' name='name' value={name} onChange={handleNameChange}></input>

                    <label>Tagline</label>
                    <input type='text' name='tagline' value={tagline} onChange={handleTaglineChange}></input>

                    <label>Description</label>
                    <input type='text' name='description' value={description} onChange={handleDescriptionChange}></input>

                    <label>First brewed</label>
                    <input type='text' name='first_brewed' value={firstBrewed} onChange={handleFirstBrewedChange}></input>

                    <label>Brewers Tips</label>
                    <input type='text' name='brewers_tips' value={brewersTips} onChange={handleBrewersTipsChange}></input>

                    <label>Attenuation Level</label>
                    <input type='number' name='attenuation_level' value={attenuationLevel} onChange={handleAttenuationLevelChange}></input>

                    <label>Contributed By</label>
                    <input type='text' name='contributed_by' value={contributedBy} onChange={handleContributedByChange}></input>

                    <button onClick={handleButtonClick}>Add New</button>
                </form>
            </div>

        </div>
    )
}

export default NewBeer;