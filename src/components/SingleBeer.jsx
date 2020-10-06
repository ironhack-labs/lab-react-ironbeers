import React from 'react'

class SingleBeer extends React.Component {

  state = {
    singlebeer: "",
  }

  getSingleBeer() {
    const oneBeer = this.props.match.params.id
    console.log(oneBeer);
  }

  render() {

    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={ {width: '50px'}} className="card-img-top" alt="hola" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
        </div>
      </div>
    )
  }
}

export default SingleBeer