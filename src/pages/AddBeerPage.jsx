import { useState } from "react"
import axios from "axios";7
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

    const API = "https://ih-beers-api2.herokuapp.com/beers"
    const navigate = useNavigate();

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`${API}/new`, newBeer)
        .then((response)=>{
            navigate("/beers")
            console.log(response)
        })

    }

    return(
        <div>  
            <form onSubmit={handleSubmit}>
                <label>Name</label><input name="name" type="text" onChange={(e)=> setNewBeer({...newBeer, name: e.target.value})} value={newBeer.name}></input>
                <hr></hr>
                <label>Tagline</label><input name="tagline" type="text" onChange={(e)=> setNewBeer({...newBeer, tagline: e.target.value})} value={newBeer.tagline} ></input>
                <hr></hr>
                <label>Description</label><textarea name="description" type="text" onChange={(e)=> setNewBeer({...newBeer, description: e.target.value})} value={newBeer.description} ></textarea>
                <hr></hr>
                <label>First Brewed</label><input name="first_brewed" type="text" onChange={(e)=> setNewBeer({...newBeer, first_brewed: e.target.value})} value={newBeer.first_brewed} ></input>
                <hr></hr>
                <label>Brewer's Tips</label><input name="brewers_tips" type="text" onChange={(e)=> setNewBeer({...newBeer, brewers_tips: e.target.value})} value={newBeer.brewers_tips}></input>
                <hr></hr>
                <label>Attenuation Level</label><input name="attenuation_level" type="number" onChange={(e)=> setNewBeer({...newBeer, attenuation_level: e.target.value})} value={newBeer.attenuation_level}></input>
                <hr></hr>
                <label>Contributed By</label><input name="contributed_by" type="text" ></input>
                <hr></hr>
                <button type="submit" >Add Beer</button>
           </form>
        </div>
    )
}

export default AddBeerPage;