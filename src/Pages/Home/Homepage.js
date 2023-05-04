import React,{useState,useEffect} from 'react';
import {auth} from '../../Firebase';
import { onAuthStateChanged } from "firebase/auth";

function Homepage() {

    const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email;
        // ...
        console.log("uid", uid);
        setEmail(user.email);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  })

  return (
    <div>
      <h1>Home Page{email}</h1>
    </div>
  )
  }

export default Homepage
