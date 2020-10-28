import './App.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Maindiv from './components/Maindiv';

function App() {
  return (
    <Router>     
      <div className="app"> 
        <Navbar/>
        <Maindiv/>
      </div>
    </Router>
  );
}

export default App;
