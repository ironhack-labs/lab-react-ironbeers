import React, { Component } from 'react'
import '../Components/Beer.css'
import Beer from '../Components/Beer'
import axios from 'axios';
export default class Randombeer extends Component {
    state = {
        isLoading:true, data:null
    }

    componentDidMount = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((responseBack) => {
          console.log('reponseback', responseBack.data);
          this.setState({ isLoading: false, data: responseBack.data });
        });
    }


    render() {
        if(this.state.isLoading){return (<div>Loading . . .</div>)}
        return (
         <div>
           
                <Beer state={this.state}/>
         </div>
        )
    }
}