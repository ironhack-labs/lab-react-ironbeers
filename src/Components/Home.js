import {Link} from "react-router-dom";
import React from "react";
import imgBeer from "../assets/beers.png"
import imgNewBeer from "../assets/new-beer.png"
import imgRandomBeer from "../assets/random-beer.png"

export default function Home () {
    return (
        <div>
            <Link className="link" to="/BeerList">
                <img src= {imgBeer} alt="all-beer"/>
                <h1>Todas as cervejas</h1>
                <p>Aqui você encontrará a lista de várias cervejas</p>
            </Link>
            <Link className="link" to="/RandomBeer">
                <img src= {imgNewBeer} alt="random-beer"/>
                <h1>Cervejas Aleatórias</h1>
                <p>Nessa sessão uma cerveja aleatória irá aparecer para você</p>
            </Link>
            <Link className="link" to="/NewBeer">
                <img src= {imgRandomBeer} alt="new-beer"/>
                <h1>Adicione uma nova Cerveja</h1>
                <p>Aqui você poderá adicionar uma nova cerveja</p>
            </Link>
        </div>
    )
}