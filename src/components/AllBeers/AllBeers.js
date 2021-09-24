import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeerService from '../../services/beer.services'
import React, { Component } from 'react'

export default class AllBeers extends Component {
    constructor() {
        super();
        this.beerService = new BeerService();

        this.state = {
            beers: []
        }
    }

    componentDidMount(){
        this.beerService.getBeer()
        .then(res => {
        this.setState({
          ...this.state,
          beers: res.data
        })
      })
      .catch(err => console.error(err))
  }
    

    render() {
        return (
            <div>
                 <Container>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                            </svg></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <div>
                    {this.state.beers.map(e => 
                        <Link className='link' key={`${e._id}`} to={`/beers/${e._id}`}>
                            <img src={e.image_url} alt={e.name} />
                            <h3>{e.name}</h3>
                            <p>{e.tagline}</p>
                            <p>{e.contributed_by}</p>
                        </Link>)}
                        <br/>
                        <hr/>
                    </div>
                </Container>
            </div>
        )
    }
}




