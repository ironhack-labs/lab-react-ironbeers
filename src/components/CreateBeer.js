import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateBeer() {
 
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewer_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");
    
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const input = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", input)
            .then( response => {
                console.log(response.data)

                navigate("/"); 

            })
            .catch(e => console.log("error creating beer...", e));

    }


    return (
        
        <>
        <header>
        <NavLink to="/">Home</NavLink> 
        </header>
        <br/>
        <br/>

        <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br/>
                <br/>

                <label>
                    Tagline: 
                    <input
                        type="text"
                        name="tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </label>
                <br/>
                <br/>
                               

                <label>
                    Description: 
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br/>
                <br/>

                <label>
                    First Brewed: 
                    <input
                        type="text"
                        name="first_brewed"
                        value={first_brewed}
                        onChange={(e) => setFirst_brewed(e.target.value)}
                    />
                </label>
                <br/>
                <br/>

                <label>
                    Brewer Tips: 
                    <input
                        type="text"
                        name="brewers_tips"
                        value={brewers_tips}
                        onChange={(e) => setBrewer_tips(e.target.value)}
                    />
                </label>
                <br/>
                <br/>

                <label>
                    Attenuation Level: 
                    <input
                        type="number"
                        name="attenuation_level"
                        value={attenuation_level}
                        onChange={(e) => setAttenuation_level(e.target.value)}
                    />
                </label>
                <br/>
                <br/>

                <label>
                    Contributed By: 
                     <input
                        type="text"
                        name="contributed_by"
                        value={contributed_by}
                        onChange={(e) => setContributed_by(e.target.value)}
                    />
                </label>
                <br/>
                <br/>
                
                <button type="submit">Add new beer</button>

            </form>
    </>
               
    );
}

export default CreateBeer;