import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"

export default function BeerForm(){
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewerTips, setBrewerTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewer_tips: brewerTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        };

        axios.post(`${process.env.REACT_APP_APIURL}/new"`, newBeer)
            .then(() => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewerTips("");
                setAttenuationLevel(0);
                setContributedBy("");

                navigate("/beers");
            })
            .catch((err) => {console.error(err)});
    };


    return(
        <>

            <Header />

            <h1>Create a New Beer</h1>

            <form onSubmit={handleSubmit}>                
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => {setName(e.target.value)}}/>
                </label>
                <label>
                    Tagline:
                    <input type="text" value={tagline} onChange={e => {setTagline(e.target.value)}}/>
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={e => {setDescription(e.target.value)}}/>
                </label>
                <label>
                    First Brewed:
                    <input type="text" value={firstBrewed} onChange={e => {setFirstBrewed(e.target.value)}}/>
                </label>
                <label>
                    Brewer Tips:
                    <input type="text" value={brewerTips} onChange={e => {setBrewerTips(e.target.value)}}/>
                </label>
                <label>
                    Attenuation Level:
                    <input type="number" value={attenuationLevel} onChange={e => {setAttenuationLevel(e.target.value)}}/>
                </label>
                <label>
                    Contributed By:
                    <input type="text" value={contributedBy} onChange={e => {setContributedBy(e.target.value)}}/>
                </label>

                <button>Create</button>
            </form>
        </>
    );
}