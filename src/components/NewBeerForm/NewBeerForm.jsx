import { useState } from "react"
import beersService from "../../services/beers.service"

const NewBeerForm = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {
        const { value, name } = e.target

        setBeerData({
            ...beerData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beersService
            .createBeer({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label">Name</label>
                <input className="form-control" type='text' value={name} name='name' onChange={handleInputChange}></input>
            </div>

            <div>
                <label className="form-label">tagline</label>
                <input className="form-control" type='text' value={tagline} name='tagline' onChange={handleInputChange}></input>
            </div>

            <div>
                <label className="form-label">description</label>
                <input className="form-control" type='text' value={description} name='description' onChange={handleInputChange}></input>
            </div>

            <div>
                <label className="form-label">first_brewed</label>
                <input className="form-control" type='text' value={first_brewed} name='first_brewed' onChange={handleInputChange}></input>
            </div>

            <div>
                <label className="form-label">brewers_tips</label>
                <input className="form-control" type='text' value={brewers_tips} name='brewers_tips' onChange={handleInputChange}></input>
            </div>

            <div>
                <label className="form-label">attenuation_level</label>
                <input className="form-control" className="form-control" type='number' value={attenuation_level} name='attenuation_level' onChange={handleInputChange}></input>
            </div>

            <div>
                <label className="form-label">contributed_by</label>
                <input className="form-control" type='text' value={contributed_by} name='contributed_by' onChange={handleInputChange}></input>
            </div>

            <div>
                <button type='submit'>Crear cerve</button>
            </div>
        </form>
    )
}

export default NewBeerForm