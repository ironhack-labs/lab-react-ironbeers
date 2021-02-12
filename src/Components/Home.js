import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return <div className='container-fluid'>
        <div>
            <Link to="/beers">
                <img src={require('../assets/beers.png')} alt='beers' />
            </Link>
            <h2>All Beers</h2>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga. Cevadis im ampola pa arma uma pindureta. Delegadis gente finis, bibendum egestas augue arcu ut est. </p>
        </div>
        <div>
            <Link to="/random-beer">
                <img src={require('../assets/random-beer.png')} alt='a beer' />
            </Link>
            <h2>Random Beer</h2>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga. Cevadis im ampola pa arma uma pindureta. Delegadis gente finis, bibendum egestas augue arcu ut est. </p>
        </div>
        <div>
            <Link to="/new-beer">
                <img src={require('../assets/new-beer.png')} alt='beer' />
            </Link>
            <h2>New Beer</h2>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga. Cevadis im ampola pa arma uma pindureta. Delegadis gente finis, bibendum egestas augue arcu ut est. </p>
        </div>
    </div>
}

export default Home;