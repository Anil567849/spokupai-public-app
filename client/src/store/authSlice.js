import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    firstName : null, 
    lastName : null,
    email : null,
    dateOfBirth : null,
    country : null,
    hashedOtp: null,
    userId: null,
  },
  reducers: {
    setAuth : (state, action) => {
        const {firstName, lastName, email, country, dateOfBirth, userId} = action.payload;
        state.firstName = firstName;
        state.lastName = lastName;
        state.email = email;
        state.country = country;
        state.dateOfBirth = dateOfBirth;
        state.userId = userId;
    },
    setOtp: (state, action) => {
        const {hashedOtp, email} = action.payload;
        state.email = email;
        state.hashedOtp = hashedOtp;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOtp, setAuth } = authSlice.actions

export default authSlice.reducer