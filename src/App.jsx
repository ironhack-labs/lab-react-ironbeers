import AppRoutes from './routes/AppRoutes'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />

    </div>
  );
}

export default App;
