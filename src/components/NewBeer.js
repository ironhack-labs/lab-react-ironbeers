import axios from "axios";
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function NewBeer(){
    const navigate = useNavigate();
    
    const createBeer = (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const tagline = e.target.tagline.value;
        const description = e.target.description.value;
        const first_brewed = e.target.first_brewed.value;
        const brewers_tip = e.target.brewers_tip.value;
        const attenuation_level = e.target.attenuation_level.value;
        const contributed_by = e.target.contributed_by.value;
        const urlAPI = 'https://ih-beers-api2.herokuapp.com/beers/new';
        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tip: brewers_tip,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }

        axios
            .post(urlAPI, body)
            .then((response ) => {

                navigate('/');
            })
    };
    return(
        <div>
            <Navbar />
            <form onSubmit={createBeer}>
                <label for="name">Name: 
                    <input type="text" name="name"/>
                </label>
                <label for="tagline">Tagline: 
                    <input type="text" name="tagline"/>
                </label>
                <label for="description">Desctiption: 
                    <input type="text" name="description"/>
                </label>
                <label for="first_brewed">First brewes: 
                    <input type="text" name="first_brewed"/>
                </label>
                <label for="brewers_tip">Tips: 
                    <input type="text" name="brewers_tip"/>
                </label>
                <label for="attenuation_level">attenuation level: 
                    <input type="number" name="attenuation_level" min="0" max="100" />
                </label>
                <label for="contributed_by">Contributed by: 
                    <input type="text" name="contributed_by"/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewBeer;