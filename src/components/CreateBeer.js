import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBeer(){

    const [ name , setname  ] = useState('');
    const [ tagline , settagline  ] = useState('');
    const [ description, setdescription ] = useState('');
    const [ first_brewed , setfirst_brewed  ] = useState('');
    const [ brewers_tips , setbrewers_tips  ] = useState('');
    const [ attenuation_level, setattenuation_level ] = useState('');
    const [ contributed_by , setcontributed_by  ] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }

        axios
        .post(`${process.env.REACT_APP_API_URL}/new`, newBeer)
        .then((response) => {
            navigate('/beers')
            console.log('success');
        })
        .catch(e => e)
    }

    return(
        <div>
            <h1>Create new Beer</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e)=>{
                        setname(e.target.value)
                    }}
                    />
                </label>
                <br></br>
                <label>
                    Tagline:
                    <input
                    type="text"
                    name="tagline"
                    value={tagline}
                    onChange={(e)=>{
                        settagline(e.target.value)
                    }}
                    />
                </label>
                <br></br>
                <label>
                    Description:
                    <input
                    type="text"
                    name="description "
                    value={description }
                    onChange={(e)=>{
                        setdescription (e.target.value)
                    }}
                    />
                </label>
                <br></br>
                <label>
                    First time Brewed:
                    <input
                    type="text"
                    name="first_brewed "
                    value={first_brewed }
                    onChange={(e)=>{
                        setfirst_brewed (e.target.value)
                    }}
                    />
                </label>
                <br></br>
                <label>
                    Tips for Brewers:
                    <input
                    type="text"
                    name="brewers_tips "
                    value={brewers_tips }
                    onChange={(e)=>{
                        setbrewers_tips (e.target.value)
                    }}
                    />
                </label>
                <br></br>
                <label>
                    Attenuation level:
                    <input
                    type="number"
                    name="attenuation_level "
                    value={attenuation_level }
                    onChange={(e)=>{
                        setattenuation_level (e.target.value)
                    }}
                    />
                </label>
                <br></br>
                <label>
                    Contributed by:
                    <input
                    type="text"
                    name="contributed_by "
                    value={contributed_by }
                    onChange={(e)=>{
                        setcontributed_by (e.target.value)
                    }}
                    />
                </label>
                <br></br>

                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateBeer;