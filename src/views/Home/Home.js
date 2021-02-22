import React from 'react';
import { Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Route>
        <Link to="beers">
          <img src="./images/beers.png" alt="beers"></img>
          <h3>All beers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            condimentum ante, id venenatis nisi consequat eget. Ut in porta sem.
            Sed eu nulla facilisis, congue ipsum eu, posuere dui. Integer id
            porttitor orci. Nullam et magna a nisl ultricies consequat. Proin
            sagittis aliquet tortor, id vulputate dui viverra sit amet. Mauris
            viverra ultricies enim, eget faucibus sapien mattis ac.
          </p>
        </Link>
      </Route>
      <Route>
        <Link to="random-beer">
          <img src="./images/random-beer.png" alt="random-beer"></img>
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            iaculis enim augue, quis porttitor neque ultrices eget. Nullam
            eleifend commodo nibh at fermentum. Aliquam maximus tellus sit amet
            massa placerat sodales. Etiam fermentum lobortis finibus. Duis
            libero mauris, eleifend eget viverra a, venenatis quis elit. In
            sollicitudin tempor diam, non vulputate eros tincidunt sed.
            Vestibulum ac ligula vitae risus convallis lacinia. Praesent
            fringilla feugiat enim id consectetur.
          </p>
        </Link>
      </Route>
      <Route>
        <Link to="new-beer">
          <img src="./images/new-beer.png" alt="new-beer"></img>
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            interdum in dui non consequat. Sed sed eros pharetra, mollis erat
            quis, ornare massa. Phasellus molestie ac sapien a iaculis. Integer
            sodales lectus nunc, sed tincidunt neque consectetur eget. Sed in
            massa non mauris varius porta vel dictum elit. Aliquam erat
            volutpat. Cras congue sollicitudin nisi et cursus. Morbi vitae
            elementum lectus, id vestibulum dui.
          </p>
        </Link>
      </Route>
    </div>
  );
}

export default Home;
