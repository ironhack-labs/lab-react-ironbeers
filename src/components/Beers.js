import React from 'react';
import Header from './Header';




class Beers extends React.Component {
    render(){
    return (
        <div className='beer-container'>
        <Header/>

        <h2>All Beers</h2>
        </div>
    )
    }
}


export default Beers;