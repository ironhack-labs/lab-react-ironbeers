import { Component } from 'react'
import React from 'react'
import BeersService from './../services/beers-service'
import BeersCard from './BeersCard'



class Beers extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,

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
                    {/* <Button onClick={() => this.setState({ modal: true })} variant="dark" style={{ marginBottom: '20px' }}>Crear nueva montaña</Button> */}

                    <article>
                        {this.state.beers.map(elm => <BeersCard key={elm.id} {...elm} />)}
                    </article>

                    {/*   <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Nueva Montaña rusa</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CoasterForm refreshCoasters={this.loadCoasters} closeModal={() => this.setState({ modal: false })} />
                        </Modal.Body>
                    </Modal> */}
                </>
                )
        )
    }
}

export default Beers