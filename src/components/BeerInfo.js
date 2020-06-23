import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
    max-height: 45vh;
    margin: 20px 0 40px;
`

const Div = styled.div`
    ${props => 
        props.container && css`
            padding: 20px;
            max-width: 700px;
            margin: auto;
        `}

    ${props => 
        props.beerHeader && css`
            display: flex;
            justify-content: space-between;
        `}

    ${props => 
        props.beerName && css`
            text-align: left;
        `}

    ${props => 
        props.beerInfo && css`
            text-align: right;
        `}

    ${props => 
        props.description && css`
            text-align: left;
        `}
`

const P = styled.p`
    ${props => 
        props.tagline && css`
            font-weight: 400;
            color: grey;
        `}

    ${props => 
        props.attenuation && css`
            font-size: 1.5em;
            font-weight: 600;
            color: lightgray;
            margin: 0 0 10px;
        `}

    ${props => 
        props.date && css`
            font-weight: 800;
            font-size: 0.75em;
            margin: 0;
        `}
`

const H2 = styled.h2`
    font-weight: 400;
`

const Span = styled.span`
    font-weight: 600;
    color: grey;
    font-size: 0.8em;
`

function BeerInfo(props){
    const beer = props.beer;
    
    return (
        <Div container>
            <div>
                <Img src={beer.image_url} alt={beer.name} />
                <Div beerHeader>
                    <Div beerName>
                        <H2>{beer.name}</H2>
                        <P tagline>{beer.tagline}</P>
                    </Div>

                    <Div beerInfo>
                        <P attenuation>{beer.attenuation_level}</P>
                        <P date>{beer.first_brewed}</P>
                    </Div>
                </Div>
                <Div description>
                    <p>{beer.description}</p>
                    <Span>{beer.contributed_by}</Span>
                </Div>
            </div>
        </Div>
    )
}

export default BeerInfo;