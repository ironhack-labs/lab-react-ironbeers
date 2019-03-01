import React from 'react'
import axios from 'axios'
let url = "https://ironbeer-api.herokuapp.com/beers/new"


class NewBeer extends React.Component{
    state = {
        newBeer:{},
        error:""
    }


    handleChange = (e) =>{
        let{ newBeer, error } = this.state
        newBeer[e.target.name] = e.target.value
        error=""
        if(newBeer.attenuation_level < 1) {error="Level has to be larger than one"}
        this.setState({newBeer, error})

    }

    sendToServer = () => {
        let{newBeer, error} = this.state
        if(error !== "") return
        axios.post(url, newBeer)
            .then(res=> this.props.history.push('/beers'))
            .catch(e => console.log(e))
    }

    render(){
        return <div>
            <input onChange={this.handleChange} placeholder="Name" name="name" type="text"/>
            <input onChange={this.handleChange} placeholder="Tagline" name="tagline" type="text"/>
            <input onChange={this.handleChange} placeholder="Description" name="description" type="text"/>
            <input onChange={this.handleChange} placeholder="First Brewed" name="first_brewed" type="text"/>
            <input onChange={this.handleChange} placeholder="Brewers Tips" name="brewers_tips" type="text"/>
            <input onChange={this.handleChange} placeholder="Attenuation Level" name="attenuation_level" type="number"/>
            <input onChange={this.handleChange} placeholder="Contributed by" name="contributed_by" type="text"/>
            <p style={{color:"red"}}>{this.state.error}</p>
            <button onClick={this.sendToServer}> Add new beer</button>
        </div>
    }


}


export default NewBeer