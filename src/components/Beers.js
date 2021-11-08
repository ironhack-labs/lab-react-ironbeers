import React from 'react';




class Beers extends React.Component {
    render(){
    return (
        <div className='beer-container'>
           <img className="beers-image" src="../assets/beers.png" alt="beer tabs" />

           <h2>All Beers</h2>
        </div>
    )
    }
}


export default Beers;