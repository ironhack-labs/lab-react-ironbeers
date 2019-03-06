import React, {Component} from 'react';

class AddBeer extends Component{
    state = {name:"", tagline:"" , description: "", first_brewed:"", brewers_tips:"", attenuation_level:"", contributed_by:""};

    handleFormSubmit = event =>{
        event.preventDefault(); 
        const name= this.state.name;
        const tagline= this.state.tagline;
        const description= this.state.description;
        const first_brewed= this.state.first_brewed;
        const brewers_tips= this.state.brewers_tips;
        const attenuation_level= this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;
        const data = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: Number(attenuation_level),
            contributed_by: contributed_by
        }
        const options ={
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        } 
        fetch("https://ironbeer-api.herokuapp.com/beers/new",options)
        .then(()=>{
            alert("Se agregó la nueva cerveza "+ name);
            this.setState({name:"", tagline:"" , description: "", first_brewed:"", brewers_tips:"", attenuation_level:"", contributed_by:""})
        })
        .catch(err=> console.log(err))
    }

    handleChange = event=>{
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={e=>{this.handleChange(e)}} />
                <label htmlFor="tagline">TagLine:</label>
                <input type="text" name="tagline" value={this.state.tagline} onChange={e=>{this.handleChange(e)}} />
                <label htmlFor="description">Descripción del proyecto:</label>
                <textarea name="description" id="description" value={this.state.description} onChange={e => { this.handleChange(e) }}  cols="30" rows="10"></textarea>
                <label htmlFor="first_brewed">First brewed:</label>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={e=>{this.handleChange(e)}} />
                <label htmlFor="brewers_tips">Brewers tips:</label>
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e=>{this.handleChange(e)}} />
                <label htmlFor="attenuation_level">Attenuation level:</label>
                <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={e=>{this.handleChange(e)}} />
                <label htmlFor="contributed_by">Contributed by:</label>
                <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={e=>{this.handleChange(e)}} />
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddBeer;