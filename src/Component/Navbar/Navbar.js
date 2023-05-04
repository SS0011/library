import React from 'react'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <div className={style.Navbar}>
      <span>Logo</span>
      <span>Home</span>
       <span>signUp</span>
       <span>Login</span>
    </div>
  )
}

export default Navbar
