import React from 'react'
import './App.css';
import Home from "./components/home"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />


        </Switch>

      </BrowserRouter>

    </>


  )

}

export default App;
