import React from 'react'
import Random from '../assets/random-beer.png'
import {Header,} from '@mantine/core'



function RandomBeer() {
  
     
    return (
    <div>
    <Header height={60} p="xs">Header</Header>
    <img src={Random} alt='random' />
    <div>
    <h1>RandomBeer</h1>
    </div>
    </div>
  )
}

export default RandomBeer



// import React from 'react'

// const RandomBeer = () => {
//   return (
//     <div>RandomBeer</div>
//   )
// }

// export default RandomBeer