import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Link to={'/cervezas'}>
      <article className="homePage-art">
          <img className="bar-img" src="https://www.ecestaticos.com/image/clipping/81f5a3a810b1c3d0a8e29bd9a9c61b72/tres-bares-espanoles-entre-los-50-mejores-del-mundo.jpg" alt="bar-img"></img>
          <h3>All Beers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </article>
      </Link>

      <Link to={'/cerveza-random'}>
      <article className="homePage-art">
          <img className="bar-img" src="https://media-cdn.tripadvisor.com/media/photo-s/17/75/d7/11/rush-bar.jpg" alt="bar-img"></img>
          <h3>Random Beer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </article>
      </Link>

      <Link to={'/crear-cerveza'}>
      <article className="homePage-art">
          <img className="bar-img" src="https://www.hosteleria.site/wp-content/uploads/2019/07/bar.jpg" alt="bar-img"></img>
          <h3>New Beers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </article>
      </Link>
    </>
  );
};

export default HomePage