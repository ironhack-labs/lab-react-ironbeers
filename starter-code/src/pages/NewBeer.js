import React, { Component } from 'react'
import Header from '../components/Header'
import Axios from 'axios'
import './newBeer.css'

export default class NewBeer extends Component {
    state = {
        beer: { 
            image_url:'prueba',
            name:'prueba',
            tagline:'prueba',
            first_brewed:'prueba',
            attenuation_level:'prueba',
            description:'prueba',
            contributed_by:'prueba' 
        }
    }

    handleChange = (e) =>{
        const {target: {name, value}} = e
        this.setState({beer:{[name]: value}})
    }

    saveBeer = async (e)=>{
        e.preventDefault()
        await Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { 
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewers_tips: '',
            attenuation_level:0,
            contributed_by:'',
        })
        .catch(e => console.log(e))
        
    }
    render() {
        const { image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = this.state.beer
        return (
            <div className="containerNew">
                <Header />
                <label>image_url</label>
                <input placeholder='image_url' name="image_url"  onChange={this.handleChange} />
                <label>name</label>
                <input placeholder='name' name="name"  onChange={this.handleChange} />
                <label>tagline</label>
                <input placeholder='tagline' name="tagline"  onChange={this.handleChange} />
                <label>first_brewed</label>
                <input placeholder='first_brewed' name="first_brewed"  onChange={this.handleChange} />
                <label>attenuation_level</label>
                <input placeholder='attenuation_level' name="attenuation_level"  onChange={this.handleChange} type="number" />
                <label>description</label>
                <input placeholder='description' name="description"  onChange={this.handleChange} />
                <label>contributed_by</label>
                <input placeholder='contributed_by' name="contributed_by"  onChange={this.handleChange} />
                <button onClick={this.saveBeer}>Create</button>
            </div>
        )
    }
}
