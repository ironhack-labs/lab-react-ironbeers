import axios from "axios";
import { useState } from "react";

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
        <div className="centered-content">
            <h2>Add a new beer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-name">Name</label>
                <input type="text" id="input-name" onChange={handleForm} value={formInfo.name} name="name" style={{ borderRadius: "20px" }}/>
                <hr />
                <label htmlFor="input-tagline">Tagline</label>
                <input type="text" id="input-tagline" onChange={handleForm} value={formInfo.tagline} name="tagline" style={{ borderRadius: "20px" }}/>
                <hr />
                <label htmlFor="input-description">Description</label>
                <textarea type="text" id="input-description" onChange={handleForm} value={formInfo.description} name="description" style={{ borderRadius: "20px" }}/>
                <hr />
                <label htmlFor="input-brewed">First brewed</label>
                <input type="text" id="input-brewed" onChange={handleForm} value={formInfo.first_brewed} name="first_brewed" style={{ borderRadius: "20px" }}/>
                <hr />
                <label htmlFor="input-tips">Brewer's Tips</label>
                <input type="text" id="input-tips" onChange={handleForm} value={formInfo.brewers_tips} name="brewers_tips" style={{ borderRadius: "20px" }}/>
                <hr />
                <label htmlFor="input-att">Attenuation Level</label>
                <input type="number" id="input-att" onChange={handleForm} value={formInfo.attenuation_level} name="attenuation_level" style={{ borderRadius: "20px" }}/>
                <hr />
                <label htmlFor="input-cont">Contributed By</label>
                <input type="text" id="input-cont" onChange={handleForm} value={formInfo.contributed_by} name="contributed_by" style={{ borderRadius: "20px" }}/>
                <hr />
                <button type="submit" style={{backgroundColor: "#33c3fb", color: "#fff", borderRadius: 20, padding: "10px", fontSize: "20px", border: "none"}}>ADD NEW BEER</button>
            </form>
        </div>
    )
}