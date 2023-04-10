
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import {Route, Routes} from 'react-router-dom';

import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import ErrorPage from './Component/ErrorPage';
import Logout from './Component/Logout';
import { createContext, useReducer } from 'react';
import {reducer, intialState} from './Reducer/userReducer'

export const UserContext = createContext()

function App() {
  
  const [state, dispatch] = useReducer(reducer, intialState)
  console.log(state)
  return (
    
    <div>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/signin" element={<Signin />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
