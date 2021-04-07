import React from 'react'

const BeerOne = ({ name, image_url, tagline, description, brewers_tips }) => {
  const dot = {
    height: 35,
    width: 35,
    backgroundColor: "#a90000",
    color: "#ffffff",
    borderRadius: "50%",
    display: "inline-block",
    lineHeight: "0.7rem"
  }
  return (
    <div className="container px-5 pb-5">
      <div className="row justify-content-center ">
        <h1>{name}</h1>
        <h5>{tagline}</h5>
        <p>{description}</p>
        <img src={image_url} alt={name} style={{width: 150, padding: 5}}/>
        <div style={{width: 280, padding: "10px 20px", marginTop: 20, border: "1px solid #a90000"}}>
          <span className="text-center mb-2" style={dot}><br/>TIPS</span>
          <p style={{lineHeight: "1rem"}}><small><i>{brewers_tips}</i></small></p>
        </div>
      </div>
    </div>
  )
}

export default BeerOne
