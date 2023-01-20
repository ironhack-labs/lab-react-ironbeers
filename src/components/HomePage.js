import { Card } from "react-bootstrap";

export function HomePage() {
  return (
    <div>
        <div className="mt-5">
            <h1>Home Page</h1> 
        </div>
        
        
        
      <Card className="mb-5 mt-5">
        <Card.Img variant="top" src={require(`../assets/beers.png`)} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="/beers">All Beers</Card.Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sed praesentium, eveniet quae dicta alias cumque beatae
            eum, corrupti quis laudantium! Sint reprehenderit, porro temporibus
            id quam itaque. Veritatis, hic?
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-5 mt-5">
        <Card.Img variant="top" src={require(`../assets/random-beer.png`)} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="/random-beer">Random Beer</Card.Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sed praesentium, eveniet quae dicta alias cumque beatae
            eum, corrupti quis laudantium! Sint reprehenderit, porro temporibus
            id quam itaque. Veritatis, hic?
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-5 mt-5">
        <Card.Img variant="top" src={require(`../assets/new-beer.png`)} />
        <Card.Body>
          <Card.Title>
            <Card.Link href="/new-beer">New Beer</Card.Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sed praesentium, eveniet quae dicta alias cumque beatae
            eum, corrupti quis laudantium! Sint reprehenderit, porro temporibus
            id quam itaque. Veritatis, hic?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
