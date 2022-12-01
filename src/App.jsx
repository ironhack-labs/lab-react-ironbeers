import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from './routes/AppRoutes';
import Navigator from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <Navigator/>
      <AppRoutes />
    </div>
  );
}

export default App;
