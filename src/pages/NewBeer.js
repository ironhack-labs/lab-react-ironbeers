import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");

    const createBeer = e => {
        e.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API_URL}/beers/new`,
         { name, tagline, description, first_brewed, brewers_tips,
           attenuation_level, contributed_by,            
        })
        .then((response)=>{
            console.log("Created successfully!", response.data);
            navigate("/")
        })
        .catch((e)=>{console.log(e)})
    }

    return(
        <>
            <Header />

            <div id="create-beer">

            <form onSubmit={createBeer}>

                <label>Name:
                    <input value={name} type="text" onChange={e => setName(e.target.value)} required />
                </label>
                <label>Tagline:
                    <input value={tagline} type="text" onChange={e => setTagline(e.target.value)} required />
                </label>
                <label>Description:
                    <input value={description} type="text" onChange={e => setDescription(e.target.value)} required />
                </label>
                <label>First Brewed:
                    <input value={first_brewed} type="text" onChange={e => setFirst_brewed(e.target.value)} required />
                </label>
                <label>Brewers tips:
                    <input value={brewers_tips} type="text" onChange={e => setBrewers_tips(e.target.value)} />
                </label>
                <label>Attenuation level:
                    <input value={attenuation_level} type="number" onChange={e => setAttenuation_level(e.target.value)} required min={0} max={100} />
                </label>
                <label>Contributed by:
                    <input value={contributed_by} type="text" onChange={e => setContributed_by(e.target.value)} required />
                </label>

                <button>Create</button>

            </form>

            </div>
        </>
    )
}