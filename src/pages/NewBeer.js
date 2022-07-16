import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


export default function NewBeer() {
    const [beerName, setBeerName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState()
    const [contributedBy, setContributedBy] = useState('')
    const navigate = useNavigate()


    //     name - must be type text
    // tagline - must be type text
    // description - must be type text
    // first_brewed - must be type text
    // brewers_tips - must be type text
    // attenuation_level - must be type number !!!
    // contributed_by - must be type text



    function handleSubmit(e) {

        e.preventDefault()

        const body = { name: beerName, tagline: tagline, description: description, first_brewed: firstBrewed,brewers_tips: brewersTips,attenuation_level:attenuationLevel,contributed_by:contributedBy}

        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
            .then((response) => {
                setBeerName('')
                setTagline('')
                setDescription('')
                setFirstBrewed('')
                setBrewersTips('')
                setAttenuationLevel('')
                setContributedBy('')
                navigate('/allbeers')
            })
    }




    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <label>Beer Name:</label>
                <input type='text' name='beerName' onChange={(e) => setBeerName(e.target.value)} value={beerName} />

                <label>Tagline:</label>
                <input type='text' name='tagline' onChange={(e) => setTagline(e.target.value)} value={tagline} />

                <label>Description:</label>
                <input type='text' name='description' onChange={(e) => setDescription(e.target.value)} value={description} />

                <label>First Brewed:</label>
                <input type='text' name='firstBrewed' onChange={(e) => setFirstBrewed(e.target.value)} value={firstBrewed} />

                <label>Brewers Tips:</label>
                <input type='text' name='brewersTips' onChange={(e) => setBrewersTips ( e.target.value )} value={brewersTips} />
                   
                <label>attenuationLevel:</label>
                <input type='number' name='attenuationLevel' onChange={(e) => setAttenuationLevel ( e.target.value )} value={attenuationLevel} />
                   
                <label>Contributed By:</label>
                <input type='text' name='contributedBy' onChange={(e) => setContributedBy ( e.target.value )} value={contributedBy} />
                   
                <button type='submit'> Add the Beer</button>

            </form>


        </div>
    )
}
