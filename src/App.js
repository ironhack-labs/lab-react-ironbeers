import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar/NavigationBar'

import AppRoutes from './routes/AppRoutes'


function App() {
  return (
    <div className="App">
      <NavigationBar />

      <AppRoutes />
    </div>
  );
}

export default App;
