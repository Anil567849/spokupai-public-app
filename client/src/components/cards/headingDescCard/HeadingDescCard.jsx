import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Styles from './headingDescCard.module.css';


const internalStyles = {
  cardActionArea : {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: '16px', 
    height: '100%',
  },
  title : {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '24px',
  },
  freeText:{
    background: '#1AA25F',
    padding: '3px 10px',
    fontSize: '12px',
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: '16px 16px 0 16px',
    borderRadius: '10px',
  },
  desc:{
    margin: '30px 0 10px 0'
  },
}

const LangCard = ({ title, description, badge, onClick }) => {
  return (
    <Card elevation={10} className={Styles.card}>
      <CardActionArea onClick={onClick} sx={internalStyles.cardActionArea}>
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
