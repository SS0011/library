import React,{useState} from 'react'
import CustomInput from '../../Atoms/Input/CustomInput'
import CustomButton from '../../Atoms/Button/CustomButton'
import { Link } from 'react-router-dom'

function SignUp() {

    const [value , setValue] = useState()
  return (
    <>
    <div >
      <h3> First Name  <CustomInput placeHolder='Enter text here'/> </h3> 
      <h3> Last Name  <CustomInput placeHolder='Enter text here'/> </h3> 
      <h3> Email <CustomInput placeHolder='Enter Email here'/> </h3> 
      <h3> Password <CustomInput placeHolder='Enter Password here'/> </h3> 
      <CustomButton buttonText='Submit'/>
    </div>
   <Link to='/login'>LogIn</Link>
    </>
  )
}

export default SignUp
