import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row, Image } from "react-bootstrap"
import NavBar from "../Navbar/Navbar"

const RandomBear = () => {
    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        getRandomBeer()
    }, [])
    const getRandomBeer = () => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(({ data }) => {
                setRandomBeer(data)
            })
            .catch(err => err)
    }
    console.log(randomBeer)

    return (
        <>
            <NavBar />
            <Row>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Image className="image" src={randomBeer.image_url}></Image>
                </Col>
                <Col className="title" xs={{ span: 4 }}>
                    <h3> {randomBeer.name}</h3>
                    <h5 className="tag-title">{randomBeer.tagline} </h5>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </Col>

            </Row>

        </>

    )

}
export default RandomBear