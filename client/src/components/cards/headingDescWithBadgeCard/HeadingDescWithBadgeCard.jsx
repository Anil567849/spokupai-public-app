import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Styles from './headingDescWithBadgeCard.module.css';


const internalStyles = {
  cardActionArea : {
    width: '100%',
    height: '100%', 
  },
  title : {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '24px',
  },
  freeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  freeTextBox:{
    display: 'flex',
    background: '#1AA25F',
    padding: '3px 10px',
    margin: '16px 16px 0 16px',
    borderRadius: '10px',
  },
  freeText:{
    fontSize: '12px',
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: '10px',
    letterSpacing: '1px',
    paddingRight: '5px'
  },
  lockPersonIcon:{
    fontSize: '15px',
    color: 'white'
  },
  desc:{
    margin: '30px 0 10px 0'
  },
  cardContent: {
    padding: '16px',
  }
}

const LangCard = ({ title, description, badge, onClick }) => {
  return (
    <Card elevation={10} className={Styles.card}>
      <CardActionArea onClick={onClick} sx={internalStyles.cardActionArea}>
        <div style={internalStyles.freeContainer}>
          <div style={internalStyles.freeTextBox}>
            <Typography style={internalStyles.freeText}>Plus</Typography> <LockPersonIcon sx={internalStyles.lockPersonIcon}/>
          </div>
        </div>
        
        <CardContent sx={internalStyles.cardContent}>
          <Typography variant="h5" component="h2" sx={internalStyles.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" sx={internalStyles.desc}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LangCard;
