import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

function HomePage() {
    return (
        <div>
            <Card>
                <Card.Img src="https://townsquare.media/site/295/files/2018/05/RobinsonsBrewery.jpg?w=980&q=75"  ></Card.Img>
                <Card.Body>
                    <Card.Text> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Card.Text>
                </Card.Body>
                <Link to={"/beers"}><h3>All Beers</h3></Link>
            </Card>
            <Card>
                <Card.Img src="https://dxgov9tdfq2kz.cloudfront.net/wp-content/uploads/2014/08/1.jpeg"></Card.Img>
                <Card.Body>
                    <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Card.Text>
                </Card.Body>
                <Link to={"/random-beer"}><h3>Random Beer</h3></Link>
            </Card>
            <Card>
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-PI7ITOuuI1VXT0W4r7VZQZjPVUsDuL9ozg&usqp=CAU"></Card.Img>
                <Card.Body>
                    <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Card.Text>
                </Card.Body>
                <Link to={"/new-beer"}><h3>New Beer</h3></Link>
            </Card>

        </div>

    )
}

export default HomePage