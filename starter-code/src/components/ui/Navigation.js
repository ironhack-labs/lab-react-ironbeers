import React, { Component } from 'react'
import './Navigation.css'
import Services from '../../services/beers.services'
import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.services = new Services()
    }

    render() {

        return (
            <div className='list-group home'>

                <Link to="/beers">
                    <img src="../../../images/beers.png" alt="Beers img" />
                    <h2>Todas las cervezas</h2>
                    <p>Lista de todas las cervezas, si llegas a la mitad sin tener un coma etílico eres mi nuevo héroe!</p>
                </Link>
                <Link to="/beers/random">
                    <img src="../../../images/random-beer.png" alt="Beers img" />
                    <h2>Cerveza aleatoria</h2>
                    <p>Escoge tu cerveza aleatoria para que la pruebes este viernes merluzo!</p>
                </Link>
                <Link to="/new">
                    <img src="../../../images/new-beer.png" alt="Beers img" />
                    <h2>Crear cerveza</h2>
                    <p>Crea tu cerveza propia borrachuzo!</p>
                </Link>
            </div>

        )
    }
}

export default Navigation