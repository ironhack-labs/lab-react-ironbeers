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
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" value={this.state.name} onChange={e=>{this.handleChange(e)}} />
                </div>
                <div className="form-group">
                <label htmlFor="tagline">TagLine:</label>
                <input  className="form-control" type="text" name="tagline" value={this.state.tagline} onChange={e=>{this.handleChange(e)}} />
                </div>
                <div className="form-group">
                <label htmlFor="description">Descripción del proyecto:</label>
                <textarea className="form-control" name="description" id="description" value={this.state.description} onChange={e => { this.handleChange(e) }}  cols="30" rows="10"></textarea>
                </div >
                <div className="form-group">
                <label htmlFor="first_brewed">First brewed:</label>
                <input  className="form-control" type="text" name="first_brewed" value={this.state.first_brewed} onChange={e=>{this.handleChange(e)}} />
                </div>
                <div className="form-group">
                <label htmlFor="brewers_tips">Brewers tips:</label>
                <input  className="form-control" type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e=>{this.handleChange(e)}} />
                </div>
                <div className="form-group">
                <label htmlFor="attenuation_level">Attenuation level:</label>
                <input  className="form-control" type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={e=>{this.handleChange(e)}} />
                </div>
                <div className="form-group">
                <label htmlFor="contributed_by">Contributed by:</label>
                <input  className="form-control" type="text" name="contributed_by" value={this.state.contributed_by} onChange={e=>{this.handleChange(e)}} />
                </div>
                <input className="btn btn-primary mb-2" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddBeer;