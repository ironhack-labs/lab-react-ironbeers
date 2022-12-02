
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/navigation';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">

      <Navigation />
      <AppRoutes />


    </div>
  );
}

export default App;
