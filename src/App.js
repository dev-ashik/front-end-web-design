import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavigationBar from './Components/Body/NavigationBar/NavigationBar';
import Home from './Components/Body/Home/Home';
import Test from './Components/Body/Test/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="navigation-bar"  element={<NavigationBar/>} />

          
          
          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
