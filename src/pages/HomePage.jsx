import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"


function HomePage() {
    return (
        <>
            <img
                src={beers}
                alt=""
                height={200}
                width={400} />

            <Link
                to="/beers"
                style={{
                    fontSize: '14px',
                    display: 'block',
                    marginBottom: '10px',
                }}

            >All Beers</Link>

            <p fontSize='14px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum quas eveniet consectetur.
                Ullam iusto quasi numquam culpa nihil sequi magni quisquam unde,
                beatae, hic sint. Necessitatibus quisquam libero quod?</p>

            <img
                src={randomBeer}
                alt=""
                height={200}
                width={400} />

            <Link
                to="/random-beer"
                style={{
                    fontSize: '14px',
                    display: 'block',
                    marginBottom: '10px',
                }}

            >Random Beer</Link>

            <p fontSize='14px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum quas eveniet consectetur.
                Ullam iusto quasi numquam culpa nihil sequi magni quisquam unde,
                beatae, hic sint. Necessitatibus quisquam libero quod?</p>

            <img
                src={newBeer}
                alt=""
                height={200}
                width={400} />

            <Link
                to="/new-beer"
                style={{
                    fontSize: '14px',
                    display: 'block',
                    marginBottom: '10px',
                }}

            >New Beer</Link>

            <p fontSize='14px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum quas eveniet consectetur.
                Ullam iusto quasi numquam culpa nihil sequi magni quisquam unde,
                beatae, hic sint. Necessitatibus quisquam libero quod?</p>

        </>
    )
}

export default HomePage;
