import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="App">

      <Navigation />
      <AppRoutes />

    </div>
  );
}

export default App;
