import './App.css';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
