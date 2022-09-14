import {Home, AllBeers, RandomBeer, NewBeer} from '../pages'

export const routes = [
  { path: '/home', component: <Home />},
  { path: '/all-beers', component: <AllBeers />},
  { path: '/random-beer', component: <RandomBeer />},
  { path: '/new-beer', component: <NewBeer />},
]