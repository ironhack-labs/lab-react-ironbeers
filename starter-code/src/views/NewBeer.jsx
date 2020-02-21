import React from 'react'
import NavMain from "./../components/NavMain";



export default function NewBeer() {
    return (
        <React.Fragment>
        <NavMain />
        <form
            id="newBeer"
            className="form"
            action="https://ih-beers-api2.herokuapp.com/beers/new"
            method="post"
        >

            <div className="content">
                <h1 className="title">Basic Information</h1>
                <p>name</p>
                <input
                    type="text"
                    name="name"
                    className="input"
                />
                <p>tagline</p>
                <input
                    type="text"
                    name="tagline"
                    className="input"
                />
                <p>description</p>
                <input
                    type="text"
                    name="description"
                    className="input"
                />
                <p>first_brewed</p>
                <input
                    type="text"
                    name="first_brewed"
                    className="input"
                />
                <p>brewers_tips</p>
                <input
                    type="text"
                    name="brewers_tips"
                    className="input"
                />
                <p>attenuation_level</p>
                <input
                    type="number"
                    name="attenuation_level"
                    className="input"
                />
                <p>contributed_by</p>
                <input
                    type="text"
                    name="contributed_by"
                    className="input"
                />
                <div>
                    <button className="btn" type="submit">ADD NEW</button>
                </div>
            </div>
        </form>
    </React.Fragment>
    )
}

