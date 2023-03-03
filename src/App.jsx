import './App.css';
import BeersRoutes from './routes/BeersRoutes';
import Navigation from './components/Navigation/Navigation';



const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BeersRoutes />
    </div>
  )
}

export default App;
