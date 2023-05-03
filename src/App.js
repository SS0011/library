import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import SignUp from './Pages/Signup/SignUp';
import LogIn from './Pages/Login/LogIn';


function App() {
  return (
    <div className="App">
      <Routes>     
        
          <Route path ='/' element={<SignUp/>}/>
          <Route path ='/login' element={<LogIn/>}/>

      </Routes>
 


   
    </div>
  );
}

export default App;
