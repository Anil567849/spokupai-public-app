import React from 'react'
import { Typography } from '@mui/material';
import Styles from '../../css/auth/signup.module.css';

function RegistrationClosed() {

return (
    <div className={Styles.fullHeightWidthWrapper}>

        <div style={{textAlign: 'center'}}>
            <Typography component="h1" variant="h3" >Registration is closed.</Typography>
            <Typography>Hey Dear Sorry For Inconvenience.</Typography>
        </div>
    
    </div>
  )
}

export default RegistrationClosed