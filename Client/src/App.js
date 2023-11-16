import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './Components';
import { Header, Menu , Reservation, Story,Contactus,Gallery,Lunch,Dinner,Admin} from './Attributes';
import Login from './Attributes/Admin/Login';
import Signup from './Attributes/Admin/Signup';
import Adminhome from './Attributes/Admin/Adminhome';
import React, { useRef } from 'react';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { formToJSON } from 'axios';

function App() {
  return (
    <div >      
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route exact path="/Restaurant-Reservation-System" element={<Header/>} />
     <Route  path="/Gallery" element={<Gallery/>} />
     <Route  path="/Story" element={<Story/>} />
     <Route  path="/Contactus" element={<Contactus/>} />
     <Route  path="/Menu" element={<Menu/>} />
     <Route  path="/booknow" element={<Reservation/>} />
     <Route  path="/lunch" element={<Lunch/>} />
     <Route  path="/dinner" element={<Dinner/>} />
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/Adminhome" element={<Adminhome/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;