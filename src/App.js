import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <HomePage />
    </div>
  );
}

export default App;



