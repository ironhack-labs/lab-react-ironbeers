import React from 'react'



const BeerDetails = (props) => {
    console.log(props);
    let getBeer = id => this.props.beers.find(obj => obj.id === id);

    const { params } = this.props.match;
    console.log(this.props.match);

    const foundBeer = getBeer(params.id)

    return (
        <div className="col-7">
        <img src={foundBeer.image_url} alt=""/>
        <h1>{foundBeer.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className={{width: "30%"}}>Capital</td>
              <td>{foundBeer.tagline}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundBeer.description} km
                <sup>2</sup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

       
    )
}

export default BeerDetails
