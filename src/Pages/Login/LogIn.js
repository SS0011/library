import React from 'react'
import CustomInput from '../../Atoms/Input/CustomInput'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <>
    <div>
     <h3> Email <CustomInput placeHolder='Enter Email here'/> </h3> 
      <h3> Password <CustomInput placeHolder='Enter Password here'/> </h3> 
    </div>
    <Link to='/'>SignUp</Link>
    </>
  )
}

export default LogIn
