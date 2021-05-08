import React from 'react'
import { Link } from 'react-router-dom'
import SCHome from './Home.styled'


export default function Home() {
    return (
        <SCHome>
            <div>
                <article>
                    <img src={"/images/beers.png"} alt='beer'></img>
                    <Link to="/beers">
                        <h2>All Beers</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora est magnam incidunt voluptate itaque, quibusdam adipisci           assumenda aut blanditiis consectetur totam eum illum cumque fuga error optio beatae nisi.</p>
                    </Link>
                </article>
                <article>
                    <img src={"/images/random-beer.png"} alt='random'></img>
                    <Link to="/random-beer">
                        <h2>Random Beer</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora est magnam incidunt voluptate itaque, quibusdam adipisci           assumenda aut blanditiis consectetur totam eum illum cumque fuga error optio beatae nisi.</p>
                    </Link>
                </article>
                <article>
                    <img src={"/images/new-beer.png"} alt='new'></img>
                    <Link to="/new-beer">
                        <h2>New Beer</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora est magnam incidunt voluptate itaque, quibusdam adipisci           assumenda aut blanditiis consectetur totam eum illum cumque fuga error optio beatae nisi.</p>
                    </Link>
                </article>
            </div>
        </SCHome>
    )
}
