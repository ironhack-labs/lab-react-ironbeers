import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <section>
                <img src="./beers.png" alt="mrood" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, a debitis! Obcaecati pariatur iure, quibusdam perferendis nostrum perspiciatis praesentium harum sint eum labore eius blanditiis tempore sapiente dolores distinctio minima!</p>
                <Link to='/beers'>All Beers</Link>
            </section>
            <section>
                <img src="./random-beer.png" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, a debitis! Obcaecati pariatur iure, quibusdam perferendis nostrum perspiciatis praesentium harum sint eum labore eius blanditiis tempore sapiente dolores distinctio minima!</p>
                <Link to='/random-beer'>Random Beer</Link>
            </section>
            <section>
                <img src="./new-beer.png" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, a debitis! Obcaecati pariatur iure, quibusdam perferendis nostrum perspiciatis praesentium harum sint eum labore eius blanditiis tempore sapiente dolores distinctio minima!</p>
                <Link to='/new-beer'>New Beer</Link>
            </section>
        </div>
    )
}
