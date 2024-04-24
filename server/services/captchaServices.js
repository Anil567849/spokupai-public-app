class CaptchaServices {
    async verifyCaptcha(recaptchaResponse) {
      // Verify reCAPTCHA response
      const googleRecaptchaSecretKey = process.env.NODE_ENV !== 'dev' ? process.env.GOOGLE_RECAPTCHA_SECRET_KEY : process.env.GOOGLE_RECAPTCHA_SECRET_KEY_DEV;
      // console.log(googleRecaptchaSecretKey);
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${googleRecaptchaSecretKey}&response=${recaptchaResponse}`;
      const options = {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
  
      try {
        const verificationResponse = await fetch(verificationUrl, options);
        const verificationData = await verificationResponse.json();
        const { success } = verificationData;
        
        if (!success) {
            throw new Error("reCAPTCHA verification failed");
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  export default new CaptchaServices();