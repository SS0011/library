import React,{useState} from 'react'
import CustomInput from '../../Atoms/Input/CustomInput'
import CustomButton from '../../Atoms/Button/CustomButton'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase'
import Navbar from '../../Component/Navbar/Navbar';
import style from './SignUp.module.css'

function SignUp() {

    const [FirstName , setFirstName] = useState()
    const [LastName , setLastName] = useState()
    const [Email , setEmail] = useState()
    const [Password , setPassword] = useState()

    function handleFirstName(e) {
      setFirstName(e.target.value)
      console.log(e.target.value);
    }
    function handleLastName(e) {
      setLastName(e.target.value)
      console.log(e.target.value);
    }
    function handleEmail(e) {
      setEmail(e.target.value)
      console.log(e.target.value);
    }
    function handlePassword(e) {
      setPassword(e.target.value)
      console.log(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      await createUserWithEmailAndPassword(auth, Email, Password, )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/login")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    };
   
  return (
    <>
    <Navbar/>
    <div  className={style.main}>
      <h3> First Name  <CustomInput placeHolder='Enter text here' onChange={handleFirstName} value={FirstName}/> </h3> 
      <h3> Last Name  <CustomInput placeHolder='Enter text here' onChange={handleLastName} value={LastName}/> </h3> 
      <h3> Email <CustomInput placeHolder='Enter Email here' onChange={handleEmail} value={Email}/> </h3> 
      <h3> Password <CustomInput placeHolder='Enter Password here' onChange={handlePassword} value={Password}/> </h3> 
      <CustomButton buttonText='Submit' onClick={handleSubmit}/>
    </div>
   <Link to='/login'>LogIn</Link>
    </>
  )
}

export default SignUp
