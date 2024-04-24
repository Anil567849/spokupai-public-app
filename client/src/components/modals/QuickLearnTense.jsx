import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const InternalStyles = {

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
  
  
  heading: {
    padding: '10px',
    borderRadius: '20px',
    fontWeight: 'bold',
    color: '#000000',
    
    '@media screen and (max-width: 400px)': {
      fontSize: '16px',
    },
    
    '@media screen and (max-width: 305px)': {
      fontSize: '12px',
      padding: '5px',
    },
  },
  
  text: {
    fontSize: '16px',
    padding:  '10px',
    '@media screen and (max-width: 436px)': {
      fontSize: '12px',
    },
  },

}



export default function AIConversationModal(props) {

  return (
      <Modal
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={InternalStyles.contentContainer}>
            {
                props.data.map((item, index) => {
                    return <div key={index}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={InternalStyles.heading}>
                        {`${index+1}: ${item.heading}`}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={InternalStyles.text}>
                        <b>Singular:</b> {item.SINGULAR.format}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={InternalStyles.text}>
                        <b>Plural:</b> {item.PLURAL.format}
                    </Typography>
                    </div>
                })
            }
        </Box>
      </Modal>
  );
}