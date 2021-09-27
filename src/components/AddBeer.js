import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export default function AddBeer() {


    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributed, setContributed] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        const reqBody = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributed }
        console.log(reqBody)
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', reqBody)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h3>Add a beer</h3>
            <form className='formContainer' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="nameHelp"
                        placeholder="Enter name"
                        defaultValue={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Tagline:</label>
                    <input type="text"
                        className="form-control"
                        id="tagline"
                        placeholder="tagline"
                        defaultValue={tagline}
                        onChange={e => setTagline(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text"
                        className="form-control"
                        id="description"
                        placeholder="description"
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="">First-Brewed:</label>
                    <input type="text"
                        className="form-control"
                        id="first_brewed"
                        placeholder="first_brewed"
                        defaultValue={firstBrewed}
                        onChange={e => setFirstBrewed(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Brewers-tips:</label>
                    <input type="text"
                        className="form-control"
                        id="brewers-tips"
                        placeholder="Brewers tips"
                        defaultValue={brewersTips}
                        onChange={e => setBrewersTips(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Attenuation Level:</label>
                    <input type="text"
                        className="form-control"
                        id="brewers-tips"
                        placeholder="Attenuation level"
                        defaultValue={attenuationLevel}
                        onChange={e => setAttenuationLevel(e.target.value)}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="text">Contributed by</label>
                    <input type=""
                        className="form-control"
                        id="contributed"
                        placeholder="contributed"
                        defaultValue={contributed}
                        onChange={e => setContributed(e.target.value)}
                    />
                </div>
                <button type='submit'>Add Beer</button>
            </form>

        </div>
    )
}
