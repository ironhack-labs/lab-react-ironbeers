import './App.css';
import {Home} from "./components/Home"
import {Routes, Route} from "react-router-dom"
import {Beers} from './components/Beers';
import {RandomBeer} from './components/RandomBeer';
import {NewBeer} from './components/NewBeer';
import {SingleBeer} from "./components/SingleBeer"
import {useState} from "react"

function App() {
    const [beers, setBeers] = useState(null)

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beers" element={<Beers beers={beers} setBeers={setBeers} />} />
                <Route path="/random-beer" element={<RandomBeer beers={beers} />} />
                <Route path="/new-beer" element={<NewBeer />} />
                <Route path="/:id" element={<SingleBeer beers={beers} />} />
            </Routes>
        </div>
    );
}

export default App;
