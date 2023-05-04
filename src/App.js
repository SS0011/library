import React from 'react';
import { Route,Routes } from 'react-router-dom';
import SignUp from './Pages/Signup/SignUp';
import LogIn from './Pages/Login/LogIn';
import Homepage from './Pages/Home/Homepage';


function App() {
  return (
    <div className="App">
      <Routes>     
        
          <Route path ='/' element={<SignUp/>}/>
          <Route path ='/login' element={<LogIn/>}/>
          <Route path ='/home' element={<Homepage/>} />

      </Routes>
 


   
    </div>
  );
}

export default App;
