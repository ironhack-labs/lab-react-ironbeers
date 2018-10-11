import React, {Component} from 'react'
import axios from 'axios'


const url = 'https://ironbeer-api.herokuapp.com/beers/all'

class Beers extends Component {

    state ={
        beers:[]
    }

    componentWillMount (){
        const {beers} = this.state
        axios.get(url)
            .then( res=> {
                console.log(res)
                this.setState({beers})
            })
    }


    render (){
        const {beers} = this.state
        return(
            <div>
             {beers.name}   
            </div>
        )
    }
}


export default Beers