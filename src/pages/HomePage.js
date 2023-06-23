import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-page-section">
        <img src="/assets/beers.png" alt="all beers" />
        <h2>
          <Link to="/beers">All Beers</Link>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          saepe aspernatur similique quasi rerum, laborum, at praesentium hic
          iusto facilis sequi, voluptate inventore! Voluptatibus, illo ipsum
          laborum impedit itaque expedita!
        </p>
      </section>
      <section className="home-page-section">
        <img src="/assets/random-beer.png" alt="random beer" />
        <h2>
          <Link to="/random-beer">Random Beer</Link>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          saepe aspernatur similique quasi rerum, laborum, at praesentium hic
          iusto facilis sequi, voluptate inventore! Voluptatibus, illo ipsum
          laborum impedit itaque expedita!
        </p>
      </section>
      <section className="home-page-section">
        <img src="/assets/new-beer.png" alt="new beer" />
        <h2>
          <Link to="/new-beer">New Beer</Link>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          saepe aspernatur similique quasi rerum, laborum, at praesentium hic
          iusto facilis sequi, voluptate inventore! Voluptatibus, illo ipsum
          laborum impedit itaque expedita!
        </p>
      </section>
    </div>
  );
};
