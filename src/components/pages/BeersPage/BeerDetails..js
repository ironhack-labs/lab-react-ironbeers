import React, { Component } from 'react'
import BeersService from '../../../services/beers.service';

export default class BeerDetails extends Component {

    constructor(){
        super();
        this.state = {
            beers: null,
        }
        this.beersService = new BeersService();
    }

    
       refreshBeer = () => {

        const {id} = this.props.match.params

       this.beersService.getOneBeer(id)
       .then(res =>{
           this.setState({
                beers: res.data
           })
       })
       .catch(err=>console.error(err))
   }     
   componentDidMount(){
       this.refreshBeer()
   }
   
    
    render() {

        return (
            <div>
                
            </div>
        )
    }
}
