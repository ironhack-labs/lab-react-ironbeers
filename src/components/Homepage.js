import React from 'react';

// import Card components
import Card from './Card'

// all    : https://source.unsplash.com/nVhPvYP6tSY/640x426
// random : https://source.unsplash.com/D_Rfjj3XV8M/640x426
// new    : https://source.unsplash.com/Lq1rOaigDoY/640x426

const Homepage = () => {
  const cards = [
    {
      title: 'All Beers',
      url: 'https://source.unsplash.com/nVhPvYP6tSY/640x426',
      link: '/beers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tortor, fermentum id eros nec, ultrices commodo mi.',
    },
    {
      title: 'Random Beer',
      url: 'https://source.unsplash.com/D_Rfjj3XV8M/640x426',
      link: '/random-beer',
      description: 'Donec facilisis quis quam in vehicula. Vivamus euismod orci odio, id elementum augue scelerisque in.',
    },
    {
      title: 'New Beer',
      url: 'https://source.unsplash.com/Lq1rOaigDoY/640x426',
      link: '/new-beer',
      description: 'Integer nibh sem, finibus eu consectetur sit amet, laoreet non nibh. Sed convallis consectetur convallis.',
    }
  ]

  return (
    <div className='homepage'>
      {cards.map((card, i) => (
        <Card info={card} key={i} />
      ))}
    </div>
  )
}

export default Homepage;