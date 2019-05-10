import React from 'react'
import CardComponent from './CardComponent';

const CardsHome = [
  { title: 'All Beers', description: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.', img: 'img/beers.png', url: '/AllBeer' },
  { title: 'Random Beer', description: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.', img: 'img/random-beer.png', url: '/RandomBeer' },
  { title: 'New Beer', description: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.', img: 'img/new-beer.png',  url: '/NewBeer'},
]

 class HomePage extends React.Component {
  render () {

    return (
      
      <div>
      {CardsHome.map((e,i) => (
        <CardComponent key={i} title={e.title} description={e.description} url={e.url} img={e.img}/>
        ))}
    </div>
    ) 
}

 }
export default HomePage