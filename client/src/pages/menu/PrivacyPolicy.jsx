import React, {useEffect, useState} from 'react';


// react material ui 
import Typography from '@mui/material/Typography';


// utils
import {pageLoaded} from '../../utils/pageLoaded.js';


// styles 
import SharedStyles from '../../css/shared.module.css';


// components
import Header from '../../components/Header.jsx';
import {Loader} from "../../components/loaders/Loader.jsx";


function PrivacyPolicy() {   
     
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        pageLoaded(() => {
            setLoading(false);
        })
    }, []);

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <section className={SharedStyles.sectionCategory}>
                        <div>
                            <div className={SharedStyles.headingContainer}>
                                <h1 className={SharedStyles.h1Heading}>Our Privacy Policy</h1>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Privacy Policy</Typography>
                                <Typography>Effective Date: 07/Dec/2023</Typography>
                                <Typography>Welcome to SpokUpAI. This Privacy Policy outlines the types of information we collect, how we use and protect that information, and your choices regarding the collection and use of your information.</Typography>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Information We Collect</Typography>
                                <Typography>We collect the following personal information when you use our website:</Typography>
                                <ul>
                                    <li><Typography>Name</Typography></li>
                                    <li><Typography>Email Address</Typography></li>
                                    <li><Typography>Country</Typography></li>
                                    <li><Typography>Date of Birth</Typography></li>
                                </ul>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>How We Use Your Information</Typography>
                                <Typography>We use the collected information for the following purposes:</Typography>
                                <ul>
                                    <li><Typography>To provide and improve our English learning services.</Typography></li>
                                    <li><Typography>To process subscription payments through Razorpay.</Typography></li>
                                    <li><Typography>To communicate with you about our services and updates.</Typography></li>
                                    <li><Typography>To comply with legal obligations.</Typography></li>
                                </ul>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Payment Information</Typography>
                                <Typography>If you subscribe to our services and make payments through Razorpay, we do not store your payment information. Razorpay handles all payment processing, and you can review their privacy policy.</Typography>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Third-Party Services</Typography>
                                <Typography>Our website uses Razorpay for payment processing. Please review Razorpay's privacy policy for information on how they handle your data.</Typography>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Cookies</Typography>
                                <Typography>Cookies are small pieces of data stored on your device (computer or mobile device) when you visit our website. They serve various purposes, including remembering user preferences, improving user experience, and helping us understand how users interact with our website. We use cookies when you sign in or log in to our English learning product. These cookies are essential for the proper functioning of our services, allowing us to recognize you as a logged-in user and provide you with a personalized experience.</Typography>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Security</Typography>
                                <Typography>Your account is password protected. We use industry standard measures to protect the Personal Information that is stored in our database.</Typography>
                            </div>
                            {/* <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Your Choices</Typography>
                                <Typography>You can update or delete your account information at any time.</Typography>
                            </div> */}
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Changes to this Privacy Policy</Typography>
                                <Typography>We may update this Privacy Policy to reflect changes in our practices or for legal reasons at any time without notice. To make sure you are aware of any changes, please review this policy periodically.</Typography>
                            </div>
                            <div style={{padding: '20px'}}>
                                <Typography variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Contact Us</Typography>
                                <Typography>If you have any questions or concerns about this Privacy Policy, please contact us at [spokupai@gmail.com].</Typography>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default PrivacyPolicy