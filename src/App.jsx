
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './components/routes/AppRoutes';
import Navigation from './components/NavBar/Navbar'
// import { useEffect, useState } from 'react';




function App() {

  // const [beers, setBeers] = useState([])



  return (
    <div className="App">
      <Navigation />

      <AppRoutes />


    </div>
  );
}

export default App;
