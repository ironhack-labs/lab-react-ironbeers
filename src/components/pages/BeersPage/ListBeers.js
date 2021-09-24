import React, { Component } from 'react'
import BeersService from '../../../services/beers.service';
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';



export default class ListBeers extends Component {
    constructor(){
        super();
        this.state = {
            beers: null,

        }
        this.beersService = new BeersService();
    }

   refreshBeers = () => {
       this.beersService.getBeers()
       .then(res =>{
           this.setState({
                beers: res.data
           })
       })
       .catch(err=>console.error(err))
   } 

   componentDidMount(){
       this.refreshBeers()
   }

        displayBeers = () => {

        return (
            this.state.beers?
                this.state.beers.map(beer => {
                    return (
                        <div>
                               
                                <Link to={`/${beer._id}`}>


                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={beer.image_url}/>
                                <Card.Body>
                                    <Card.Title>{beer.name}</Card.Title>
                                </Card.Body>
                                </Card>
                                
                                </Link>
                        </div>
                    )
                }) :
                <p>Loading...</p>
        )
    }
    render(){

        return (
            <div>
                {this.displayBeers()}
            </div>
        )
    }
}
