import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import Pagination from './Pagination';
import axios from 'axios';

class Beers extends Component {
    constructor(){
        super();
        this.state = {
            beers:[],
            size:5,
            pageCount:0,
            currentPage:1,
        }
    }

    loadBeersFromServer(){
        axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
        .then(res => {
          const beers = res.data;
          this.setState({ 
              beers,
              pageCount: Math.ceil(beers.length / this.state.size),
          });
        })
        .catch(e => console.log('Error on Axios', e.message));
    }

    componentDidMount(){
        this.loadBeersFromServer()
    }

    handleClickNext = () => {
        this.setState({
          currentPage: ++this.state.currentPage
        });
    }
    handleClickPrevious = () => {
        this.setState({
          currentPage: --this.state.currentPage
        });
    }

    render() {
        const { beers,size,pageCount,currentPage} = this.state;

        const indexOfLastPage = currentPage * size;
        const indexOfFirstPage = indexOfLastPage - size;
        const currentBeers = beers.slice(indexOfFirstPage, indexOfLastPage);

        const renderPageNumbers = ()=>{
            return (
                <Pagination  next={this.handleClickNext} previous={this.handleClickPrevious} current={this.state.currentPage}/>
            );
          };

        return (
            <div className="Beers">
            <Header/>
            

            <div className="container d-flex flex-column align-items-center">
            {
                currentBeers.map((beer,idx) => {
                    return (
                        <div className="row beer-item" key={idx}>
                            <div className="col-3">
                                <img src={beer.image_url} alt="beer" className="beerimg"/>
                            </div>
                            <div className="col-9 d-flex flex-column justify-content-center p-2 bd-highlight">
                                <h5 className="card-title">{beer.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
                                <p className="card-text"><b>Created by:</b> {beer.contributed_by}</p>
                                                 
                            </div>
                        </div>
                    )
                })
            }
            {renderPageNumbers()}

            
            </div>
            </div>
            )
    }
}

export default Beers;