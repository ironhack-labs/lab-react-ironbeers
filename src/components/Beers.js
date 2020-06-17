import React from 'react';
import Header from './Header';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

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
                width: 75%;
                flex-direction: column;
                text-align: left;
                align-items: flex-start;
                margin-left: 10px;
            `}

        ${props => 
            props.img && css`
                width: 25%;
                justify-content: center;
            `}
    `;

function Beers(props){
    return(
        <div>
            <Header />
            <h1>Beers page</h1>
            {props.beers.map((beer, i) => {
                return(
                    <Div key={i} container>
                        <Div img><Img src={beer.image_url} alt={beer.name} /></Div>
                        <Div beerInfo>
                            <NavLink to={`beers/${beer._id}`}><h4>{beer.name}</h4></NavLink>
                            <p>{beer.tagline}</p>
                            <span><b>Created by:</b> {beer.contributed_by}</span>
                        </Div>
                    </Div>
                )
            })}
        </div>
    )
}

export default Beers;