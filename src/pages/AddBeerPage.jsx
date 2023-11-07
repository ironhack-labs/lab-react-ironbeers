import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const beerAPI = "https://ih-beers-api2.herokuapp.com/beers"


function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault()

        const requestBody = {name, tagline, description, brewers_tips, first_brewed, attenuation_level};

        axios.post(`${beerAPI}/new`, requestBody).then(()=>{
            navigate(`/new`);
        })
        .catch((error)=> console.log(error))
        console.log(`${beerAPI}/new`)

    }


    return(
        <div style={{paddingTop:"100px"}}>
            <form onSubmit={handleSubmit}>
                <label><input type="text" name="name" onChange={(e)=> setName(e.target.value)}/>Name</label>
                <label><input type="text" name="tagline"onChange={(e)=> setTagline(e.target.value)}/>Tagline</label>
                <label><input type="text" name="description"onChange={(e)=> setDescription(e.target.value)} />Description</label>
                <label><input type="text" name="first_brewed"onChange={(e)=> setBrewersTips(e.target.value)}/>First Brewed</label>
                <label><input type="text" name="brewers_tips"onChange={(e)=> setFirstBrewed(e.target.value)}/>Brewers Tips</label>
                <label><input type="number" name="attenuation_level" onChange={(e)=> setAttenuationLevel(e.target.value)}/>attenuation_level</label>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
