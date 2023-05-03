import React from 'react'
import CustomInput from '../../Atoms/Input/CustomInput'
import CustomButton from '../../Atoms/Button/CustomButton'

function SignUp() {
  return (
    <div >
      <h3> First Name  <CustomInput/> </h3> 
      <h3> Last Name  <CustomInput/> </h3> 
      <h3> Email <CustomInput/> </h3> 
      <h3> Password <CustomInput/> </h3> 
      <CustomButton buttonText='Submit'/>
    </div>
  )
}

export default SignUp
