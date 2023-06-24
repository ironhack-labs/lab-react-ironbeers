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

                <p>
                    <label>Name:<br/>
                        <input value={name} type="text" onChange={e => setName(e.target.value)} required />
                    </label>
                </p>
                <p>
                    <label>Tagline:<br/>
                        <input value={tagline} type="text" onChange={e => setTagline(e.target.value)} required />
                    </label>
                </p>
                <p>
                    <label>Description:<br/>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
                    </label>
                </p>
                <p>
                    <label>First Brewed:<br/>
                        <input value={first_brewed} type="text" onChange={e => setFirst_brewed(e.target.value)} required />
                    </label>
                </p>
                <p>
                    <label>Brewers tips:<br/>
                        <input value={brewers_tips} type="text" onChange={e => setBrewers_tips(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>Attenuation level:<br/>
                        <input value={attenuation_level} type="number" onChange={e => setAttenuation_level(e.target.value)} required min={0} max={100} />
                    </label>
                </p>
                <p>
                    <label>Contributed by:<br/>
                        <input value={contributed_by} type="text" onChange={e => setContributed_by(e.target.value)} required />
                    </label>
                </p>

                <button>Create</button>
            </form>

            </div>
        </>
    )
}