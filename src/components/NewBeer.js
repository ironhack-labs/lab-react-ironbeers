import { Header } from "./Header"
import { useState } from "react"
import { fetchWrapper } from "../function/fetchWrapper";
import { useNavigate } from "react-router-dom";


export const NewBeer = () => {

    const [ newBeerData, setNewBeerData ] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setNewBeerData({ ...newBeerData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (e) => { 
        e.preventDefault();

        fetchWrapper(process.env.REACT_APP_API_BASE_URL + "/beers/new", "POST", newBeerData)
        .then((response) => {

            setNewBeerData({
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: 0,
                contributed_by: ""
            })

            navigate("/beers")
        })
    };

    return (
        <>
            <Header/>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.name}
                />

                <label>Tagline</label>
                <input 
                    type="text" 
                    name="tagline" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.tagline}
                    />

                <label>Description</label>
                <input 
                    type="text" 
                    name="description" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.description}
                    />

                <label>First Brewed</label>
                <input 
                    type="text"
                    name="first_brewed" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.first_brewed}
                />

                <label>Brewers Tips</label>
                <input 
                    type="text" 
                    name="brewers_tips" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.brewers_tips}
                    />

                <label>Attenuation Level</label>
                <input 
                    type="number" 
                    name="attenuation_level" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.attenuation_level}
                    />

                <label>Contributed By</label>
                <input 
                    type="text" 
                    name="contributed_by" 
                    onChange={(e) => handleChange(e)} 
                    value={newBeerData.contributed_by}
                    />

                <button>Create Beer</button>

            </form> 
        </>
    );


}