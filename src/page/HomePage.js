import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"



const HomePage = () => {

    


                return (
                    <div>

                    <div>
                      <img src="../assets/beers.png" />
                        <Link to={"/beers"}>All Beers</Link>
                        <p>lorem ipsum</p>
                    </div>

                    <div>
                      <img src="../assets/new-beer.png" />
                        <Link to={"/beers/random-beer"}>Random Beers</Link>
                        <p>lorem ipsum</p>
                    </div>

                    <div>
                      <img src="../assets/random-beer.png" />
                        <Link to={"/beers/new-beer"}>New Beer</Link>
                        <p>lorem ipsum</p>
                    </div>

                    </div>
                )
        }

export default HomePage


