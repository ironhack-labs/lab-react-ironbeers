import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import house from "../assets/houseIcon.png";

const NewBeer = () => {
    const navigate = useNavigate();

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: null,
        contributed_by: ''
    })

    const handleSubmit = (e) => {

        e.preventDefault();
    
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => {
                setNewBeer({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: null,
                    contributed_by: ''
                })
    
                navigate("/");
            })
            .catch(error => {
                console.log("There was an error creating the apartment on the database", error)
            })
    }

    return(
        <>
            <header className="navbar navbar-expand-lg navbar-light justify-content-center bg-info">
                <Link to="/"><img style={{width: "3rem"}} src={house} alt="Home Button"></img></Link>
            </header>
            <h1>Create Beer</h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>Name:  </label>
                <input type="text" name="name" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <label>Tagline:  </label>
                <input type="text" name="tagline" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <label>Description:  </label>
                <input type="textarea" name="description" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <label>First Brewed:  </label>
                <input type="text" name="first_brewed" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <label>Brewers Tips:  </label>
                <input type="text" name="brewers_tips" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <label>Attenuation Level:  </label>
                <input type="number" name="attenuation_level" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <label>Contributed By:  </label>
                <input type="text" name="contributed_by" onChange={e => setNewBeer({...newBeer, [e.target.name]: e.target.value})} required/>
                <br></br> <br></br>
                <button>Submit</button>
            </form>
        </>
    )
}

export default NewBeer;