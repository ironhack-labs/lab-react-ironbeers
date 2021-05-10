import React from 'react'

import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div>
            
        <Link to="/beers">
          <div>
            <h1>All Beers</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsam, natus quibusdam dolor explicabo deserunt inventore
              voluptatem maiores repellat voluptate incidunt ratione,
              reprehenderit temporibus! Ad voluptates voluptatum totam odit qui!
            </p>
            <img src="/beers.png" alt="" />
          </div>
        </Link>
        <Link to="/random-beer">
          <div>
            <h1>Random Beer</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsam, natus quibusdam dolor explicabo deserunt inventore
              voluptatem maiores repellat voluptate incidunt ratione,
              reprehenderit temporibus! Ad voluptates voluptatum totam odit qui!
            </p>
            <img src="/random-beer.png" alt="" />
          </div>
        </Link>
        <Link to="/new-beer">
          <div>
            <h1>New Beer</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsam, natus quibusdam dolor explicabo deserunt inventore
              voluptatem maiores repellat voluptate incidunt ratione,
              reprehenderit temporibus! Ad voluptates voluptatum totam odit qui!
            </p>
            <img src="/new-beer.png" alt="" />
          </div>
            </Link>
            
        
      </div>
    );
}
