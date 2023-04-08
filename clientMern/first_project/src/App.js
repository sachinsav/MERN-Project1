
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import {Route, Routes} from 'react-router-dom';

import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import ErrorPage from './Component/ErrorPage';

function App() {
  return (
    
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      
      <Route path="/contact" element={<Contact />} />

      <Route path="/about" element={<About />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
