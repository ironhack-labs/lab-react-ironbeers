import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mb-4">
      <div className="row d-flex justify-content-center">
        <img src={'./src/assets/beers.png'} className="m-4" />
        <Link to={'/beers'} className="fs-4 text-dark">
          All Beers
        </Link>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ex
          quam rerum vitae deleniti provident, voluptatum distinctio nam?
          Laborum earum provident similique sint molestiae repudiandae,
          accusamus excepturi vero minima assumenda ullam maiores quidem ex id
          quaerat dicta! Eveniet repellat perspiciatis sint doloribus rem
          aperiam, rerum natus eligendi, inventore omnis tempore.
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <img src={'./src/assets/random-beer.png'} className="m-4" />
        <Link to={'/random-beer'} className="fs-4 text-dark">
          Random Beer
        </Link>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          doloribus laborum tempora facilis sequi consequuntur libero, deleniti
          assumenda eveniet odit magni molestias illo repellat officiis nam
          dolore ipsa, harum possimus dolor. Possimus ab soluta magnam. At
          reprehenderit ea iure blanditiis perferendis aliquam corrupti deserunt
          aperiam. Obcaecati impedit molestiae repellendus nostrum?
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <img src={'./src/assets/new-beer.png'} className="m-4" />
        <Link to={'/new-beer'} className="fs-4 text-dark">
          New Beer
        </Link>
        <p className="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odio
          dolorem libero impedit, corrupti sit eligendi officiis! Accusantium
          asperiores nesciunt molestias at nam ipsam, atque animi ea quo officia
          dolor perspiciatis amet recusandae, aliquam quae dolores consequuntur
          neque? Perspiciatis, eos? Eveniet enim odio qui aliquid, nemo natus
          nesciunt. Eligendi, nisi.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
