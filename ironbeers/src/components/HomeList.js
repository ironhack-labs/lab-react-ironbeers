import React from 'react';
import beersImg from '../img/beers.png';
import newBeerImg from '../img/new-beer.png';
import randomBeerImg from '../img/random-beer.png';
import { Link } from 'react-router-dom';

const homeCategories = [
  {
  route:'beers',
  img: beersImg,
  title: 'All Beers',
  text: 'Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.'
  },
  {
    route:'new-beer',
    img: newBeerImg,
    title: 'Random Beer',
    text: 'Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.'
  },
  {
    route:'random-beer',
    img: randomBeerImg,
    title: 'New Beer',
    text: 'Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.'
  }
]

const HomeList = () => {
  console.log(homeCategories[0].img)
  return (
    <div>
      {
        homeCategories.map((eachBeer, index) => {
          return (
            <Link key={index} to={`/${eachBeer.route}`}>
                <div >
                <div><img src={eachBeer.img} alt='img beers'/></div>
                <div>{eachBeer.title}</div>
                <div>{eachBeer.text}</div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default HomeList;