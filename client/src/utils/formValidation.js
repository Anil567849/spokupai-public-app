export function isValidEmailID(email) {
  if (email === '') {
      return false;
  }

  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  if (!emailRegex.test(email)) {
      return false;
  }

  // The email is valid
  return true;
}


export function isValidOTP(Otp) {

    if(Otp === ''){
        return false;
    }

    // Remove any non-digit characters from the otp number
    const cleanedOtp = Otp.replace(/\D/g, '');
  
    // Check if the cleaned otp number has exactly 10 digits
    if (cleanedOtp.length !== 6) {
      return false;
    }
  
    // Check if the cleaned otp number contains only digits
    if (!/^\d+$/.test(cleanedOtp)) {
      return false;
    }
    
    // The otp number is valid
    return true;
}

export function isValidName(name) {
    // Check if the name is under 20 characters
    if (name.length > 10) {
      return false;
    }
  
    // Check if the name contains only letters from A to Z
    if (!/^[a-zA-Z]+$/.test(name)) {
      return false;
    }
  
    // The name is valid
    return true;
}

export function isValidCountry(name) {
    // Check if the name is under 20 characters
    if (name.length > 52) {
      return false;
    }
  
    // Check if the name contains only letters from A to Z
    if (!/^[a-zA-Z]+$/.test(name)) {
      return false;
    }
  
    // The name is valid
    return true;
}