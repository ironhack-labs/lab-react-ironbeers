import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import { Card } from 'react-bootstrap'
import Home from "../Navbar/Navbar";


const RandomBeer = () => {

    const [randomBeer, updateRandomBeer] = useState()

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                updateRandomBeer(response.data);
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
                    <h1> {randomBeer?.name}</h1>
                    <hr />

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={randomBeer?.image_url} />
                        <Card.Body>
                                <Card.Text>
                                <p>Tagline:{randomBeer?.tagline}</p>
                                <p> First brewed:{randomBeer?.first_brewed}</p>
                                <p> Fattenuation level: {randomBeer?.fattenuation_level}</p>
                                <p> Description: {randomBeer?.description}</p>
                                <p> Contributed by{randomBeer?.contributed_by}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>



                </div>
            </body>

        </>


    )
}




export default RandomBeer