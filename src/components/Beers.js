import React from 'react';
import Header from './Header';
import styled, { css } from 'styled-components';


function Beers(props){
    const Img = styled.img`
        height: 10em;
    `;

    const Div = styled.div`
        display: flex;
        align-items: center;

        ${props => 
            props.container && css`
                margin-bottom: 10px;
                border-bottom: 1px solid lightgrey;
            `}

        ${props => 
            props.beerInfo && css`
                flex-direction: column;
                text-align: left;
                align-items: flex-start;
                margin-left: 30px;
            `}

        ${props => 
            props.img && css`
                background: blue;
                width: 100px;
                justify-content: center;
            `}
    `;

    return(
        <div>
            <Header />
            <h1>Beers page</h1>
            {props.beers.map(beer => {
                return(
                    <Div key={beer.id} container>
                        <Div img><Img src={beer.image_url} alt={beer.name} /></Div>
                        <Div beerInfo>
                            <h4>{beer.name}</h4>
                            <p>{beer.tagline}</p>
                            <span>Contributed by {beer.contributed_by}</span>
                        </Div>
                    </Div>
                )
            })}
        </div>
    )
}

export default Beers;