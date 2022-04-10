import React from 'react'

import Article from '../components/Article'

import Beers from '../assets/beers.png'
import NewBeer from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'

const Home = () => {
  return (
    <div>
      <Article link='/beers' src={ Beers } alt='beers' title='All Beers' >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dignissim magna. Cras porta nibh a massa porttitor lobortis. Fusce sit amet semper nisl, ut dapibus purus. Maecenas ut purus dignissim, fermentum massa et, placerat urna. Mauris lacinia, risus ac gravida volutpat, justo risus dictum lectus, dapibus viverra enim nisl nec magna. Nulla facilisi. Phasellus sit amet urna vel magna bibendum sodales et id dolor. Vestibulum condimentum enim id vehicula ultrices. Curabitur pellentesque eget velit vitae tempor. Donec pharetra arcu non dolor iaculis posuere. Aenean posuere, magna et malesuada sagittis, turpis dui scelerisque ante, ac sagittis dui lorem quis lacus. Phasellus ac nibh est. Nunc condimentum a nisi quis vulputate. Ut pellentesque risus eget ligula volutpat tincidunt. Praesent quis leo vehicula, sollicitudin nulla in, posuere nulla. Ut scelerisque lorem vel ipsum lobortis, sed accumsan nulla auctor.
      </Article>

      <Article link='/random-beer' src={ RandomBeer } alt='random-beer' title='Random Beer' >
        Proin elementum eros felis, quis tincidunt lacus bibendum vel. Nullam pellentesque diam vitae luctus ullamcorper. Integer aliquet quam eu lacus luctus, ornare blandit nisl dignissim. Nam interdum et diam sed accumsan. Etiam eget lorem molestie, tincidunt mauris non, interdum enim. In pretium iaculis risus, nec interdum turpis venenatis ac. Etiam non varius dolor. Duis venenatis magna neque, nec placerat purus efficitur sit amet. In venenatis pretium nunc, vitae auctor sem mattis sit amet. Aenean fringilla risus ac massa viverra eleifend. Phasellus lacinia est justo. Praesent eleifend varius ante et tristique. Ut sodales urna sit amet malesuada finibus. Etiam fringilla gravida nulla interdum tincidunt.
      </Article>

      <Article link='/new-beer' src={ NewBeer } alt='new-beer' title='New Beer' >
        Maecenas nisi magna, sodales nec tincidunt vitae, hendrerit id nibh. Quisque pellentesque felis erat, et bibendum leo condimentum vel. Nunc at semper orci, a aliquam nulla. Proin varius egestas ante, sed rhoncus purus aliquet in. Sed consequat lorem tempor lobortis congue. Aliquam sit amet tempus turpis. In quis molestie sem, ac egestas justo.
      </Article>
    </div>
  )
}

export default Home