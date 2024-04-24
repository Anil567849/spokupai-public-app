import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';


// react material ui 
import { TextField, Typography } from '@mui/material';


// https 
import Axios from '../../https/https.js'


// styles 
import Styles from '../../css/auth/signup.module.css';


// redux 
import { useSelector } from 'react-redux';


// utils 
import {checkUserNotAuth} from '../../utils/checkUserAuth.js';
import {isValidOTP} from '../../utils/formValidation.js';


// components 
import {Loader} from "../../components/loaders/Loader.jsx";
import Button from '../../components/buttons/button/Button.jsx';



function Otp() {
    const navigate = useNavigate();    
    const [loading, setLoading] = useState(true);
    
    const userData = useSelector(state => state.auth);
    const [otp, setOtp] = useState('');

    useEffect(() => {
      // to access auth page user must be unauthenticated
      checkUserNotAuth("/", setLoading, navigate);

        if(!userData.hashedOtp && !userData.firstName){
            navigate('/auth/signup');
        }else if(!userData.hashedOtp){
            navigate('/auth/login');
        }
    }, []);

    const handleOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(!isValidOTP(otp)){
          alert('Otp must be digit of length 6');
          setLoading(false);
          return;
        }

        if(userData.firstName){ // if firstName is set mean user is coming from signup page
          try {
            const {data} = await Axios.verifyOtp({
                firstName : userData.firstName,
                lastName : userData.lastName,
                email : userData.email,
                country : userData.country,
                dob : userData.dateOfBirth,
                userOtp : otp,
                hashedOtp: userData.hashedOtp,
                page: 'SIGNUP',
                userId: null,
              });
              
            if(data.verified){
              navigate('/');
            }else{
              if(data.data){
                alert(data.data);
                navigate('/auth/signup');
              }else{
                setLoading(false);
                alert('otp mismatched')
              }
              
            }
          } catch (error) {
            setLoading(false);
            alert('something went wrong');
          }
        }else{
          try {
            const {data} = await Axios.verifyOtp({
                email : userData.email,
                userOtp : otp,
                hashedOtp: userData.hashedOtp,
                page: 'LOGIN',
                userId: userData.userId,
              });
              
            if(data.verified){
              navigate('/');
            }else{
              if(data.data){
                alert(data.data);
                navigate('/auth/login');
              }else{
                setLoading(false);
                alert('otp mismatched')
              }
              
            }
          } catch (error) {
            setLoading(false);
            alert('something went wrong');
          }
        }
    
    }
    

  
  
      return (

    <>
      {
        loading ? <Loader loading={loading}/> : 

        <div className={Styles.fullHeightWidthWrapper} style={{flexDirection: 'column'}}>
            <div className={Styles.formContainer}>
              <h1>Enter OTP</h1>
            </div>
          <div className={Styles.formContainer}>
              <form onSubmit={handleOtp}>
              <TextField
                  label="Otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  fullWidth
                  required
                  margin="normal"
              />
              <Typography sx={{padding: '10px 0'}}>Check Your Email for OTP</Typography>
              <Button text="Submit" onClick={handleOtp}/>
              </form>
          </div>
        </div>

      }
    </>
  )
}

export default Otp