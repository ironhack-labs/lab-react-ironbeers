import React from "react"


import Header from "../Header/Header"

const NewBeer = () => {

    return(
        <>
            <Header />
            <div className="newBeer">
                <form
                action="https://ih-beers-api2.herokuapp.com/beers/new"
                method="POST" >
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Tagline: </label>
                    <input type="text" name="tagline" />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" />
                </div>
                <div>
                    <label>First brewed: </label>
                    <input type="text" name="first_brewed" />
                </div>
                <div>
                    <label>Brewers tips: </label>
                    <input type="text" name="brewers_tips" />
                </div>
                <div>
                    <label>Attenuation level: </label>
                    <input type="number" name="attenuation_level" />
                </div>
                <div>
                    <label>Contributed by: </label>
                    <input type="text" name="contributed_by" />
                </div>

                <button type="submit">ADD NEW</button>
                </form>
            </div>
        </>
    )

}

export default NewBeer