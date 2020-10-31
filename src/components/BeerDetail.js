import React, { Component } from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'

class BeerDetail extends Component {

    
    state = {
        beer: {}
    }
    

    componentDidMount(){
        //let beerId = this.props.match.params.beerId
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h3 style={{color: 'gray'}}>In BeeR DeTAiL beer page</h3>
            </div>
        )
    }
}


export default BeerDetail
