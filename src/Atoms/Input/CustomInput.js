import React from 'react'

function CustomInput({placeHolder ,onChange,value}) {
  return (
    <div>
      <input placeholder={placeHolder} onChange={onChange} value={value}/>
    </div>
  )
}

export default CustomInput

