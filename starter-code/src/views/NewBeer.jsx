import React, { Component } from 'react'

export default class NewBeer extends Component {

    state = {
        APIurl: "https://ih-beers-api2.herokuapp.com/beers/new"
    }


    render() {
        return (
            <div id="form-div">
                <h2>Add a new beer</h2>
                <form action={this.state.APIurl} method="post">

                    <div>
                        {/* <label className="label-form">Name</label> */}
                        <input className="input-form" type="text" name="name" placeholder="Name"></input>
                    </div>

                    <div>
                        {/* <label className="label-form">Tagline</label> */}
                        <input className="input-form" type="text" name="tagline" placeholder="Tagline"></input>
                    </div>

                    <div>
                        <textarea className="text-form" name="description" placeholder="Add a description here..."></textarea>
                    </div>

                    <div>
                        {/* <label className="label-form">First Brewed</label> */}
                        <input className="input-form" type="text" name="first_brewed" placeholder="First brewed"></input>
                    </div>

                    <div>
                        {/* <label className="label-form">Brewers Tips</label> */}
                        <input className="input-form" type="text" name="brewers_tips" placeholder="Brewers tips"></input>
                    </div>

                    <div>
                        {/* <label className="label-form">Attenuation Level</label> */}
                        <input className="input-form" type="number" name="attenuation_level" placeholder="Attenuation level"></input>
                    </div>

                    <div>
                        {/* <label className="label-form">Contributed by</label> */}
                        <input className="input-form" type="text" name="contributed_by" placeholder="Contributed by"></input>
                    </div>

                    <button id="btn-form" type="submit">Let's go!</button>

                </form>
            </div>
        )
    }
}
