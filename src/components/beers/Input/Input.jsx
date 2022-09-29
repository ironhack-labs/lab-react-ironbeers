import React, { useState } from 'react';
import { addNewBeer } from '../../../services/beerServices';

export default function Input() {
    const [data, setData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    })

    const handleOnChange = (event) => {
        const { value, name } = event.target
        setData({...data, [name]: value})
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault()
        addNewBeer(data)
    }

    return (
        <div className="Input">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="name" placeholder="Name"
                    value={data.name} onChange={handleOnChange} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="tagline" placeholder="Tagline"
                    value={data.tagline} onChange={handleOnChange} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="description" placeholder="Description"
                    value={data.description} onChange={handleOnChange} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="first_brewed" placeholder="First_brewed"
                    value={data.first_brewed} onChange={handleOnChange} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="brewers_tips" placeholder="Tips"
                    value={data.brewers_tips} onChange={handleOnChange} />
                </div>

                <div className="input-group mb-3">
                    <input type="number" className="form-control" name="attenuation_level" placeholder="Attenuation level"
                    value={data.attenuation_level} onChange={handleOnChange} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="contributed_by" placeholder="Your name"
                    value={data.contributed_by} onChange={handleOnChange} />
                </div>

                <button type='submit' className="btn btn-danger mb-3" onClick={handleOnSubmit}>Submit</button>
            </form>
        </div>
    )
}
