import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <>
                <Card className="card-beer">

                    <Card.Img variant="top" src='../images/beers.png' />
                    <Card.Body>
                        <Card.Title><Link to={`/beers`}>Beers</Link></Card.Title>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod blanditiis a adipisci asperiores nemo. Consectetur beatae placeat labore laboriosam laudantium amet autem cum illum facere nesciunt pariatur nemo, eaque quaerat! </p>
                    </Card.Body>
                </Card>
                <Card className="card-beer">
                    <Card.Img variant="top" src='../images/random-beer.png' />
                    <Card.Body>
                        <Card.Title><Link to={`/random-beer`}>Random beer</Link></Card.Title>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod blanditiis a adipisci asperiores nemo. Consectetur beatae placeat labore laboriosam laudantium amet autem cum illum facere nesciunt pariatur nemo, eaque quaerat! </p>
                    </Card.Body>
                </Card>
                <Card className="card-beer">
                    <Card.Img variant="top" src='../images/new-beer.png' />
                    <Card.Body>
                        <Card.Title><Link to={`/new-beer`}>New beer</Link></Card.Title>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod blanditiis a adipisci asperiores nemo. Consectetur beatae placeat labore laboriosam laudantium amet autem cum illum facere nesciunt pariatur nemo, eaque quaerat! </p>
                    </Card.Body>
                </Card>
            </>
        )
    }
}


export default Home
