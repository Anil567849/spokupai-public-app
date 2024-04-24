import React from 'react';
import Styles from './styles.module.css';

function GoogleSignupBtn({text, googleAuth}) {
  return (
            <button className={Styles.google_btn} onClick={googleAuth}>
                <img src="/google.svg" alt="google icon" />
                <span>{text}</span>
            </button>
  )
}

export default GoogleSignupBtn