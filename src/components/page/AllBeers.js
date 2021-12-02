import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Container} from 'react-bootstrap'
import BeerService from '../../services/beersService';
import './BeerCard.css'

class AllBeers extends Component {

    constructor() {
        super()
    
        this.state = {
         beers: []
        }
    
        this.service = new BeerService()
      }

      componentDidMount() {
        this.service.getAllBeers()
        .then((response) => {
            this.setState({
            beers: response.data
          })
      })

    }
    
    render() {
     return (
        <div>

            {this.state.beers?.map((elm) => {
            
            return (
                    
                    
                        <Card className="beer-card" style={{ width: '18rem' }}>
                        <Link to={`${elm._id}`} ><Card.Img className="img" variant="top" src={elm.image_url}/></Link>
                            <Card.Body>
                                <Card.Title>{elm.name}</Card.Title>
                                <Card.Text>
                                {elm.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
            )
            }
            
            )}

        </div>  
            
        )
        
     }
}


export default AllBeers