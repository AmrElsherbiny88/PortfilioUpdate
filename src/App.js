import './App.css';
import {BrowserRouter , Link , NavLink , Route, Routes} from "react-router-dom"
import "./css/background.css"
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='body'>
      
          <BrowserRouter>
     
     <Navbar />
     
    <preloder />
  <Routes>
       <Route path="/" element={<Home />} /> 
  </Routes>
 
  <div id='stars'></div>
     <div id='stars2'></div>
     <div id='stars3'></div>
  </BrowserRouter>
    </div>

  );
}

export default App;
