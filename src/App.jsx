import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div>
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
