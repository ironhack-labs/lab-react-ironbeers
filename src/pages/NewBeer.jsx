import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import headerImg from "../assets/header.png"
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function NewBeer() {

    const [image_url, setImage] =useState("")
    const [ name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState("")
    
    const navigate = useNavigate();

    const handleImage = (e) => setImage(e.target.value)
    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(Number(e.target.value))

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBeer = {
            image_url,
            name,
            tagline,
            first_brewed,
            attenuation_level,
        };
        try {
            await axios.post(
              `https://ih-beers-api2.herokuapp.com/beers/new`,
              newBeer
            );
      
            
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        };


    return (
        <div>
            <header>
                <Link to={"/"}><img src={headerImg}></img></Link>
                
            </header>
            <h3> Add new beer</h3>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="image_url"> Image:</label>
            <input type="text" name="image_url" value={image_url} onChange={handleImage}/>
            
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleName}/>
            
            <label htmlFor="tagline">Tagline:</label>
            <input type="text" name="tagline" value ={tagline} onChange={handleTagline} />
            
            <label htmlFor="first_brewed">First Brewed:</label>
            <input type="text" name="first_brewed" value ={first_brewed} onChange={handleFirstBrewed} />
            
            <label htmlFor="attenuation_level">Attenuation Level:</label>
            <input type="number" name="attenuation_level" value ={attenuation_level} onChange={handleAttenuationLevel} />
           
           <button type="submit" >Create your Beer!</button>
            </form>
            

        </div>
    )
}

export default NewBeer