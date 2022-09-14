import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom"

import { routes } from './router'
import { Header } from "./components"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        {routes.map(route => (
          <> 
            <Route path={route.path} element={
                <>
                  <Header />
                  {route.component}
                </>
              } 
              key={route.path} exact />
          </>
        ))}
      </Routes>
    </BrowserRouter>
    );
}

export default App;