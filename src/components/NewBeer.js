import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function NewBeer(){

    const navigate = useNavigate();

    const [name,setName] = useState('');
    const [tagline,setTagline] = useState('');
    const [description,setDescription] = useState('');
    const [firstBrewed,setFirstBrewed] = useState('');
    const [tips,setTips] = useState('');
    const [attenuation,setAttenuation] = useState('');
    const [creator,setCreator] = useState('');

    const updateName = (event) => {setName(event.target.value)}
    const updateTagline = (event) => {setTagline(event.target.value)}
    const updateDescription = (event) => {setDescription(event.target.value)}
    const updateFirstBrewed = (event) => {setFirstBrewed(event.target.value)}
    const updateTips = (event) => {setTips(event.target.value)}
    const updateAttenuation = (event) => {setAttenuation(event.target.value)}
    const updateCreator = (event) => {setCreator(event.target.value)}

    const submitForm = (event) => {
        event.preventDefault();

        const beerObject = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: tips,
            attenuation_level: attenuation,
            contributed_by: creator
        }

        console.log(beerObject);

        fetch('https://ih-beers-api2.herokuapp.com/beers/new',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beerObject)
        })
            .then(res => res.json())
            .then(json => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form id='add-beer' onSubmit={submitForm}>
                <label>Name</label>
                <input type='text' value={name} onChange={updateName} />
                <label>Tagline</label>
                <input type='text' value={tagline} onChange={updateTagline}/>
                <label>Description</label>
                <input type='text' value={description} onChange={updateDescription}/>
                <label>First Brewed</label>
                <input type='text' value={firstBrewed} onChange={updateFirstBrewed}/>
                <label>Brewer's Tips</label>
                <input type='text' value={tips} onChange={updateTips} />
                <label>Attenuation Level</label>
                <input type='number' value={attenuation} onChange={updateAttenuation}/>
                <label>Contributed by</label>
                <input type='text' value={creator} onChange={updateCreator}/>
                <button>ADD NEW</button>
            </form>
        </div>
    )
}

export default NewBeer;