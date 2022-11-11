import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/:countryCode" element={<CountryDetails />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
