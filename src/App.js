import './App.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Maindiv from './components/Maindiv';
import Footer from './components/Footer';

function App() {
  return (
    <Router>     
      <div className="app"> 
        <Navbar/>
        <Maindiv/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
