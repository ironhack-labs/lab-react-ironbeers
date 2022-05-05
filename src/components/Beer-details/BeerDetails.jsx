
import { Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import NavBar from "../Navbar/Navbar"

const BeerDetails = ({ allBeers }) => {
    const { id } = useParams()
    let oneBeer = allBeers.find(eachbear => {
        if (eachbear._id === id) {
            return eachbear
        }
    })
    return (
        <>
            <NavBar />
            <Row>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Image className="image" src={oneBeer.image_url}></Image>
                </Col>
                <Col className="title" xs={{ span: 4 }}>
                    <h3> {oneBeer.name}</h3>
                    <h5 className="tag-title">{oneBeer.tagline} </h5>
                    <p>{oneBeer.first_brewed}</p>
                    <p>{oneBeer.attenuation_level}</p>
                    <p>{oneBeer.description}</p>
                    <p>{oneBeer.contributed_by}</p>
                </Col>

            </Row>

        </>

    )

}
export default BeerDetails