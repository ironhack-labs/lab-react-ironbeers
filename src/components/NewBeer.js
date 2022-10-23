import { useState } from "react";
import Header from "./Header"

function NewBeer({callbackToCreate}){
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [description, setDescription] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState("");
    const [contributed_by, setContributed_by] = useState("");

    

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            first_brewed: first_brewed,
            description: description,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }

        callbackToCreate(newBeer);

        //clear form
        setName("");
        setTagline("");
        setFirst_brewed("");
        setDescription("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");


    }
    return(
        <>
        <Header/>
        <form onSubmit={handleFormSubmit}>

                <input 
                    type="text"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

                <input 
                    type="text"
                    name="tagline"
                    placeholder="enter tagline"
                    value={tagline}
                    onChange={(e) => { setTagline(e.target.value) }}
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                />

                <input 
                    type="text"
                    name="first_brewed"
                    placeholder="first brewed"
                    value={first_brewed}
                    onChange={(e) => { setFirst_brewed(e.target.value) }}
                />

                <input 
                    type="text"
                    name="brewers_tips"
                    placeholder="brewers_tips"
                    value={brewers_tips}
                    onChange={(e) => { setBrewers_tips(e.target.value) }}
                />

                <input 
                    type="number"
                    name="attenuation_level"
                    placeholder="attenuation_level"
                    min={0}
                    max={2000}
                    value={attenuation_level}
                    onChange={(e) => { setAttenuation_level(e.target.value) }}
                />

                <input 
                    type="text"
                    name="contributed_by"
                    placeholder="contributed_by"
                    value={contributed_by}
                    onChange={(e) => { setContributed_by(e.target.value) }}
                />

                <button >Create new beer</button>
            </form>
        </>
    )
}

export default NewBeer 