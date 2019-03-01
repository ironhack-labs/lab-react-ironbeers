import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const endpoint = 'https://ironbeer-api.herokuapp.com/beers/random'

class RandomBeer extends React.Component{
    state={
        beer:{}
    }

    componentDidMount(){
        this.getBeer()
    }
    getBeer = e=>{
        axios.get(endpoint)
        
        .then(result=>{
            this.setState({beer:result.data[0]})
            console.log(this.state)

        })
        .catch(e=>console.log(e))
    }
    render(){
        const {beer} = this.state
        if (beer.length  === 0) return <div>Loading...</div>
        console.log(this.state.beer)
        return(
            <div className="beer-container">
                <div className="beer-card">
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt="" height="200" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                </div>
                <div>
                <button><Link to="/">Back</Link></button>
                </div>

            </div>
        )
    }
}
export default RandomBeer