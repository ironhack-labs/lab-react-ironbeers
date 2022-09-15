import { useNavigate } from 'react-router-dom'

import {BoxHome} from '../components'
import './Home.styles.css'

export const Home = () => {
  const navigate = useNavigate()

  const handleClickAllBeers = () => {
    navigate('/all-beers')
  }

  const handleClickRandomBeer = () => {
    navigate('/random-beer')
  }

  const handleClickNewBeer = () => {
    navigate('/new-beer')
  }

  const pages = [
    { 
      title: "All Beers",
      img: "assets/beers.png",
      description: "See some beers",
      handleClick: () => handleClickAllBeers()
    },
    { 
      title: "Random Beer",
      img: "assets/random-beer.png",
      description: "Generete a random beer",
      handleClick: () => handleClickRandomBeer()
    },
    { 
      title: "New Beer",
      img: "assets/new-beer.png",
      description: "Add a new beer",
      handleClick: () => handleClickNewBeer()
    },
  ]

  return(
    <main className='main'>
      {pages && pages.map((content, index) => {
        return(
          <BoxHome
            key={index}
            img={content.img}
            title={content.title}
            description={content.description}
            handleClick={content.handleClick}
          />
        )
      })}

    </main>
  )
}