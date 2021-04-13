import React, { Suspense } from 'react'
import {Link} from "react-router-dom"


import { useTranslation } from 'react-i18next';


import BeersImg from '../../../assets/beers.png';
import RandomBeerImg from '../../../assets/random-beer.png';
import NewBeerImg from '../../../assets/new-beer.png';

const Home = () => {

    const { t, i18n } = useTranslation();

    return(
        <div className="container">
            <div className="row">
                <div className="container m-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={BeersImg} alt="beers" className="img-fluid rounded m-1"/>
                            <Link to="/beers"><h2>{t('home.title1')}</h2></Link>
                            <p className="text-justify">
                                {t('home.description1')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container m-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={RandomBeerImg} alt="random-beer" className="img-fluid rounded m-1"/>
                            <Link to="/random-beer"><h2>{t('home.title2')}</h2></Link>
                            <p className="text-justify">
                                {t('home.description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container m-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={NewBeerImg} alt="new-beer" className="img-fluid rounded m-1"/>
                            <Link to="/new-beer"><h2>{t('home.title3')}</h2></Link>
                            <p className="text-justify">
                                {t('home.description3')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function App() {
    return (
      <Suspense fallback="loading">
        <Home />
      </Suspense>
    );
  }

