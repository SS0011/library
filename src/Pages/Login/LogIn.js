import React,{useState} from 'react'
import CustomInput from '../../Atoms/Input/CustomInput'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase';
import { Link } from 'react-router-dom'
import CustomButton from '../../Atoms/Button/CustomButton'
import { useNavigate } from 'react-router-dom';


function LogIn() {

  const navigate = useNavigate()
  const [Email , setEmail] = useState()
  const [Password , setPassword] = useState()

  function handleEmail(e) {
    setEmail(e.target.value)
    console.log(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value)
    console.log(e.target.value);
  }

  const handleSubmit = async () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
    <div>
    <h3> Email <CustomInput placeHolder='Enter Email here' onChange={handleEmail} value={Email}/> </h3> 
      <h3> Password <CustomInput placeHolder='Enter Password here' onChange={handlePassword} value={Password}/> </h3> 
     <CustomButton buttonText='Enter' onClick={handleSubmit}/>
    </div>
    <Link to='/'>SignUp</Link>
    </>
  )
}

export default LogIn
