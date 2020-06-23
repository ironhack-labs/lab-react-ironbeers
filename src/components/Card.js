import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Div = styled.div`
    ${props => 
        props.container && css`
            max-width: 600px;
            margin: auto;
        `}

    ${props => 
        props.title && css`
            text-align: left;
            padding: 10px 20px;
            margin-bottom: 40px;
        `}
`

const H3 = styled.h3`
    font-weight: 400;
`

const P = styled.p`
    color: grey;
    font-size: 0.9em;
    margin: 0;
`

function Card(props){
    return(
        <Div container>
            <NavLink to={props.link}>
                <img src={props.image} alt='beer'/>
            </NavLink>
            <Div title>
                <H3>{props.title}</H3>
                <P>Lorem iPsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate orci elit, nec porta leo pharetra et.</P>
            </Div>
        </Div>
    )
}

export default Card;