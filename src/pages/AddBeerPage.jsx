import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";



function AddBeerPage() {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuation] = useState(0)
    const [contributed_by, setContributed] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            name, 
            tagline, 
            description, 
            first_brewed, 
            brewers_tips, 
            attenuation_level, 
            contributed_by,
        }
   
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
            .then((response) => {
                navigate ("/beers")
            })
            .catch((error) => {
                console.log(error)
            })
   
        }

    return (
        <>
        <div className="formAddBeer">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" />
                <br />
                <label>Tagline</label>
                <input 
                    type="text" 
                    name="tagline" />
                <br />
                <label>Description</label>
                <input 
                    type="text" 
                    name="Description" />
                <br />
                <label>First Brewed</label>
                <input 
                    type="text" 
                    name="first_brewed" />
                <br />
                <label>Brewer's Tips</label>
                <input 
                    type="text" 
                    name="brewers_tips" />
                <br />
                <label>Attenuation Level</label>
                <input 
                    type="number" 
                    name="brewers_tips" />
                <br />
                <label>Contributed By</label>
                <input 
                    type="text" 
                    name="contributed_by" />
                <br />
                <button type="submit">Add Beer</button>
            </form>

        </div>
        </>
    )

}

export default AddBeerPage;
