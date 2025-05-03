'use client'
import {useState} from 'react'
// import Image from "next/image";
import styles from "./Login.module.css"
// import Link from 'next/link'
// import { relative } from 'path';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eMessage, setEMessage] = useState("");
  const [pMessage, setPMessage] = useState("");
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const validate=()=>{
    emailValidation()
    passwordValidation()
  }

  const emailValidation=()=>{
    const regEx = /^$/;
    // const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(regEx.test(email)){
      setEMessage("");
      setIsEmailError(false)
    }
    else if (!regEx.test(email) && email != ""){
      setEMessage("Can't be invalid");
      setIsEmailError(true)
    }
    else {
      setEMessage("Can't be empty");
      setIsEmailError(true)
    }
  };

  const passwordValidation=()=>{
    if(password.length > 0){
      setPMessage("");
      setIsPasswordError(false)
    }
    else {
      setPMessage("Can't be empty");
      setIsPasswordError(true)
    }
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const getErrorState = () => {
  //   if(!isValid){
  //     return styles.noError
  //   }
  //   else{
  //     return styles.inputError
  //   }
  // }

  return (
    <div>
        <div className={styles.loginImgCon}>
            <img src="/assets/logo.svg" alt="KyckFlix logo." />
        </div>
        

          <div className={styles.loginInfoCon} >
            
            <div className={styles.relativePos}>
              <h1 className={styles.loginTitle}>
                Login<br/>
              </h1>
            </div>

            <div className={styles.relativePos}>
              <p className={isEmailError ? styles.inputError : styles.noError}>
                {eMessage}
              </p>
              <input className={styles.loginInput} type="email" placeholder="Email address" aria-required="true" onChange={handleOnEmailChange} value={email} required/>
            </div>

            <br/>
            <div className={styles.relativePos}>
            <p className={isPasswordError ? styles.inputError : styles.noError}>
                {pMessage}
              </p>
            <input className={styles.loginInput} type="password" placeholder="Password" aria-required="true" onChange={handleOnPasswordChange} value={password} required/>
            </div>
            <br/>
            <button onClick={validate} className={styles.loginButtonSubmit}>Login to your account</button>
            <br/>
            <p className={styles.loginSignUpCon}>
                {`Don't have an account? `}
              <a href="/signup" className={styles.loginSignUpLink}> Sign Up
              </a>
              <br/>
            </p>
            </div>
    </div>
  );
}

// import { useEffect } from 'react';
// import './LoginPage.css';

// function LoginPage() {
  
//     useEffect(() => {
        
//     }, []);
  
//     return (
//       <>
//         LoginPage
//       </>
//     );
// }

// export default LoginPage;