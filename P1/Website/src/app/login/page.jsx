import Image from "next/image";
import styles from "./Login.module.css"


export default function Home() {
  return (
    <div className={styles.background}>
    <div>

        <div className={styles.loginImgCon}>
            <img src="/assets/logo.svg" alt="KyckFlix logo." />
        </div>
        
          <div className={styles.loginInfoCon}>
            <h1 className={styles.loginTitle}>
                Login<br/>
            </h1>
            <input className={styles.loginInput} type="email" placeholder="Email address" aria-required="true" required/>
            <br/>
            <input className={styles.loginInput} type="password" placeholder="Password" aria-required="true" required/>
            <br/>
            <button className={styles.loginButtonSubmit}>Login to your account</button>
            <br/>
            <p className={styles.loginSighUpCon}>
                Don't have an account? <a className={styles.loginSignUpLink} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sign Up</a>
            </p>
        </div>
    </div>
    </div>
  );
}
