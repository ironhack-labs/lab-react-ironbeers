import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BeersService from './../../services/beers.service'

class ListBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.BeersService = new BeersService()
    }

    loadBeers = () => {
        this.BeersService
            .getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadBeers()
    }


    render() {

        return (

            !this.state.beers
                ?
                <h3>CARGANDO...</h3>
                :
                (<>
                    <Link to="/">Home</Link>

                    {/* <Button onClick={() => this.setState({ modal: true })} variant="dark" style={{ marginBottom: '20px' }}>Crear nueva montaña</Button> */}

                    <div>
                        {this.state.beers.map(elm =>
                            <div className="beer-card" key={elm._id}>
                                <img src={elm.image_url} alt={elm.name}></img>
                                <div>
                                    <h1>{elm.name}</h1>
                                    <Link to={`/cervezas/detalle/${elm._id}`}>Ver detalles</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* <CoasterForm refreshCoasters={this.loadBeers} closeModal={() => this.setState({ modal: false })} /> */}

                </>
                )
        )
    }
}

export default ListBeers