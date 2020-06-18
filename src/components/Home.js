import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-md">
            <h1>Iron Beers</h1>
            <Link to={'/beers'}>
                <div className="card">
                    <img src="/images/beers.png" alt="All Beers" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title text-left">All Beers</h2>
                        <p className="card-text text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium facere, culpa ea provident accusamus minima dolore odio quisquam voluptates nam optio cumque dolor eligendi. Exercitationem libero ducimus alias. Laborum.
                        </p>
                    </div>
                </div>
            </Link>

            <Link to={'/random-beer'}>
                <div className="card">
                    <img src="/images/random-beer.png" alt="Random Beer" className="card-img-top" />
                    <div>
                        <h2 className="card-title text-left">Random Beer</h2>
                        <p className="card-text text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate facilis earum maiores saepe quam tenetur accusantium sequi eum debitis sint iure corporis laudantium, eos dignissimos ut, maxime praesentium minima!
                        </p>
                    </div>
                </div>
            </Link>

            <Link to={'/new-beer'}>
                <div className="card">
                    <img src="/images/new-beer.png" alt="New Beer" className="card-img-top" />
                    <h2 className="card-title text-left">New Beer</h2>
                    <p className="card-text text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tenetur dolore eveniet distinctio, facere quis dicta soluta ipsam illum. Praesentium asperiores beatae repellendus, inventore eum possimus ipsum quasi vero cumque.
                    </p>
                </div>
            </Link>
        </div>
    )
}