import React, {Component} from 'react'
import beerService from '../service/beerService'
import {Link} from 'react-router-dom'


class AddNewBeer extends Component{
    constructor(){
        super()
        this.state={beer:{
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewers_tips:'',
            attenuation_level:0,
            contributed_by:''
        }}

        this.services=new beerService()        
    
    }

    

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }



    handleFormSubmit = e => {
        e.preventDefault()
        this.services.addNewBeer(this.state)
            .then(theBeer=> console.log(theBeer))
            .catch(err=> console.log('Error:', err))
        this.setState({
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewers_tips:'',
            attenuation_level:0,
            contributed_by:''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>name: <input type="text" name='name' value={this.state.name} onChange={(e) => this.handleChange(e)}/> </label> <br/><br/>
                    <label>tagline: <input type="text" name='tagline' value={this.state.tagline} onChange={(e) => this.handleChange(e)}/> </label><br/><br/>
                    <label>description: <input type="text" name='description' value={this.state.description} onChange={(e) => this.handleChange(e)}/> </label><br/><br/>
                    <label>first_brewed: <input type="text" name='first_brewed' value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}/> </label><br/><br/>
                    <label>brewers_tips: <input type="text" name='brewers_tips' value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)}/> </label><br/><br/>
                    <label>attenuation_level: <input type="number" name='attenuation_level' value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)}/> </label><br/><br/>
                    <label>contributed_by: <input type="text" name='contributed_by' value={this.state.contributed_by} onChange={(e) => this.handleChange(e)}/> </label>
                    <button type='submit'>Añadir</button>
                </form>
                <Link to='/'>Volver a inicio</Link>
                
            </div>
        )
    }
}


export default AddNewBeer