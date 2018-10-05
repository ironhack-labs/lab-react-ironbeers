import React from 'react';

const SingleBeer = ({beer}) => {
  let {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = beer
  return (
    <main className="container">
      <div className="section" style={{textAlign: "center"}} >
        <img src={image_url} style={{height: "430px"}}/>
      </div>
      <div class="section">
        <div className="columns">
          <div className="column">
            <h1 className="title is-4">{name}</h1>
          </div>
          <div className="column">
            <p className="title is-4 has-text-grey-light ">{attenuation_level}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="title is-5  has-text-grey-light">{tagline}</h1>
          </div>
          <div className="column">
            <p className="subtitle ">{first_brewed}</p>
          </div>
        </div>
        <div>
          <p>{description}</p>
          <p className="has-text-grey-dark has-text-weight-bold">{contributed_by}</p>
        </div>
      </div>
    </main>
  )
} 

export default SingleBeer;




