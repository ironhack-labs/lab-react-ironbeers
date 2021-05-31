import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav>
                <section>
                    <img src="" alt="" />
                    <Link exact to="/beers">
                        All Beers
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sint harum ducimus, quas minus dolorum odio expedita non ipsam iure reiciendis voluptatem eaque eius!</p>
                </section>

                <section>
                    <img src="" alt="" />
                    <Link exact to="/random-beer">
                        Random Beer
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sint harum ducimus, quas minus dolorum odio expedita non ipsam iure reiciendis voluptatem eaque eius!</p>
                </section>

                <section>
                    <img src="" alt="" />
                    <Link exact to="/new-beer">
                        New Beer
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sint harum ducimus, quas minus dolorum odio expedita non ipsam iure reiciendis voluptatem eaque eius!</p>
                </section>
            </nav>
        </div>
    )
}

export default Home
