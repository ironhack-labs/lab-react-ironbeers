import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="Card">
                    <img src="/images/beers.png" alt="All Beers"></img>
                    <br></br>
                    <Link to="/beers">All Beers </Link>  
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida mollis, primis vivamus fusce sed netus aenean in condimentum suspendisse, dignissim id quis proin cum porttitor venenatis sagittis. Imperdiet donec porta libero porttitor consequat vehicula ante ut proin, leo mus non aenean luctus fusce orci vestibulum viverra egestas, ad pellentesque magnis malesuada a est erat nunc. Praesent ante phasellus semper ultrices aptent lobortis magna faucibus malesuada, et posuere class ut sapien potenti ullamcorper molestie fames pellentesque, dapibus natoque litora sociosqu cubilia dui ultricies sollicitudin. </p>
                </div>
                <div className="Card">
                    <img src="/images/random-beer.png" alt="Random Beer"></img>
                    <br></br>
                    <Link to="/random-beer">Random Beer </Link>  
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida mollis, primis vivamus fusce sed netus aenean in condimentum suspendisse, dignissim id quis proin cum porttitor venenatis sagittis. Imperdiet donec porta libero porttitor consequat vehicula ante ut proin, leo mus non aenean luctus fusce orci vestibulum viverra egestas, ad pellentesque magnis malesuada a est erat nunc. Praesent ante phasellus semper ultrices aptent lobortis magna faucibus malesuada, et posuere class ut sapien potenti ullamcorper molestie fames pellentesque, dapibus natoque litora sociosqu cubilia dui ultricies sollicitudin. </p>
                </div>
                <div className="Card">
                    <img src="/images/new-beer.png" alt="New Beers"></img>
                    <br></br>
                    <Link to="/new-beer">New Beer </Link>  
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida mollis, primis vivamus fusce sed netus aenean in condimentum suspendisse, dignissim id quis proin cum porttitor venenatis sagittis. Imperdiet donec porta libero porttitor consequat vehicula ante ut proin, leo mus non aenean luctus fusce orci vestibulum viverra egestas, ad pellentesque magnis malesuada a est erat nunc. Praesent ante phasellus semper ultrices aptent lobortis magna faucibus malesuada, et posuere class ut sapien potenti ullamcorper molestie fames pellentesque, dapibus natoque litora sociosqu cubilia dui ultricies sollicitudin. </p>
                </div>
            </>
        )
    }
}
