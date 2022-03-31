import { Routes, Route} from "react-router";
import Home from './views/home/Home'
import "./App.css";

function App() {
      return (
<div className='App'>
  <Routes>
    <Route path='/' element={<Home/>} />
  </Routes>
</div>
    );
}

export default App;
