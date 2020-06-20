import React from 'react'
import axios from 'axios'
export default class NewBeer extends React.Component{
    addBeer = (e) =>{
        e.preventDefault()
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = e.target
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
             name: name.value,
             tagline: tagline.value,
             description: description.value,
             first_brewed: first_brewed.value,
             brewers_tips: brewers_tips.value,
             attenuation_level: attenuation_level.value,
             contributed_by: contributed_by.value
        })
            .then( ({data}) => {console.log(data); this.props.history.push("/")})
    }
    render(){
        return(
            <>
            <form onSubmit={this.addBeer}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="tagline">tagline</label>
                    <input type="text" className="form-control" name="tagline" id="tagline" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name="description" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="first_brewed">first brewed</label>
                    <input type="text" className="form-control" name="first_brewed" id="first_brewed" />
                </div>
                <div className="form-group">
                    <label htmlFor="brewers_tips">brewers tips</label>
                    <input type="text" className="form-control" name="brewers_tips" id="brewers_tips" />
                </div>
                <div className="form-group">
                    <label htmlFor="attenuation_level">attenuation level</label>
                    <input type="number" className="form-control" name="attenuation_level" id="attenuation_level" />
                </div>
                <div className="form-group">
                    <label htmlFor="contributed_by">your name</label>
                    <input type="text" className="form-control" name="contributed_by" id="contributed_by" />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
        )
    }
}