import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Beer extends React.Component{

    componentDidMount(){
        let id = this.props.match.params.id
        Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((res)=>{
                console.log(res)
                this.setState({
                    beer : res.data
                })
            })
    }

    state = {
        beer : []
    }

    render(){
        return(
            <>
            <Link to='/'>Home Page</Link>
             <div>
                <h1>{this.state.beer.name}</h1>     
                <img alt='' src={this.state.beer.image_url}/>
                <p>{this.state.beer.description}</p>
                <p>Created by : {this.state.beer.contributed_by}</p>
            </div>
            </>
        )
    }

}