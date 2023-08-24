import { Card } from "react-bootstrap";
import beersImg from './../assets/beers.png'
import randomBeer from './../assets/random-beer.png'
import newBeer from './../assets/new-beer.png'
import { Link } from "react-router-dom";



    const HomePage = () =>{


        return (
            <>
        <Link to={'/beers'}>
            <div className="HomePage">
                <Card>
                <Card.Img variant="top" src={beersImg} />
                <Card.Body>
                <Card.Title>All Beers</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores excepturi fugit, ipsa exercitationem obcaecati facere 
                    voluptates cum deserunt vitae sunt neque? Et aliquam vel tempora eum eius excepturi ea.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores excepturi fugit, ipsa exercitationem obcaecati facere 
                    voluptates cum deserunt vitae 
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
        </Link>
        <Link to={'/random'}>
          <div className="HomePage">
          <Card>
            <Card.Img variant="top" src={randomBeer} />
            <Card.Body>
              <Card.Title>Random Beers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores excepturi fugit, ipsa exercitationem obcaecati facere 
                voluptates cum deserunt vitae sunt neque? Et aliquam vel tempora eum eius excepturi ea.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores excepturi fugit, ipsa exercitationem obcaecati facere 
                voluptates cum deserunt vitae 
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </Link>
          <Link to={'/new-beer'}>
          <div className="HomePage">
          <Card>
            <Card.Img variant="top" src={newBeer} />
            <Card.Body>
              <Card.Title>New beer</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores excepturi fugit, ipsa exercitationem obcaecati facere 
                voluptates cum deserunt vitae sunt neque? Et aliquam vel tempora eum eius excepturi ea.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores excepturi fugit, ipsa exercitationem obcaecati facere 
                voluptates cum deserunt vitae 
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </Link>
         
          </>
          
            


        )
    }

export default HomePage;
