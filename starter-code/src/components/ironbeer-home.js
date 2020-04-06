import React, { Component } from 'react';
import { Link} from 'react-router-dom'; 
import beersImg from '../beers.png';
import newBeerImg from '../new-beer.png';
import randomBeerImg from '../random-beer.png';


class IronbeerHome extends Component {
  render() {
    return (
      <div className="list">
        <article>
          <div>
            <img src={beersImg} alt="All Beers"/>   
          </div>
          <div className="desc">
            <h1 className="title is-1"><Link to={`/beers` }>All Beers</Link></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, saepe adipisci non aut commodi doloremque velit sequi quis odio delectus? Provident est, at nobis hic recusandae excepturi magnam impedit reprehenderit</p>
          </div>
        </article>
        <article>
          <div>
            <img src={randomBeerImg} alt="Random Beer"/>   
          </div>
          <div className="desc">
            <h1 className="title is-1"><Link to={`/random-beer` }>Random Beer</Link></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, saepe adipisci non aut commodi doloremque velit sequi quis odio delectus? Provident est, at nobis hic recusandae excepturi magnam impedit reprehenderit</p>
          </div>
        </article>
        <article>
          <div>
            <img src={newBeerImg} alt="New Beer"/>   
          </div>
          <div className="desc">
            <h1 className="title is-1"><Link to={`/add-beer` }>New Beer</Link></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, saepe adipisci non aut commodi doloremque velit sequi quis odio delectus? Provident est, at nobis hic recusandae excepturi magnam impedit reprehenderit</p>
          </div>
        </article>
        <article>
          <div>
            <img src={newBeerImg} alt="New Beer"/>   
          </div>
          <div className="desc">
            <h1 className="title is-1"><Link to={`/add-beer-with-image` }>New Beer (with image upload)</Link></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, saepe adipisci non aut commodi doloremque velit sequi quis odio delectus? Provident est, at nobis hic recusandae excepturi magnam impedit reprehenderit</p>
          </div>
        </article>
        
      </div>
    );
  }
}

export default IronbeerHome;
