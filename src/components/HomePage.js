import React from "react"
import { Link } from 'react-router-dom'
import beers1 from '../assets/beers.png'
import beers2 from '../assets/new-beer.png'
import beers3 from '../assets/random-beer.png'
import './HomePage.css'
import BeersList from "./BeersList"

const HomePage = () => {
    return (
        <> <div className='home'>
            <div>

                <img src={beers1} alt='beers1img' />
                {/* <Link to="/beers/:beerId">ALL BEERS</Link> */}
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi vero inventore neque corrupti nisi? Fuga soluta impedit ex aut architecto. Accusamus id magni eaque temporibus voluptatem eos odit amet.</p>
            </div>

            <div>
                <img src={beers2} alt="" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi vero inventore neque corrupti nisi? Fuga soluta impedit ex aut architecto. Accusamus id magni eaque temporibus voluptatem eos odit amet.</p>            </div>

            <div>
                <img src={beers3} alt="" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi vero inventore neque corrupti nisi? Fuga soluta impedit ex aut architecto. Accusamus id magni eaque temporibus voluptatem eos odit amet.</p>            </div>
        </div>
        </>
    )
}

export default HomePage