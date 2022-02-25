import { Container } from "react-bootstrap"
import beersPng from './../../assets/beers.png'
import randomBeer from './../../assets/random-beer.png'
import newBeer from './../../assets/new-beer.png'
import { Link } from "react-router-dom"



import './HomePage.css'



const HomePage = () => {

    return (
        <>
        <Container>
                <Link className="link" to={'/beers'}>
                    <article>
                        <img src={beersPng} alt='all beers' ></img>
                        <h2>All Beers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi tenetur doloribus laboriosam placeat similique officiis,
                             ipsam possimus officia eos quae iste soluta maiores vero cupiditate,
                             assumenda ratione eligendi deleniti repudiandae.</p>
                    </article>
                </Link>

                <Link className="link" to={'/random-beer'}>
                <article>
                    <img src={randomBeer} alt='random beer' ></img>
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi tenetur doloribus laboriosam placeat similique officiis,
                        ipsam possimus officia eos quae iste soluta maiores vero cupiditate,
                        assumenda ratione eligendi deleniti repudiandae.</p>
                </article>
                </Link>

                <Link className="link" to={'/new-beer'}>
                <article>
                    <img src={newBeer} alt='new beer' ></img>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi tenetur doloribus laboriosam placeat similique officiis,
                        ipsam possimus officia eos quae iste soluta maiores vero cupiditate,
                        assumenda ratione eligendi deleniti repudiandae.</p>
                </article>
                </Link>

        </Container>

        </>
    )
}


export default HomePage