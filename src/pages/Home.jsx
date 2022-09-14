import {BoxHome} from '../components'
import './Home.styles.css'

export const Home = () => {

  const pages = [
    { 
      title: "All Beers",
      img: "assets/beers.png",
      description: "See some beers",

    },
    { 
      title: "Random Beer",
      img: "assets/random-beer.png",
      description: "Generete a random beer"
    },
    { 
      title: "New Beer",
      img: "assets/new-beer.png",
      description: "Add a new beer"
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
          />
        )
      })}

    </main>
  )
}