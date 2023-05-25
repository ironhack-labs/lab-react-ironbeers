import { Link } from "react-router-dom"
import { Card, Col } from "react-bootstrap"
import './HomePageCard.css'

export default function HomePageCard({title, link, imgSrc, text}) {

    return(     
        <Link style={{textDecoration: "none"}} to={link}>
            <Card id="HomePage__Card">
                <Card.Img variant='top'src={imgSrc}/>
                <Card.Body>
                    <Card.Title id="HomePageCard__text--title">{title}</Card.Title>
                    <Card.Text id="HomePageCard__text--text">
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}