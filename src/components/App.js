import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Switch, Route } from 'react-router-dom'


//Pages
import Home from './pages/home/Home'
import ListBeer from './pages/listBeer/ListBeer'
import RandomBeer from './pages/randomBeer/RandomBeer'
import NewBeer from './pages/newBeer/NewBeer'

//Components
import NavBar from './shared/navBar/NavBar'

function App() {
  return (
    <>
    <header><NavBar/></header>

    <main>
          <Switch>
            <Route path='/' exact render={() => <Home/>} />
            <Route path='/list-beer' render={() => <ListBeer />} />
            <Route path='/detail-beer/:id' render={() => <ListBeer />} />
            <Route path='/random-beer/:id' render={props => <RandomBeer {...props} />} />
            <Route path='/new-beer'  render={() => <NewBeer/>} />
          </Switch>
    </main>
    </>
  )
}

export default App;
