import AppRoutes from '../routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header/Header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function App() {

  const [path, setPath] = useState(window.location.pathname)

  let location = useLocation()

  useEffect(() => {

    setPath(location.pathname)
  }, [location])

  return (
    <div className="App">
      {path !== '/' && <Header />}
      <AppRoutes />
    </div>
  );
}

export default App;
