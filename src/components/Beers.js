import React, { Component } from 'react';
import Header from './Header';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


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

            &:hover a{
                text-decoration: none;

                &:hover ${H4} {
                    color: #158596;
                }
            }
        `}

    ${props => 
        props.img && css`
            width: 25%;
            justify-content: center;
        `}
`;

const Input = styled.input`
    width: 90%;
    margin-bottom: 20px ;
`;

const H4 = styled.h4`
    color: black;
    font-weight: 400;
  }
`

const P = styled.p`
    font-size: 1.15em;
    font-weight: 400;
    color: grey;
    margin: 10px 0 0;
`

const Span = styled.span`
    font-size: 0.7em;
`






class Beers extends Component{
    state = {
        beers: [],
        input: ''
    }

    getAllbeers(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({ beers: response.data });
            });
    }

    componentDidMount(){
        this.getAllbeers();
    }

    onChangeHandler = (event) => {
        this.setState({ input: event.target.value });
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.input}`)
            .then((response) => {
                //console.log('response input:', response.data);
                this.setState({ beers: response.data})
            })
        
        if(event.target.value === ''){
            this.getAllbeers();
        }
    };

    render(){
        return(
            <div>
                <Header />
                <Input type="text" name="input" placeholder="Search..." value={this.state.input} onChange={this.onChangeHandler} />
                {this.state.beers.map((beer, i) => {
                    return(
                        <Div key={i} container>
                            <Div img><Img src={beer.image_url} alt={beer.name} /></Div>
                            <Div beerInfo>
                                <NavLink to={`beers/${beer._id}`}><H4>{beer.name}</H4></NavLink>
                                <P>{beer.tagline}</P>
                                <Span><b>Created by:</b> {beer.contributed_by}</Span>
                            </Div>
                        </Div>
                    )
                })}
            </div>
        )
    }
}

export default Beers;