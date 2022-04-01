import React, {useState} from 'react';
import { useNavigate } from "react-router";
import { addNewBeer } from '../../services/listBeersService';
import { v4 as uuidv4 } from 'uuid';
import './BeerForm.css';

const initialState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
}

const BeerForm = () => {
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        let { name, value } = event.target;

        if(name === "attenuation_level"){
            value = Number(value);
        }

        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = data;

        if (name && tagline && description && first_brewed && brewers_tips && attenuation_level && contributed_by) {
            addNewBeer({...data, id: uuidv4()})
                .then(navigate('/'))
                .catch(e => console.error(e))
        } else {
            setError(true);
        }
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input name="name" onChange={handleChange} type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="Htmlm-group">
                  <label htmlFor="tagline">Tagline</label>
                  <input name="tagline" onChange={handleChange} type="text" className="form-control" id="tagline" placeholder="Tagline" />
                </div>
                <div className="Htmlm-group">
                  <label htmlFor="description">Description</label>
                  <input name="description" onChange={handleChange} type="text" className="form-control" id="description" placeholder="Description" />
                </div>
                <div className="Htmlm-group">
                  <label htmlFor="first-brewed">First Brewed</label>
                  <input name="first_brewed" onChange={handleChange} type="text" className="form-control" id="first-brewed" placeholder="First brewed" />
                </div>
                <div className="Htmlm-group">
                  <label htmlFor="brewers_tips">Brewers Tips</label>
                  <input name="brewers_tips" onChange={handleChange} type="text" className="form-control" id="brewers_tips" placeholder="Brewers Tips" />
                </div>
                <div className="Htmlm-group">
                  <label htmlFor="attenuation_level">Attenuation Level</label>
                  <input name="attenuation_level" onChange={handleChange} type="number" className="form-control" id="attenuation_level" placeholder="Attenuation Level" />
                </div>
                <div className="Htmlm-group">
                  <label htmlFor="contributed_by">Contributed by</label>
                  <input name="contributed_by" onChange={handleChange} type="text" className="form-control" id="contributed_by" placeholder="Contributed by" />
                </div>
                <button type="submit" className="btn btn-primary">Add New</button>
            </form>
            { error && ( <div style={{color: 'red'}}>Invalid form</div> )}
        </div>
    );
};

export default BeerForm;