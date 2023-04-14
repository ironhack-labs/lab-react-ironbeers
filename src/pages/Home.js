import React from 'react'
import Card from '../components/Card'

import beers from './../assets/beers.png'
import newBeer from './../assets/new-beer.png'
import randomBeer from './../assets/random-beer.png'
import { Link } from 'react-router-dom'

function Home() {
  const sections = [
    {
      path: 'beers',
      image: beers,
      title: 'All Beers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor sem est, eu efficitur quam consectetur et. Proin sed lectus erat. Maecenas a tincidunt odio.'
    },
    {
      path: 'random-beer',
      image: randomBeer,
      title: 'Random Beer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor sem est, eu efficitur quam consectetur et. Proin sed lectus erat. Maecenas a tincidunt odio.'
    },
    {
      path: 'new-beer',
      image: newBeer,
      title: 'New Beer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor sem est, eu efficitur quam consectetur et. Proin sed lectus erat. Maecenas a tincidunt odio.'
    }
  ]
  return (
    <>
      {sections.map((section, index) => (
        <Link to={section.path} key={`${index}_link`} className='text-decoration-none'>
          <div key={`${index}_row`} className='row'>
            <div key={`${index}_col`} className='col_12'>
              <Card key={section.title} {...section} />
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Home