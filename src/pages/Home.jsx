import React from 'react'
import { Link } from 'react-router-dom'



function Home({ beersData }) {
  return (
    <div >
      <Link className='text-decoration-none text-dark' to={"/beers"}>
      <div>
        <img src="/beers.png" alt="beers" />
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore qui ab error, molestiae distinctio facere, tenetur similique sunt dolorem iste fugit recusandae minima iusto corporis fugiat tempora harum. Adipisci, reprehenderit!</p>
      </div>
      </Link>
      <Link className='text-decoration-none text-dark' to={"/random-beer"}>
      <div>
      <img src="/random-beer.png" alt="beers" />
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eum dicta fuga odio ipsa architecto? Pariatur qui dolores, sapiente ex amet minus dolor, aliquam quisquam repellat distinctio corrupti incidunt illum?</p>
      </div>
      </Link>
      <Link className='text-decoration-none text-dark' to={"/new-beer"}>
      <div>
      <img src="/new-beer.png" alt="beers" />
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deleniti repellat incidunt sunt saepe officiis aliquid adipisci. Necessitatibus laborum nulla, aliquid asperiores ipsam, reprehenderit ad ipsum in, esse tempora voluptates!</p>
      </div>
      </Link>
    </div>
  )
}

export default Home