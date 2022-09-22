import { Container, Row } from "react-bootstrap"

const SingleBeer = ({ beer }) => {
    console.log(beer)
    return (
        <Container className="pt-5">
            <Row className="justify-content-center">
                <div className=" col-12 col-md-6">
                    <img src={beer.image_url} className={'w-25 p-3'} />
                </div>
                <div className="col-12 col-md-6">
                    <Row>
                        <div className="col-8">
                            <h5>{beer.name}</h5>
                            <p>{beer.tagline}</p>
                        </div>
                        <div className="col">
                            <p>{beer.attenuation_level}</p>
                            <p>{beer.first_brewed}</p>
                        </div>
                    </Row>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </Row>
        </Container>
    )

}

export default SingleBeer