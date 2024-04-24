import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import {NavLink} from 'react-router-dom';
import Axios from '../https/https.js';
import {useNavigate} from 'react-router-dom';
import {Constants} from '../utils/constants.js';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {

  const navigate = useNavigate();

  async function handleLogout(){
    alert('logout');
    try {
      await Axios.logout();
      navigate('/auth');
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant="h6">{Constants.BRAND_NAME}</Typography>
        </NavLink>
        <Box style={{cursor: 'pointer'}}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Typography variant="h6" sx={{fontSize: '16px', color: '#FFFFFF'}}>Menu</Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {/* {!auth && <MenuItem onClick={() => navigate('/auth')}>Create Account</MenuItem>} */}
            {/* <MenuItem onClick={() => navigate('/how-it-works')}>How It Works?</MenuItem> */}
            <MenuItem onClick={() => navigate('/privacy-policy')}>Privacy Policy</MenuItem>
            {/* {auth && <MenuItem onClick={handleLogout}>Logout</MenuItem>} */}
            {<MenuItem onClick={handleLogout}>Logout</MenuItem>}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
