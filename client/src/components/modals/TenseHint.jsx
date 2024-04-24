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
        width: '70%',
        backgroundColor: 'background.paper',
        boxShadow: '24px',
        padding: '20px',
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
      marginBottom: '20px',
    },

    phraseFormatText: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: '10px',    
    },
    hintText: {
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: 'bold',
        margin: '10px 5px',
        boxShadow: '2px 2px 5px #888888',
        padding: '1px 15px',
        borderRadius: '20px',
    }
}



function TenseHint(props) {

    const ShuffleWords = (inputString) => {

        // Step 1: Split the string into an array of words
        const wordsArray = inputString.split(/\s+/);
      
        // Step 2: Shuffle the array
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };  
        // By creating a shallow copy using the spread operator ([...wordsArray]), you ensure that the original array remains unchanged, and the shuffling operation is performed on a new array.
        return shuffleArray([...wordsArray]);
    }

    const shuffledArray = ShuffleWords(props.englishPhrase);
    console.log(props);
    
  return (
    <Modal
    open={props.handleOpen}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={internalStyles.contentContainer}>
        <Typography sx={internalStyles.header} variant="h2">{props.heading}</Typography>
        <Typography sx={internalStyles.phraseFormatText} variant="h6">Singular: {props.singularFormat}</Typography>
        <Typography sx={internalStyles.phraseFormatText} variant="h6">Plural: {props.pluralFormat}</Typography>
        <Typography sx={internalStyles.phraseFormatText} variant="h6">Try to use these words</Typography>
        <Box>
            {
                shuffledArray.map((item, idx) => {
                return <Typography  key={idx} sx={internalStyles.hintText} variant="body1">{item}</Typography>
            })
            }
        </Box>  
    </Box>
  </Modal>
  )
}

export default TenseHint;