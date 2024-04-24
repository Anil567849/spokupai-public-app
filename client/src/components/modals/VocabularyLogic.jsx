import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const internalStyles = {
      contentContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        backgroundColor: 'background.paper',
        boxShadow: '24px',
        padding: '1px',
        borderRadius: '20px',
        margin: '10px 0',
        overflowWrap: 'break-word', 
        overflowY: 'scroll',
        maxHeight: '80vh',
    },
    
    header: {
      fontSize: '20px',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },

    list: {
      padding: '0.5rem 0',

    },

    phraseFormatText: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: '10px',
    }
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3,  
                overflowWrap: 'break-word', 
                overflowY: 'scroll',
                maxHeight: '60vh', }}>
                {children}
            </Box>
        )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function GerundLogic(props) {
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Modal
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={internalStyles.contentContainer}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="English" {...a11yProps(0)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Typography sx={internalStyles.header} variant="h2">{props.heading}</Typography>
                <Typography sx={internalStyles.phraseFormatText} variant="h6">{props.meaning}</Typography>
                <ul>
                    {
                    props.data.map((item, idx) => {
                        return <li style={internalStyles.list} key={idx}>
                                <Typography style={{ whiteSpace: 'pre-line'}} variant="body1">{item.english}</Typography>
                            </li>
                    })
                    }
                </ul>
            </CustomTabPanel>
        </Box>
        </Modal>
    )
}

export default GerundLogic;