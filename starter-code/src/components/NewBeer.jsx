import React, { Component, Fragment } from 'react';
import axios from 'axios'

class NewBeer extends Component {

    state = {
        name: '',
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tip: "",
        attenuation_level: 0,
        contributed_by: ""
    }


    // submitForm = () => {
    //     e.preventDefault()

    // }

    setItem = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitForm = (e) => {
        e.preventDefault()

        axios.post('https://ih-beer-api.herokuapp.com/beers/new',

            {
                name: this.state.name,
                tagline: this.state.tagline,
                description: this.state.description,
                first_brewed: this.state.first_brewed,
                brewers_tip: this.state.brewers_tip,
                attenuation_level: this.state.attenuation_level,
                contributed_by: this.state.contributed_by
            })
            .then(console.log("clicked"))
    }

    render() {
        return (
            <Fragment>
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 className="text-center">New Beer</h1>
                                <form onSubmit={this.submitForm}>
                                    <label for="name">NAME</label>
                                    <input className="form-control" onChange={this.setItem} type="text" name="name" autoComplete="off" required />
                                    <label for="tagline">TAGLINE</label>
                                    <input className="form-control" onChange={this.setItem} type="text" name="tagline" autoComplete="off" required />
                                    <label for="description">DESCRIPTION</label>
                                    <input className="form-control" onChange={this.setItem} type="text" name="description" autoComplete="off" required />
                                    <label for="first_brewed">FIRST BREWED</label>
                                    <input className="form-control" onChange={this.setItem} type="text" name="first_brewed" autoComplete="off" required />
                                    <label for="brewers_tips">BREWERS TIPS</label>
                                    <input className="form-control" onChange={this.setItem} type="text" name="brewers_tips" autoComplete="off" required />
                                    <label for="attenuation_level">ATTENUATION LEVEL</label>
                                    <input className="form-control" onChange={this.setItem} type="Number" name="attenuation_level" autoComplete="off" required />
                                    <label for="contributed_by">CONTRIBUTED BY</label>
                                    <input className="form-control" onChange={this.setItem} type="text" name="contributed_by" autoComplete="off" required />
                                    <br></br>
                                    <button type="submit" className="text-center btn btn-primary">SUBMIT</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewBeer;
