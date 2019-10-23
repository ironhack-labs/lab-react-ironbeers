import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
      <div className='container-home'>
        <img className='img' src='../images/beers.png'/>
        <Link to="/beers" className='title-home'><h2>All Beers</h2></Link>
        <p className='text-home'>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Viva Forevis aptent taciti sociosqu ad litora torquent. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>
      </div>
      <div className='container-home'>
        <img className='img' src='../images/random-beer.png'/>
        <Link to="/random-beer" className='title-home'><h2>Random Beers</h2></Link>
        <p className='text-home'>Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Diuretics paradis num copo é motivis de denguis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
      </div>
      <div className='container-home'>
        <img className='img' src='../images/new-beer.png'/>
        <Link to="/new-beer" className='title-home'><h2>New Beer</h2></Link>
        <p className='text-home'>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Casamentiss faiz malandris se pirulitá. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Pra lá , depois divoltis porris, paradis.</p>
      </div>
    </div>
    );
  }
}

export default Home;