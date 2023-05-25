import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import beersImage from './../../assets/beers.png'
import newBeerImg from './../../assets/new-beer.png'
import randomBeerImg from './../../assets/random-beer.png'


const HomePage = () => {

    return (
        <Container >
            < Link className="row text-black text-decoration-none" to={'/beers'} >
                <img src={beersImage} alt="img" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores sed nesciunt enim qui fuga quo consectetur laboriosam amet quae ipsa praesentium quod modi unde mollitia consequuntur labore, repudiandae possimus?</p>
            </Link >
            < Link className="row text-black text-decoration-none" to={'/random-beer'} >
                <img src={newBeerImg} alt="img" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores sed nesciunt enim qui fuga quo consectetur laboriosam amet quae ipsa praesentium quod modi unde mollitia consequuntur labore, repudiandae possimus?</p>
            </Link >
            < Link className="row text-black text-decoration-none" to={'/new-beer'} >
                <img src={randomBeerImg} alt="img" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores sed nesciunt enim qui fuga quo consectetur laboriosam amet quae ipsa praesentium quod modi unde mollitia consequuntur labore, repudiandae possimus?</p>
            </Link >

        </Container>
    )
}

export default HomePage