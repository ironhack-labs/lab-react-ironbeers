import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
let url = 'https://ironbeer-api.herokuapp.com/beers/all'

class Beers extends React.Component{
    state = {beers:[]}

    componentDidMount = () => {
        axios.get(url)
            .then(res =>{
                this.setState({beers:res.data})
               /*  console.log(this.state.beers) */

            })

    }

    render(){
        let {beers} = this.state
        if (beers === []) return <div></div>
        console.log(beers)
        return <div>
            {beers.map((beer, index)=>{
                return(
                    <div key={index}>
                            <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt="photobeer" height="100px"/>
                            <h4>{beer.name}</h4>
                            </Link>
                            <p>{beer.tagline}</p>
                            <p> <b>Created by: </b> {beer.contributed_by} </p>
                    </div>
                )
                

            })}


        </div>
    }

    


}

export default Beers