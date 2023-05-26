import React, { useState, useEffect } from 'react';
import "./HomePage.css";

// import axios from 'axios';

const HomePage = () => (
    <div>
        <h1>IronBeers</h1>
        <ul>
            <li>
                <a href="/beers">All Beers
                    <br />
                    <img src='https://cdn2.justwineapp.com/assets/article/2019/08/different-types-of-beer-styles-guide-1800x946.jpg' alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur autem illo nostrum, labore, quod officia aut vero nihil earum rem et in placeat dolorum sint ipsam soluta nisi. Ullam, commodi.</p>
                </a>
            </li>
            <li>
                <a href="/random-beer">Random Beer
                    <br />
                    <img src='https://beebeer.es/wp-content/uploads/2019/03/Bee-Beer-Bar-Craft-Beer-Madrid-1-2-1.jpg' alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur autem illo nostrum, labore, quod officia aut vero nihil earum rem et in placeat dolorum sint ipsam soluta nisi. Ullam, commodi.</p>
                </a>
            </li>
            <li>
                <a href="/new-beer">New Beer
                    <br />
                    <img src='https://images.english.elpais.com/resizer/h1udQOAu6COlBbqByP_0_Mz2MHU=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/P6EG5CR66WD5XD6AW3USOFNIWU.jpg' alt="#" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur autem illo nostrum, labore, quod officia aut vero nihil earum rem et in placeat dolorum sint ipsam soluta nisi. Ullam, commodi.</p>
                </a>
            </li>
        </ul>
    </div>
);

export default HomePage

