import { createBrowserRouter } from "react-router-dom"
import React from 'react'
import Root from './assets/pages/Root'
import { HomePage } from "./assets/pages/HomePage"
import Beers from "./assets/pages/Beers"
import RandomBeer from "./assets/pages/RandomBeer"
import NewBeer from "./assets/pages/NewBeer"
import { BeerLoader } from "./assets/pages/Beers"
import { beerDetailsLoader } from "./assets/pages/BeerDetails"
import BeerDetails from "./assets/components/BeerDetails"

const router = createBrowserRouter([
  {
      path: '/',
      element:<Root/>,
      children:[
          {
              path:"/",
              element:<HomePage/>
          },
          {  
              path:'beers',
              loader: BeerLoader,
              element:<Beers/>
            },
              {
                  path:'/:id',
                  loader: beerDetailsLoader,
                  element:<BeerDetails/>
              },
            {
              path:"random-beer",
              element:<RandomBeer/>
            },
            {
                path:"new-beer",
                element:<NewBeer/>
            }
        ]
    }
])  

export default router