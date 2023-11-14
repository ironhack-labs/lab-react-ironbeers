import axios from "axios";
import {  useState } from "react";


function AddBeerPage(props) {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuation, setAttenuation] = useState(0)
    const [contributed, setContributed] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            name, 
            tagline, 
            description, 
            firstBrewed, 
            brewersTips, 
            attenuation, 
            contributed
        }
   
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, requestBody)
            .then((response) => {
                props.callbackToUpdateBeers()
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
