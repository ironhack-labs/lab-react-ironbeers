import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className=" column card col-4 mb-3" style={{ width: '500px' }}>
        <div>
          <Link to="/beers">
            <img
            width='500px'
              src="https://brasiltravelnews.com.br/wp-content/uploads/2015/02/ABRE.jpg"
              alt="beerimage"
            />
            <h1 className="text-black">All Beers</h1>
            <p className="text-black">
              aqui vai um texto bonito falando qualquer coisa
            </p>
          </Link>
        </div>
      </div>
      <div className=" column card col-4 mb-3" style={{ width: '500px' }}>
        <div>
          <Link to="/random-beer">
            <img
            width='500px'
              src="https://brasiltravelnews.com.br/wp-content/uploads/2015/02/ABRE.jpg"
              alt="beerimage"
            />
            <h1 className="text-black">Random Beer</h1>
            <p className="text-black">
              aqui vai um texto bonito falando qualquer coisa
            </p>
          </Link>
        </div>
      </div>
      <div className=" column card col-4 mb-3" style={{ width: '500px' }}>
        <div>
          <Link to="/new-beer">
            <img
            width='500px'
              src="https://brasiltravelnews.com.br/wp-content/uploads/2015/02/ABRE.jpg"
              alt="beerimage"
            />
            <h1 className="text-black">New Beer</h1>
            <p className="text-black">
              aqui vai um texto bonito falando qualquer coisa
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
