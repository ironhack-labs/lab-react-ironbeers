import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Route>
        <Link to="/beers">
          <section>
            <img src="./images/beers.png" alt="" />
            <h3>All Beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget tempus augue. Ut et neque ac ligula imperdiet elementum
              vehicula sit amet sapien. Maecenas dui augue, tincidunt id erat
              vitae, facilisis congue urna. Maecenas consequat non est vitae
              sagittis. Nunc erat nibh, volutpat eu vehicula ut, imperdiet nec
              purus.
            </p>
          </section>
        </Link>
      </Route>
      <Route>
        <Link to="/random-beer">
          <section>
            <img src="./images/random-beer.png" alt="" />
            <h3>Random Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget tempus augue. Ut et neque ac ligula imperdiet elementum
              vehicula sit amet sapien. Maecenas dui augue, tincidunt id erat
              vitae, facilisis congue urna. Maecenas consequat non est vitae
              sagittis. Nunc erat nibh, volutpat eu vehicula ut, imperdiet nec
              purus.
            </p>
          </section>
        </Link>
      </Route>
      <Route>
        <Link to="/new-beer">
          <section>
            <img src="./images/new-beer.png" alt="" />
            <h3>New Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget tempus augue. Ut et neque ac ligula imperdiet elementum
              vehicula sit amet sapien. Maecenas dui augue, tincidunt id erat
              vitae, facilisis congue urna. Maecenas consequat non est vitae
              sagittis. Nunc erat nibh, volutpat eu vehicula ut, imperdiet nec
              purus.
            </p>
          </section>
        </Link>
      </Route>
    </main>
  );
};

export default Home;
