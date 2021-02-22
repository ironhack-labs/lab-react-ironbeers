import React from 'react';
import axios from 'axios';

let initialState = {
    name: "", 
    tagline: "", 
    description: "", 
    first_brewed: "", 
    brewers_tips: "", 
    attenuation_level: "", 
    contributed_by: "" 
}

function NewBeer() {
    const style = {color: 'green'}

    const [form, setForm] = React.useState(initialState)
    const [message, setMessage] = React.useState("")

    const handleChange = (e) => {
        const {value, name} = e.target
        console.log("value", value)
        setForm(state=> ({
            ...state, 
            [name] : value
        })) 
    }
    console.log("form", form)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {...form})
            .then(res=>{
                console.log(res);
                if(res.status === 200) {
                    setMessage(res.data.message)
                } else {
                    setMessage("Error when creating a beer")
                }
            })

        setForm(initialState)
    }

    return (
        <div>
            <h1>Create new beer</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">

                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"  
                                className="form-control"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="col">
                            <label htmlFor="tagline">Tagline</label>
                            <input 
                                type="text"  
                                className="form-control"
                                name="tagline"
                                value={form.tagline}
                                onChange={handleChange}
                                />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="description">Description</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="col">
                            <label htmlFor="first_brewed">First brewed</label>
                            <input 
                                type="text"  
                                className="form-control"
                                name="first_brewed"
                                value={form.first_brewed}
                                onChange={handleChange}
                                />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="brewers_tips">Brewer tips</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="brewers_tips"
                                value={form.brewers_tips}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="col">
                            <label htmlFor="attenuation_level">Attenuation level</label>
                            <input 
                                type="number"  
                                className="form-control"
                                name="attenuation_level"
                                value={form.attenuation_level}
                                onChange={handleChange}
                                />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="contributed_by">Contributed by</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="contributed_by"
                                value={form.contributed_by}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
            <p style={style}>{message}</p>
        </div>
    )
}
export default NewBeer;

// attenuation_level: 77
// brewers_tips: "Be as accurate as possible when weighing out your malts to ensure you strike the right balance."
// contributed_by: "Sam Mason <samjbmason>"
// description: "Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn."
// first_brewed: "12/2015"
// name: "Arcade Nation"
// tagline: "Seasonal Black IPA."
// _id: "5fb6a86265b9c209606e10ed"