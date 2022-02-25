import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import Home from "../Navbar/Navbar";
import { Card } from 'react-bootstrap'


const AllBeers = () => {

    const [beers, updateBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/')
            .then((response) => {
                updateBeers(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <>
            <div>
                <Home />
            </div>

            <body>
                <div>
                    <h1> Beers list</h1>
                    <hr />
                    {beers.map(elm => {
                        return (
                            <div key={elm._id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.image_url} />
                                    <Card.Body>
                                        <Card.Title>{elm.name}</Card.Title>
                                        <Card.Text>
                                            {elm.tagline}
                                            <Link to={`/beers/${elm._id}`}>See Beer</Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </body>

        </>
    )

}

export default AllBeers;