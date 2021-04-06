import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import BeatLoader from "react-spinners/BeatLoader";
import { getBeers } from '../../baseService/baseService';
import './Beers.css'

const Beers = () => {
  const [states, setState ] = useState({
    allBeers: [],
    loader: true
  })

  const fetchData  = async () => {
    const allBeers = await getBeers()
    setState({ allBeers, loader: false })
  }

  useEffect (() => {
    fetchData()
  },[])


  return (
    <div className="Beers">
      {
        states.loader
        ? <div className="spin" ><BeatLoader size={15} /></div>
        : (
              <div className="container site-card-wrapper">
                <div className="row justify-content-center">
                  { 
                    states.allBeers.map((b) => { 
                      return (
                        <div className="col-card col-lg-4 mb-3" key={b._id} >
                          <Link to={`/beer/${b._id}`} >
                            <Card hoverable title={b.name} >
                              <img className="pic-card" src={b.image_url} alt={b.name}/>
                              <p className="line-tag-card text-center">{b.tagline}</p>
                            </Card>
                          </Link>
                        </div>  
                      )
                    })
                  }
                </div>
              </div>
        )
      }
    </div>
  )
}

export default Beers
