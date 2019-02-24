import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="container">
        <Link to="/beers">
            <div className="front-card">
                <img src="https://media.gqindia.com/wp-content/uploads/2017/04/beer-1-866x487.jpg"></img>
                <h2>All Beers</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati harum! Quidem repellendus, sapiente mollitia exercitationem optio maiores non rerum!
                </p>
            </div>
        </Link>
        <Link to="/random-beer">
            <div className="front-card">
                <img src="https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/white-ipa-style.jpg"></img>
                <h2>Random Beer</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati harum! Quidem repellendus, sapiente mollitia exercitationem optio maiores non rerum!
                </p>
            </div>
        </Link>
        <Link to="/new-beer">
            <div className="front-card">
                <img src="https://cdn.craftbeer.com/wp-content/uploads/hazy_IPA_Hero.jpg"></img>
                <h2>New Beer</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati harum! Quidem repellendus, sapiente mollitia exercitationem optio maiores non rerum!
                </p>
            </div>
        </Link>
    </div>
);

