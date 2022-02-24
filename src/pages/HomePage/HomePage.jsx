import { Link } from "react-router-dom"
import BeersImg from "./../../assets/beers.png"
import RandomBeerImg from "./../../assets/random-beer.png"
import NewBeerImg from "./../../assets/new-beer.png"

const HomePage = () => {

    return (
        <section>
            <article>
                <Link to="/beers">
                    <img src={BeersImg}></img>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, arcu nec rutrum bibendum, ligula nisi accumsan mi, in ultrices odio felis in nisl. Ut imperdiet elementum lobortis. Duis venenatis est metus, a dictum sapien varius bibendum. Nam convallis urna nec nunc ullamcorper posuere.</p>
                </Link>
                <Link to="/random-beer">
                    <img src={RandomBeerImg}></img>
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, arcu nec rutrum bibendum, ligula nisi accumsan mi, in ultrices odio felis in nisl. Ut imperdiet elementum lobortis. Duis venenatis est metus, a dictum sapien varius bibendum. Nam convallis urna nec nunc ullamcorper posuere.</p>
                </Link>
                <Link to="/new-beer">
                    <img src={NewBeerImg}></img>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, arcu nec rutrum bibendum, ligula nisi accumsan mi, in ultrices odio felis in nisl. Ut imperdiet elementum lobortis. Duis venenatis est metus, a dictum sapien varius bibendum. Nam convallis urna nec nunc ullamcorper posuere.</p>
                </Link>

            </article>
        </section>
    )
}

export default HomePage