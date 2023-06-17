import Card from 'react-bootstrap/Card';

function BeerSectionCard({img, name, text}){
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur numquam deserunt, totam culpa esse!"

    return(<>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {text ? text : loremText}
                </Card.Text>
            </Card.Body>
        </Card>
    </>)
}

export default BeerSectionCard