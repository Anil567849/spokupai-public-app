import React from 'react'

// react material ui 
import { Typography } from '@mui/material';

// styles 
import Styles from './practice.module.css';

// services 
import textToSpeech from '../../../services/textToSpeech.js';

// components 
import {InlineLoader} from "../../loaders/InlineLoader.jsx";






export default function Practice(props) {

    const internalStyles = {
        verbContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            
        },
        verbText: {
            display: 'flex',
            alignItems: 'center',
            padding: '5px'
        }
    }

    function sayPhrase(text) {
        textToSpeech(text, () => {
            // speech end
        })
    }
        
    return <section className={Styles.sectionCategory}>
        <div>
            <div className={Styles.headingContainer}>
                <h1 className={Styles.h1Heading}>Practice {props.typeOfVerb}</h1>
            </div>
            <div className={Styles.contentWrapper}>
                <div className={Styles.contentContainer}  style={{paddingTop: '10px'}}>
                    {
                        props.phraseLoading ? <InlineLoader loading={props.phraseLoading}/> :
                        <div className={Styles.phraseContainer}>                                            
                            <div className={Styles.phraseTextContainer}>
                                <Typography>{props.verb.hindi}/{props.verb.v1}</Typography>
                                <img className={Styles.echoButton} onClick={() => sayPhrase(props.verb.hindi)} src="/audio.png" alt="audio" />
                            </div>
                            {
                                props.showHint && !props.showVerb && <Typography sx={{padding: '1rem 0'}}><b>Type: </b>{props.verb.type}</Typography>
                            }
                            {
                                props.showVerb && <> 
                                                <Typography sx={{padding: '1rem 0'}}><b>Type: </b>{props.verb.type}</Typography>
                                                <div style={internalStyles.verbContainer}>
                                                    <Typography sx={internalStyles.verbText}>V1: {props.verb.v1} <img className={Styles.echoButton} onClick={() => sayPhrase(props.verb.v1)} src="/audio.png" alt="audio" /></Typography>
                                                    <Typography sx={internalStyles.verbText}>V2: {props.verb.v2} <img className={Styles.echoButton} onClick={() => sayPhrase(props.verb.v2)} src="/audio.png" alt="audio" /></Typography>
                                                    <Typography sx={internalStyles.verbText}>V3: {props.verb.v3} <img className={Styles.echoButton} onClick={() => sayPhrase(props.verb.v3)} src="/audio.png" alt="audio" /></Typography>
                                                    
                                                </div>
                                            </>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className={Styles.buttonContainer}>
            {
                props.buttonContainerChild
            }
        </div>
    </section>
}