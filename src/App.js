
import { Link } from 'react-router-dom';
import './App.css';
import RootRouter from './RootRoutes';



function App() {
  return (
    <div className="App">
    <nav style={{backgroundColor: '#4AD0EE', height:'30px',paddingTop:'10px'}}><Link to='/'>🏠</Link></nav>
      
      <div >
      
      </div>
    <RootRouter/>
  
    </div>
  );
}

export default App;
