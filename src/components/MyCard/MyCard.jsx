import { Card } from "react-bootstrap"


const MyCard = ({ img, title }) => {
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="p-4">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia temporibus quos nesciunt laudantium iure, ad non vero omnis corrupti tempore vitae labore maxime voluptas, sint illo iusto deserunt! Magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia temporibus quos nesciunt laudantium iure, ad non vero omnis corrupti tempore vitae labore maxime voluptas, sint illo iusto deserunt! Magni.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard