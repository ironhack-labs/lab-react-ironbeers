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
            name: name, 
            tagline: tagline, 
            description: description, 
            first_brewed: first_brewed, 
            brewers_tips: brewers_tips, 
            attenuation_level: attenuation_level, 
            contributed_by: contributed_by
        }
   
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
            .then(() => {
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
                    name="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                      }}
                     />
                <br />
                <label>Tagline</label>
                <input 
                    type="text" 
                    name="tagline"
                    value={tagline}
                    onChange={(e) => {
                        setTagline(e.target.value);
                      }} />
                <br />
                <label>Description</label>
                <input 
                    type="text" 
                    name="description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                      }} />
                <br />
                <label>First Brewed</label>
                <input 
                    type="text" 
                    name="first_brewed" 
                    value={first_brewed}
                    onChange={(e) => {
                        setFirstBrewed(e.target.value);
                      }}/>
                <br />
                <label>Brewer's Tips</label>
                <input 
                    type="text" 
                    name="brewers_tips"
                    value={brewers_tips}
                    onChange={(e) => {
                        setBrewersTips(e.target.value);
                      }} />
                <br />
                <label>Attenuation Level</label>
                <input 
                    type="number" 
                    name="attenuation_level" 
                    value={attenuation_level}
                    onChange={(e) => {
                        setAttenuation(e.target.value);
                      }}/>
                <br />
                <label>Contributed By</label>
                <input 
                    type="text" 
                    name="contributed_by"
                    value={contributed_by}
                    onChange={(e) => {
                        setContributed(e.target.value);
                      }} />
                <br />
                <button type="submit">Add Beer</button>
            </form>

        </div>
        </>
    )

}

export default AddBeerPage;
