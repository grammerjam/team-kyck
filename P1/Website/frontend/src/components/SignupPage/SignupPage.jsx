'use client'
import {useState} from 'react'
import styles from "./Login.module.css"

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const [eMessage, setEMessage] = useState("");
  const [pMessage, setPMessage] = useState("");
  const [pcMessage, setPCMessage] = useState("");
  const [fnMessage, setFNMessage] = useState("");
  const [lnMessage, setLNMessage] = useState("");
  const [unMessage, setUNMessage] = useState("");
  
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isPasswordCheckError, setIsPasswordCheckError] = useState(false) 
  const [isFirstNameError, setIsFirstNameError] = useState(false)
  const [isLastNameError, setIsLastNameError] = useState(false)
  const [isUsernameError, setIsUsernameError] = useState(false)

  const validate=()=>{
    emailValidation()
    passwordValidation()
    passwordCheckValidation()
    cantBeEmptyValidation(firstName, setFNMessage, setIsFirstNameError)
    cantBeEmptyValidation(lastName, setLNMessage, setIsLastNameError)
    cantBeEmptyValidation(username, setUNMessage, setIsUsernameError)
  }

  const cantBeEmptyValidation=(strVal, messageSetter, errorCallback)=>{
    //This regex is from stack overflow somewhere
    if(strVal.length > 0){
      messageSetter("");
      errorCallback(false)
    }
    else {
      messageSetter("Can't be empty");
      errorCallback(true)
    }
  }

  const emailValidation=()=>{
    //This regex is from stack overflow somewhere
    const regEx = /^\w*@([\w-]+\.)+[\w-]{2,4}$/;
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
  
  const passwordCheckValidation=()=>{
    if(password == passwordCheck && password != ""){
      setPCMessage("");
      setIsPasswordCheckError(false)
    }
    else {
      setPCMessage("Passwords must match");
      setIsPasswordCheckError(true)
    }
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleOnPasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleOnFNChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleOnLNChange = (e) => {
    setLastName(e.target.value)
  }
  const handleOnUNChange = (e) => {
    setUsername(e.target.value)
  }
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
                Sign Up<br/>
              </h1>
            </div>

            <div className={styles.relativePos}>
              <p className={isFirstNameError ? styles.inputError : styles.noError}>
                {fnMessage}
              </p>
              <input className={styles.loginInput} placeholder="First name" aria-required="true" onChange={handleOnFNChange} value={firstName} required/>
            </div>
            <br/>

                <div className={styles.relativePos}>
              <p className={isLastNameError ? styles.inputError : styles.noError}>
                {lnMessage}
              </p>
              <input className={styles.loginInput} placeholder="Last name" aria-required="true" onChange={handleOnLNChange} value={lastName} required/>
            </div>
            <br/>


             <div className={styles.relativePos}>
              <p className={isUsernameError ? styles.inputError : styles.noError}>
                {unMessage}
              </p>
              <input className={styles.loginInput} placeholder="Username" aria-required="true" onChange={handleOnUNChange} value={username} required/>
            </div>
            <br/>
            
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
            
            <div className={styles.relativePos}>
            <p className={isPasswordCheckError ? styles.inputError : styles.noError}>
                {pcMessage}
              </p>
            <input className={styles.loginInput} type="password" placeholder="Repeat password" aria-required="true" onChange={handleOnPasswordCheckChange} value={passwordCheck} required/>
            </div>
            <br/>
            <button onClick={validate} className={styles.loginButtonSubmit}>Login to your account</button>
            <br/>
            <p className={styles.loginSignUpCon}>
                {`Don't have an account? `}
              <a href="/login" className={styles.loginSignUpLink}> Login
              </a>
              <br/>
            </p>
          </div>
    </div>
  );
}
