import { useState } from 'react'
import { useNavigate } from 'react-router'
import { newBeer } from '../../services/BeersServices'
import './NewBeer.scss'

const initialData = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
}

const NewBeer = () => {
    const [ data, setData ] = useState(initialData)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = data
        
        if ( name && tagline && description && first_brewed && brewers_tips && attenuation_level && contributed_by) {
            newBeer(data)
            .then(navigate('/beers'))
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }

    return(
        <form className='form-container' action="/beers/new'" method="POST" onSubmit={handleSubmit}>

            <div className="mt-5">
                <label className='form-label'>Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="Beer Name" />
            </div>
            <div className="mt-3">
                <label className='form-label'>Tagline</label>
                <input type="text" className="form-control" name="tagline" onChange={handleChange} placeholder="Tagline" />
            </div>

            <div className="mt-3">
                <label className='form-label'>Description</label>
                <textarea className="form-control" name="description" onChange={handleChange} rows="5"></textarea>
            </div>

            <div className="mt-3">
                <label className='form-label'>First Brewed</label>
                <input type="text" className="form-control" name="first_brewed" onChange={handleChange} placeholder="First Brewed" />
            </div>

            <div className="mt-3">
                <label className='form-label'>Brewers Tips</label>
                <input type="text" className="form-control" name="brewers_tips" onChange={handleChange} placeholder="Brewers Tips" />
            </div>

            <div className="mt-3">
                <label className='form-label'>Attenuation Level</label>
                <input type="number" className="form-control" name="attenuation_level" onChange={handleChange} placeholder="Attenuation Level" />
            </div>

            <div className="mt-3">
                <label className='form-label'>Contributed By</label>
                <input type="text" className="form-control" name="contributed_by" onChange={handleChange} placeholder="Created by..." />
            </div>

            <button type="submit" className="btn btn-outline-primary mt-5">Create beer</button>
        </form>
    )
}

export default NewBeer