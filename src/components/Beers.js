import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Beers extends React.Component{

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    beers : res.data
                })
            })
    }
    state = {
        beers : []
    }
    render(){
        return(
            <>
                <Link to='/'>Home Page</Link>
                {
                    this.state.beers.map((beer,index)=>{
                        return (
                            <Link key={index} to={`/beers/${beer._id}`}><div key={index}>
                            <h1>{beer.name}</h1>
                            <img src={beer.image_url} alt=''/>
                            <p>Tagline: {beer.tagline}</p>
                            <p>Created By: {beer.contributed_by}</p>
                            </div>
                            </Link>
                        )
                    })
                }
            </>
        )
    }
}