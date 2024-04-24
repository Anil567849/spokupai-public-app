import React, {useState, useEffect} from 'react'
import {useNavigate, NavLink} from 'react-router-dom';

// react material ui 
import { TextField, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// https 
import Axios from '../../https/https.js';


// styles 
import Styles from '../../css/auth/signup.module.css';


// redux 
import { useDispatch } from 'react-redux'
import {setAuth, setOtp} from '../../store/authSlice.js';


// google captcha 
import ReCAPTCHA from "react-google-recaptcha";


// utils 
import {Constants} from '../../utils/constants.js';
import {checkUserNotAuth} from '../../utils/checkUserAuth.js';
import {isValidEmailID} from '../../utils/formValidation.js';


// components 
import {Loader} from "../../components/loaders/Loader.jsx";
import Button from '../../components/buttons/button/Button.jsx';
import GoogleSignupButton from '../../components/buttons/googleSignup/GoogleSignupBtn';

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch('');
    const [loading, setLoading] = useState(true);

 
    useEffect(() => {
      // to access auth page user must be unauthenticated
      checkUserNotAuth("/", setLoading, navigate);
    }, [])

    const [email, setEmail] = useState('');
    const [captcha, setCaptcha] = useState('');

    function handleCaptcha(value) {
      setCaptcha(value);
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      if(!isValidEmailID(email)){
        alert('Invalid Email ID');
        setLoading(false);
        return;
      }
      
      if(captcha === ''){
        alert('Invalid Captcha');
        setLoading(false);
        return;
      }

      try {
        const {data} = await Axios.login({email, captcha});
        dispatch(setAuth({userId: data.userId}));
        dispatch(setOtp({hashedOtp: data.otp, email}));
        navigate('/auth/otp');
      } catch (error) {
        setLoading(false);
        // console.log(error);
        const er = error?.response?.data?.error || "Something Went Wrong";
        alert(er);
      }
    };

    
    const googleAuth = () => {
      const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL_DEV;
      window.open(
          `${url}/auth/google`, "_self" // hit this url - & pop up signup window | We have added this url in backend as well - no need to add this url in google cloud console - it will just give you the frontend where user choose there gamils
      )
    }

    const googleRecaptchaKey = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_GOOGLE_RECAPTCHA : process.env.REACT_APP_GOOGLE_RECAPTCHA_DEV;
    // console.log(googleRecaptchaKey);
  return (

    <>

      {
        loading ? <Loader loading={loading}/> :

        <div className={Styles.fullHeightWidthWrapper} style={{flexDirection: 'column', padding: '20px 0'}}>
          {/* <div> */}
          
            <div className={Styles.headingContainer}>
              <h1>Login To {Constants.BRAND_NAME}</h1>
              <GoogleSignupButton text="Google Login" googleAuth={googleAuth} />
              <Typography>Or</Typography>
            </div>
          
            <div className={Styles.formContainer}>
              <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />  

                <ReCAPTCHA
                  // https://www.google.com/recaptcha/admin/       = check your domain and site key here
                  size="normal"
                  sitekey={googleRecaptchaKey}
                  onChange={handleCaptcha}
                  className={Styles.captcha}
                />
                <Button text="Login" onClick={handleLogin}/>
                  <Typography variant="body1" style={{marginTop: 20}}>
                    Don't Have Account? <NavLink to="/auth/signup">Sign Up</NavLink>
                  </Typography>
              </form>
            </div>

          {/* </div> */}
        </div>
        
      }
    </>
  )
}

export default Login