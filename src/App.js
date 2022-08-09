import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavigationBar from './Components/Body/NavigationBar/NavigationBar';
import Home from './Components/Body/Home/Home';
import Test from './Components/Body/Test/Test';
import GridCard from './Components/Body/GridCard/GridCard';
import ToggleButton from './Components/Body/ToggleButton/ToggleButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="toggle-button"  element={<ToggleButton/>} />
          <Route path="grid-card"  element={<GridCard/>} />
          <Route path="navigation-bar"  element={<NavigationBar/>} />

          
          
          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
