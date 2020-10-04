import React from 'react';
import {Link} from "react-router-dom"

function Homepage() {
  
    return ( 
        <div>
            <Link to='/beers'>
                <div>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div>
                    <h2>Random Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>'
        </div>
    )
}
// 1o botao - Exibir todas as cervejas
//             - Cada item tem que ter um botao que direciona 
//               para uma pagina com as caracteristicas dela
//               (igual ao random beer)
// 2o botao - mostrar uma cerveja aleatoria
// 3o botao - tela para adicionar uma cerveja




export default Homepage;