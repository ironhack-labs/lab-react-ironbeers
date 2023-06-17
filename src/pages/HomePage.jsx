import BeerSectionCard from "../components/BeerSectionCard"
import { Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import beer from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function HomePage() {
    const cards = [
        {
            name: "All beers",
            img: beer,
            text: null,
            id: "1",
            link: "/beers"
        },
        {
            name: "Random Beer",
            img: randomBeer,
            text: null,
            id: "2",
            link: "/random-beer"
        },
        {
            name: "New beers",
            img: newBeer,
            text: null,
            id: "3",
            link: "/new-beer"

        }

    ]

    return (
        <>
            <Container className="d-flex align-items-center flex-column">
                {cards.map((card) =>
                    <Link to={card.link} className="noStyle" key={card.id}>
                        <BeerSectionCard name={card.name} img={card.img} text={null}/>
                    </Link>
                )}

            </Container>
        </>)
}

export default HomePage