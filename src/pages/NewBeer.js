import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom';

export default function NewBeer() {

    const [formInputs, setFormInputs] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    //const navigate = useNavigate();
    
    function handleInputs(evnt) {

        const newInputs = {...formInputs};
        newInputs[evnt.target.name] = evnt.target.value;
        setFormInputs(newInputs);
    }

    function handleSubmit(evnt) {
        evnt.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formInputs)
            .then((response) => {
                // this for some reason only contains a message so redirect to details not possible
                console.log(response.data);
                //navigate(`/beers/${response.data._id}`);
                setFormInputs((previous) => {
                    for (let key in previous) {
                        previous[key] = "";
                    }
                    return previous
                });                
                setIsSuccess(true);
            })
            .catch((err) => console.log("Error creating new Beer: ", err))
    }

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => setIsSuccess(false), 3000);
        }
    }, [isSuccess])

    return (
        <div className="NewBeer">
            <form onSubmit={ handleSubmit }>
                <label>Name</label>
                <input type="text" name="name" value={ formInputs.name } onChange={ handleInputs }/>
                
                <label>Tagline</label>
                <input type="text" name="tagline" value={ formInputs.tagline } onChange={ handleInputs }/>
                
                <label>Description</label>
                <input type="text" name="description" value={ formInputs.description } onChange={ handleInputs }/>
                
                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={ formInputs.first_brewed } onChange={ handleInputs }/>
                
                <label>Brewers Tips</label>
                <input type="text" name="brewers_tips" value={ formInputs.brewers_tips } onChange={ handleInputs }/>
                
                <label>Attenuation Level</label>
                <input type="number" name="attenuation_level" value={ formInputs.attenuation_level } onChange={ handleInputs }/>
                
                <label>Contributed by</label>
                <input type="text" name="contributed_by" value={ formInputs.contributed_by } onChange={ handleInputs }/>
                
                <button className="submit-btn" type="submit">Create</button>

                { isSuccess && <p>Successfully added New Beer!</p> }

            </form>
        </div>
    )
}
