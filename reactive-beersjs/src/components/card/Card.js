import React from 'react';
import { Link } from 'react-router-dom';

function Card({ name, picture, description }) {

  const cards = [
    {
      name: 'All Beers',
      picture: 'https://assets3.thrillist.com/v1/image/1332147/size/tmg-facebook_social.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/beers'
    },
    {
      name: 'Random Beer',
      picture: 'https://assets3.thrillist.com/v1/image/1299749/size/tmg-article_default_mobile.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/random-beer/random'
    },
    {
      name: 'New Beer',
      picture: 'https://media.timeout.com/images/102563929/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/new-beer'
    }
  ]


  const cardList = cards.map((element, idx) => {
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Link key={idx} to={element.link}>
          <div className="card" style={{ width: '100%' }}>
            <img src={element.picture} className="card-img-top" alt={element.name} />
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <p className="card-text">{element.description}</p>
            </div>
          </div>
        </Link>
      </div>
      // console.log('element', element.name)
    )
  })

  return (
    cardList
  )
}

export default Card;
