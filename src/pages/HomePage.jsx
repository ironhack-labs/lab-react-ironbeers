import { Container, Row } from "react-bootstrap"
import HomeCardComponent from "../components/HomeCardComponent"

const HomePage = () => {
    return (
        <Container >
            <Row>
                <HomeCardComponent whenClick={'/beers'} title={'All beers'} className={'col-12 col-md-4'} />
                <HomeCardComponent whenClick={'/randombeer'} title={'Random beer'} className={'col-12 col-md-4'} />
                <HomeCardComponent whenClick={'/newbeer'} title={'New beer'} className={'col-12 col-md-4'} />
            </Row>
        </Container>
    )

}

export default HomePage 