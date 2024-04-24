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
import {isValidEmailID, isValidName, isValidCountry} from '../../utils/formValidation.js';


// components 
import {Loader} from "../../components/loaders/Loader.jsx";
import Button from '../../components/buttons/button/Button.jsx'
import GoogleSignupButton from '../../components/buttons/googleSignup/GoogleSignupBtn';


function Signup() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

 
    useEffect(() => {
      // to access auth page user must be unauthenticated
      checkUserNotAuth("/", setLoading, navigate);
    }, [])

    const dispatch = useDispatch('');

    const [userDetail, setUserDetail] = useState({
        firstname: '', lastname : '', email : '', country : 'India', captcha: '',
    });

    const [dob, setDob] = useState(null);

    function handleInput(e) {
        setUserDetail((old) => {
          return { ...old, [e.target.name]: e.target.value };
        });
    }

    function handleCaptcha(value) {
        setUserDetail((old) => {
          return { ...old, captcha: value };
        });
    }
    
    const handleSignup = async (e) => {
      e.preventDefault();
      setLoading(true);
      if(!isValidName(userDetail.firstname) || !isValidName(userDetail.lastname)){
        alert('Invalid Fields - firstName, and lastName only contain [a to z or A to Z] character under 10');
        setLoading(false);
        return;
      }


      if(!isValidCountry(userDetail.country)){
        alert('Invalid Country only contain [a to z or A to Z] character under 60');
        setLoading(false);
        return;
      }
      
      if(!isValidEmailID(userDetail.email)){
        alert('Invalid Email Id');
        setLoading(false);
        return;
      }
      
      if(userDetail.captcha === ''){
        alert('Invalid Captcha');
        setLoading(false);
        return;
      }
      
      if(!dob){
        setLoading(false);
        return alert ('Enter date of birth')
      }

      const dateOfBirth = {
        date : dob.$D,
        month : dob.$M + 1, // it is 0 based
        year : dob.$y,
      }

      try {
        const {data} = await Axios.signup({email: userDetail.email, captcha: userDetail.captcha});

        dispatch(setAuth({firstName: userDetail.firstname, lastName: userDetail.lastname, email: userDetail.email, country: userDetail.country, dateOfBirth, userId: null}));

        dispatch(setOtp({hashedOtp: data.otp, email: userDetail.email}));

        navigate('/auth/otp');
      } catch (error) {
        setLoading(false);
        // console.log(error);
        const er = error?.response?.data?.error || "Something Went Wrong";
        alert(er);

      }
    };

    const googleRecaptchaKey = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_GOOGLE_RECAPTCHA : process.env.REACT_APP_GOOGLE_RECAPTCHA_DEV;


    const googleAuth = () => {
      const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL_DEV;
      window.open(
        `${url}/auth/google`, "_self" // hit this url - & pop up signup window | We have added this url in backend as well - no need to add this url in google cloud console - it will just give you the frontend where user choose there gamils
      )
    }


  return (
    <>
      {
        loading ? <Loader loading={loading}/> : 

        <div className={Styles.fullHeightWidthWrapper} style={{flexDirection: 'column', padding: '20px 0'}}>
          <div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <h1>Signup To {Constants.BRAND_NAME}</h1>
              <GoogleSignupButton text="Google Signup" googleAuth={googleAuth} />
              <Typography>Or</Typography>
            </div>

            <div className={Styles.formContainer}>
              <form onSubmit={handleSignup}>
              <TextField
                  label="First Name"
                  name="firstname"
                  value={userDetail.firstname}
                  onChange={(e) => handleInput(e)}
                  fullWidth
                  required
                  margin="normal"
              />
              <TextField
                  label="Last Name"
                  name="lastname"
                  value={userDetail.lastname}
                  onChange={(e) => handleInput(e)}
                  fullWidth
                  required
                  margin="normal"
              />
              <TextField
                  label="Email ID"
                  name="email"
                  value={userDetail.email}
                  onChange={(e) => handleInput(e)}
                  fullWidth
                  required
                  margin="normal"
              />    
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                  <DatePicker value={dob} onChange={setDob} />
              </DemoContainer>
              </LocalizationProvider>
              {/* <TextField
                  label="Country"
                  name="country"
                  value={userDetail.country}
                  onChange={(e) => handleInput(e)}
                  fullWidth
                  required
                  margin="normal"
              /> */}

              <ReCAPTCHA
                  // https://www.google.com/recaptcha/admin/       = check your domain and site key here
                  sitekey={googleRecaptchaKey} // testing key only
                  onChange={handleCaptcha}
                  className={Styles.captcha}
                />  

              <Button text="Signup" onClick={handleSignup}/>

              <Typography variant="body1" style={{marginTop: 20}}>
                    Already have an account? <NavLink to="/auth/login">Log In</NavLink>
              </Typography>
              </form>
            </div> 

          </div>
        </div>
      
      }
    </>

  )
}

export default Signup