import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';

// https 
import Axios from "../../https/https.js";


// styles 
import Styles from '../../css/auth/auth.module.css';


// utils 
import {Constants} from '../../utils/constants.js';
import {checkUserNotAuth} from '../../utils/checkUserAuth.js';


// components 
import {Loader} from "../../components/loaders/Loader.jsx";
import Button from '../../components/buttons/button/Button.jsx';


function Auth() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      // to access auth page user must be unauthenticated
      checkUserNotAuth("/", setLoading, navigate);
    }, [])

    
    function handleLogin() {
        navigate('/auth/login');
    }

    function handleSignup() {
        navigate('/auth/signup');
    }
    function handleWithoutAccount() {
        navigate('/');
    }
  return (

    <>
      {
        loading ? <Loader loading={loading}/> : 

        <div className={Styles.fullHeightWidthWrapper}>
          <div className={Styles.container}>
                <div className={Styles.headingContainer}>
                    <h1 className={Styles.heading}>Welcome To {Constants.BRAND_NAME}</h1>
                </div>
                <div className={Styles.buttonContainer}>
                    <Button text="Log in" onClick={handleLogin}/>
                    <Button text="Sign up" onClick={handleSignup}/>
                </div>
            </div>
        </div>
        
      }
    </>
  ) 
}

export default Auth;