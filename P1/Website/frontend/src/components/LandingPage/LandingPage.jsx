import { useEffect } from 'react';
import styles from './LandingPage.module.css';

function LandingPage() {
  
    useEffect(() => {
        
    }, []);
  
    return (
      <div className={styles.backgroundImage}>
        <div className={styles.title}>
            <h1>
                KYCKFLIP
            </h1>
        </div>
            <div className={styles.marginMaker} >
                <div className={styles.margin30px}>
                    <h1>Do a KyckFlip!</h1>
                    <div className={styles.justifySelfCenter}>
                        <span className={styles.leftSideSignButton}>
                            <a href="/login" className={styles.signInButtonColor}>
                            Login
                            </a>
                        </span>
                        <span>
                            <a href="/signup" className={styles.signInButtonColor}>
                                Sign Up
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.lowerBox}>
                <div className={styles.margin20px}>
                    {`This site doesn't do much yet, but it will. Team Kyck is on the job!`}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;