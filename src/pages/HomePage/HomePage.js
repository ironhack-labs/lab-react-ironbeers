import HomePageCard from "../../components/HomePageCard/HomePageCard"
import HomePageData from "./HomePageData.json"
import { Container, Row } from "react-bootstrap"


export default function HomePage(){

    return (
        <Container>
            <Row>
                {HomePageData.map(({title, link, imgScr, text}, index) => {
                    return(
                        <HomePageCard title={title} link={link} imgSrc={imgScr} text={text} key={index}/>         
                    )
                })}
            </Row>

        </Container>
    )
}