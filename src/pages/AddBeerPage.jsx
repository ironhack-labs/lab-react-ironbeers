import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage(){
    const[name, setName] = useState('')
    const[tagline, setTagline] = useState('')
    const[description, setDescription] = useState('')
    const[firstBrewed, setFirstBrewed] = useState('')
    const[brewersTips, setBrewersTips] = useState('')
    const[attenuationLevel, setAttenuationLevel] = useState(0)
    const[contributed_by, setContributedby] = useState('')
    const[imageUrl, setImageUrl] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            image_url: imageUrl, 
            name: name, 
            tagline: tagline, 
            description: description, 
            first_brewed: firstBrewed, 
            brewers_tips: brewersTips, 
            attenuation_level: attenuationLevel, 
            contributed_by: contributed_by
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then(()=>{
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setBrewersTips('')
            setAttenuationLevel(0)
            setContributedby('')
            setImageUrl('')
            //same as res.redirect('/')
            navigate('/')
        })
    }

    return(
        <div>
            <h3>Add New Beer</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Image:
                    <input type="text" name="image_url" onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl}/>
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
                </label>
                <label>
                    Tagline:
                    <input type="text" name="tagline" onChange={(e)=>setTagline(e.target.value)} value={tagline}/>
                </label>
                <label>
                    Description:
                    <textarea name="description" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                </label>
                <label>
                    First Brewed:
                    <input type="text" name="first_brewed" onChange={(e)=>setFirstBrewed(e.target.value)} value={firstBrewed}/>
                </label>
                <label>
                    Brewer's Tips:
                    <input type="text" name="brewers_tips" onChange={(e)=>setBrewersTips(e.target.value)} value={brewersTips}/>
                </label>
                <label>
                    Attenuation level:
                    <input type="number" name="attenuation_level" onChange={(e)=>setAttenuationLevel(e.target.value)} value={attenuationLevel}/>
                </label>
                <label>
                    Contributed By:
                    <input type="text" name="contributed_by" onChange={(e)=>setContributedby(e.target.value)} value={contributed_by}/>
                </label>
                <button type="submit">
                    Add Beer
                </button>
            </form>
        </div>
    )
}

export default AddBeerPage;