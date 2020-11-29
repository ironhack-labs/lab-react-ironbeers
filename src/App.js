import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'

// function Home(){
//   return (
//     <h1>
//       HOME
//     </h1>
//   )
// }


function App() {
  return (
    <div style={{margin:"50px 80px"}}>
      <Router>
        {/* <Layout> */}
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/beers' component={AllBeers}/>
          </Switch>
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
