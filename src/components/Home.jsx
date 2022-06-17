import React from 'react'
import ourBeers from '../assets/beers.png'
import New from '../assets/new-beer.png'
import Random from '../assets/random-beer.png'


function Home() {
  return (
    <div>

    <img src={ourBeers} alt='beers' />
    <div>
    <h1>Our Beers</h1>
    </div>

    <img src={Random} alt='random' />
    <div>
    <h1>RandomBeer</h1>
    </div>

    <img src={New} alt='newBeer' />
    <div>
    <h1>NewBeer</h1>
    </div>

    </div>



  )
}

export default Home



// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

