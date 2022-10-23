import NewBeerImage from "../assets/new-beer.png"
import Header from "./Header"
import { useState } from "react";


function NewBeer({ callbackToCreate }) {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState("");
    const [contributed_by, setContributed_by] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();


        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }

        callbackToCreate(newBeer);

        //clear form
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");
    }

    return (
        <>
            <Header />
            <img src={NewBeerImage} alt="New Beer" />
            <h1>New Beer</h1>

            <div className="NewBeer">
                <form onSubmit={handleFormSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="enter the name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    <input
                        type="text"
                        name="tagline"
                        placeholder="enter the tagline"
                        value={tagline}
                        onChange={(e) => { setTagline(e.target.value) }}
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="enter the description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />

                    <input
                        type="text"
                        name="first_brewed"
                        placeholder="enter the first brewed date"
                        value={first_brewed}
                        onChange={(e) => { setFirst_brewed(e.target.value) }}
                    />

                    <input
                        type="text"
                        name="brewers_tips"
                        placeholder="enter brewers tips"
                        value={brewers_tips}
                        onChange={(e) => { setBrewers_tips(e.target.value) }}
                    />

                    <input
                        type="number"
                        name="attenuation_level"
                        placeholder="99"
                        min={0}
                        max={100}
                        value={attenuation_level}
                        onChange={(e) => { setAttenuation_level(e.target.value) }}
                    />

                    <input
                        type="text"
                        name="contributed_by"
                        placeholder="enter the contributor"
                        value={contributed_by}
                        onChange={(e) => { setContributed_by(e.target.value) }}
                    />

                    <button>Create new beer</button>
                </form>
            </div>
        </>
    );
}

export default NewBeer;