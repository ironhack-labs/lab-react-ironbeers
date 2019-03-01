import React from 'react'
import axios from 'axios'
let endpoint = "https://ironbeer-api.herokuapp.com/beers/random"

class DetailRandomBeer extends React.Component{
    state = {
        beer:{}
    }

    componentDidMount = () =>{
        axios.get(endpoint)
            .then(res =>{
                this.setState({beer:res.data[0]})
            })   
    }
    componentWillReceiveProps = () =>{
        axios.get(endpoint)
            .then(res =>{
                this.setState({beer:res.data[0]})
            })   
    }


    render(){
        let {name,image_url, tagline, description,  first_brewed, attenuation_level,contributed_by} = this.state.beer
        return(
        <div>
        <img src={image_url} alt="" height="300"/>
        <p><b>{name}</b> {attenuation_level}</p>
        <p>{tagline} <b>{first_brewed}</b></p>
        <p>{description}</p>
        <p>{contributed_by}</p>

        </div>
        )

    }
    
    
}


export default DetailRandomBeer