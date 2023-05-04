import React from 'react'

function CustomButton({buttonText,onClick}) {
  return (
    <div>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default CustomButton
