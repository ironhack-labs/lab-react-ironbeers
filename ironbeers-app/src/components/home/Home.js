import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './Home.css'

class Home extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ allBeers: data }))
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img className="img-estrella" src={'https://imaxe.com/wp-content/uploads/2018/07/imaxe_estrella_galicia_recorrido-uai-1600x900.jpg'} alt="beer" />
                            <Link to="/beers">All beers</Link>
                            <p>blablablalblablablablalbalblalblablalbalblalbalblablablalblalblablbalaaaaaaaa</p>
                        </div>
                        <div className="col-12">
                            <img className="img-estrella" src={'https://okdiario.com/img/2019/07/22/eg3-655x368.jpg'} alt="beer" />
                            <Link to="/random-beer">Random Beer</Link>
                            <p>blablablalblablablablalbalblalblablalbalblalbalblablablalblalblablbalaaaaaaaa</p>
                        </div>
                        <div className="col-12">
                            <img className="img-estrella" src={'https://www.ecestaticos.com/imagestatic/clipping/c7f/806/c7f8067db7e5af0b167f4f0e932afb9b/estrella-galicia-crece-un-14-y-gana-mas-pese-a-no-querer-ser-la-cerveza-mas-vendida.jpg?mtime=1579565836'} alt="beer" />
                            <Link to="/new-beer">New beer</Link>
                            <p>blablablalblablablablalbalblalblablalbalblalbalblablablalblalblablbalaaaaaaaa</p>
                        </div>



                    </div>
                </div>
            </>
        )
    }
}

export default Home