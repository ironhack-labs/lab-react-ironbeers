import { Card } from "react-bootstrap"
const AllBeersCard = ({ img, title, text }) => {
    return (
        <>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text} </Card.Text>
                </Card.Body>
            </Card>
        </>

    )

}
export default AllBeersCard