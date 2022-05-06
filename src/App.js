import './App.css';
import AppRoutes from './routes/AppRoutes';
import Navigation from "./components/Navbar/Navbar";


function App() {

  let showingNavbar = true

  const showNavbar = () => showingNavbar = true
  const unshowNavbar = () => showingNavbar = false


  return (
    <>
      {showingNavbar ? <Navigation /> : <h1>Qué dice el tío?</h1>}
      <AppRoutes showNavbar={showNavbar} unshowNavbar={unshowNavbar} />
    </>
  )
}

export default App;
