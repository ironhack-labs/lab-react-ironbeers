import React, { Component } from 'react'
import beerApi from '../api/beerApi.js'

class CreateBeer extends Component {

    state = {
        // newBeer: {}
    }


    handleChange = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        console.log(key, value)
        this.setState({
           [key]:value
        });
        // let body = {[key]:value}

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log([...e.target.querySelectorAll("input")].map(val=>val.value))
        // const targets = [...]
        // e.target.map((elem) => {
        //     console.log(elem.value)
        console.log("toto", this.state)
        // })
        beerApi
            .postNewBeer(this.state)
            .then((apiRes) => {
                console.log(apiRes)
            })
            .catch((err) => {console.log(err)})
    }


    //     beerApi
    //     .postNewBeer()
    //     .then((apiRes) => {
    //         console.log(apiRes.data);
    //         this.setState({
    //             beer: apiRes.data
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // 


    render() {
        // console.log(body)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="input" id="name" onChange={this.handleChange} name="name"/><br />

                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" className="input" id="tagline" onChange={this.handleChange} name="tagline"/><br />

                    <label htmlFor="description">Description</label>
                    <input type="text" className="input" id="description" onChange={this.handleChange} name="description"/><br />

                    <label htmlFor="firstBrewed">first Brewed</label>
                    <input type="text" className="input" id="firstBrewed" onChange={this.handleChange} name="first_brewed"/><br />

                    <label htmlFor="tip">Brewers Tip</label>
                    <input type="text" className="input" id="tip" onChange={this.handleChange} name="brewers_tips"/><br />

                    <label htmlFor="attenuation">Attenuation Level</label>
                    <input type="number" className="input" id="attenuation" onChange={this.handleChange} name="attenuation_level"/><br />

                    <label htmlFor="contribute">Contributed by</label>
                    <input type="text" className="input" id="contribute" onChange={this.handleChange} name="contributed_by"/><br />

                    <button>Create New Beer</button>


                </form>
            </div>
        )
    }
}


export default CreateBeer
