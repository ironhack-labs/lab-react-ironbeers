import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";


const initialState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
}

const Newbeer = ({ onSubmit }) => {
    const [data, setData] = useState(initialState)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        const { name, tagline, description,
            first_brewed, brewers_tips,
            attenuation_level, contributed_by } = data;

        if (name && tagline && description
            && first_brewed && brewers_tips
            && attenuation_level && contributed_by) {
            // Al no estar en local el data, hay que hacer la petición "post" antes de hacer el "onSubmit"
            axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
                .then(() => {
                    onSubmit({
                        ...data,
                    })
                    navigate("/")
                })
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
        console.log(name, value)
    }
    console.log(data)
    return (

        <div className='row justify-content-center mb-4 mt-4'>
            <div className="col col-sm-8 col-md-6 col-lg-8 mx-6">

                <form className="field mt-2" onSubmit={handleSubmit}>
                    {/* NAME-INPUT */}
                    <div className='BeerName'>
                        <label htmlFor='name' className="label text-start">Name</label>
                        <div className="control">
                            <input className="input is-rounded"
                                id='name'
                                name='name'
                                onChange={handleChange}
                                type="text"
                                placeholder=""></input>
                        </div>
                    </div>
                    {/* TAGLINE-INPUT */}
                    <div className='Tagline mt-2'>
                        <label htmlFor='tagline' className="label text-start">Tagline</label>
                        <div className="control">
                            <input className="input is-rounded"
                                id='tagline'
                                name='tagline'
                                onChange={handleChange}
                                type="text"
                                placeholder=""></input>
                        </div>
                    </div>
                     {/* DESCRIPTION-TEXTAREA */}
                     <div className='Tagline mt-2'>
                        <label htmlFor='tagline' className="label text-start">Description</label>
                        <div className="control">
                        <textarea className="textarea is-rounded"
                        onChange={handleChange}
                    
                         placeholder="">{data.description}</textarea>
                        </div>
                    </div>
                     {/* FIRST-BREWED-INPUT */}
                     <div className='mt-2'>
                        <label htmlFor='first_brewed' className="label text-start">First Brewed</label>
                        <div className="control">
                            <input className="input is-rounded"
                                id='first_brewed'
                                name='first_brewed'
                                onChange={handleChange}
                                type="text"
                                placeholder=""></input>
                        </div>
                    </div>
                    {/* BUTTONS */}
                    <div className="field is-grouped is-grouped-right mt-4">
                        <p className="control">
                            <a className="button is-primary" type="submit">
                                Submit
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-light">
                                Cancel
                            </a>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Newbeer;