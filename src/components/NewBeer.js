import { useState } from "react";
import Header from "./Header";

function NewBeer() {

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setNewBeer(prevBeer => ({...prevBeer, [name]: value}))
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBeer)
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    console.log(newBeer)

    return(
        <>
            <Header />
            <div className="newBeerDiv">
                <form className="newBeerForm" onSubmit={handleSubmit}>
                    <div className="formElement">
                        <label>Name</label>
                        <input onChange={handleChange} value={newBeer.name} name="name" type="text"/>
                    </div>
                    <div className="formElement">
                        <label>Tagline</label>
                        <input onChange={handleChange} value={newBeer.tagline} name="tagline" type="text"/>
                    </div>
                    <div className="formElement descriptionForm">
                        <label>Description</label>
                        <textarea onChange={handleChange} value={newBeer.description} name="description" type="text" className="descriptionInput onChange={handleChange} value={newBeer.}"/>
                    </div>
                    <div className="formElement">
                        <label>First Brewed</label>
                        <input onChange={handleChange} value={newBeer.first_brewed} name="first_brewed" type="text"/>
                    </div>
                    <div className="formElement">
                        <label>Brewer's Tips</label>
                        <input onChange={handleChange} value={newBeer.brewers_tips} name="brewers_tips" type="text"/>
                    </div>
                    <div className="formElement">
                        <label>Attenuation Level</label>
                        <input onChange={handleChange} value={newBeer.attenuation_level} name="attenuation_level" type="number"/>
                    </div>
                    <div className="formElement">
                        <label>Contributed By</label>
                        <input onChange={handleChange} value={newBeer.contributed_by} name="contributed_by" type="text"/>
                    </div>
                    
                
                    <button className="addNewButton">ADD NEW</button>
                </form>
            </div>
        </>
    )
}

export default NewBeer;