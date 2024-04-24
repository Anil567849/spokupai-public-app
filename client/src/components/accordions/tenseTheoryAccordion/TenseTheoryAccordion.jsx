import * as React from 'react';


// react material ui .
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// styles 
import Styles from './tenseTheory.module.css';



const internalStyles = {
    phrases: {
      lineHeight: '200%',
    },
    heading: {
      fontSize: '18px',
      fontWeight: 'bold',
      '@media screen and (max-width: 300px)': {
        fontSize: '14px',
      },
    },
    singularPluralText: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginTop: "16px",
      '@media screen and (max-width: 300px)': {
        fontSize: '13px',
      },
    },
};

export default function TenseTheoryAccordion({index, details, expanded, handleChange}) {
    return (
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h2" sx={internalStyles.heading}>{`${Math.floor(((index)/3)+1)}. ${details.heading}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h3" sx={internalStyles.singularPluralText}>A. {details.SINGULAR.entity}'s Format: {details.SINGULAR.format}</Typography>
            {
                details.SINGULAR.content.map((phrases) => {
                    return <div className={Styles.phraseContainer} key={phrases.english}>
                        <ul className={Styles.PhraseUl}>
                            <li>
                                <Typography variant="body1" sx={internalStyles.phrases}>
                                    English: <span className={Styles.phrases}>{phrases.english}</span>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" sx={internalStyles.phrases}>
                                    Hindi: <span className={Styles.phrases}>{phrases.hindi}</span>
                                </Typography>
                            </li> 
                        </ul>
                    </div>
                })
            }
            <Typography variant="h3" sx={internalStyles.singularPluralText}>B. {details.PLURAL.entity}'s Format: {details.PLURAL.format}</Typography>
            {
            details.PLURAL.content.map((phrases) => {
                return <div className={Styles.phraseContainer} key={phrases.english}>
                        <ul className={Styles.PhraseUl}>
                            <li>
                                <Typography variant="body1" sx={internalStyles.phrases}>
                                    English: <span className={Styles.phrases}>{phrases.english}</span>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" sx={internalStyles.phrases}>
                                    Hindi: <span className={Styles.phrases}>{phrases.hindi}</span>
                                </Typography>
                            </li> 
                        </ul>
                    </div>
                })
            }
            </AccordionDetails>
        </Accordion>
  );
}