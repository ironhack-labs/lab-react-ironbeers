import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/new"
export default function AddBeerPage(){
    const [formInfo, setFormInfo] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
    })
    function handleForm(e){
        const {name, value} = e.target;
        setFormInfo(prevArr=>{
            return {...prevArr, [name]:value}
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        async function postBeer(){
            await axios.post(apiUrl, formInfo)
        }
        postBeer()
    }
    return (
        <>
            <h2>Add a new beer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-name">Name</label>
                <input type="text" id="input-name" onChange={handleForm} value={formInfo.name} name="name"/>
                <hr />
                <label htmlFor="input-tagline">Tagline</label>
                <input type="text" id="input-tagline" onChange={handleForm} value={formInfo.tagline} name="tagline"/>
                <hr />
                <label htmlFor="input-description">Description</label>
                <textarea type="text" id="input-description" onChange={handleForm} value={formInfo.description} name="description"/>
                <hr />
                <label htmlFor="input-brewed">First brewed</label>
                <input type="text" id="input-brewed" onChange={handleForm} value={formInfo.first_brewed} name="first_brewed"/>
                <hr />
                <label htmlFor="input-tips">Brewer's Tips</label>
                <input type="text" id="input-tips" onChange={handleForm} value={formInfo.brewers_tips} name="brewers_tips"/>
                <hr />
                <label htmlFor="input-att">Attenuation Level</label>
                <input type="number" id="input-att" onChange={handleForm} value={formInfo.attenuation_level} name="attenuation_level"/>
                <hr />
                <label htmlFor="input-cont">Contributed By</label>
                <input type="text" id="input-cont" onChange={handleForm} value={formInfo.contributed_by} name="contributed_by"/>
                <hr />
                <button type="submit">Add beer</button>
            </form>
        </>
    )
}


