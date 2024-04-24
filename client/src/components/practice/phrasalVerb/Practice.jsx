import React from 'react'

// react material ui 
import { Typography } from '@mui/material';

// styles 
import Styles from '../practice.module.css';

// services 
import textToSpeech from '../../../services/textToSpeech.js';

// components 
import {InlineLoader} from "../../loaders/InlineLoader.jsx";



const Practice = (props) => {

    function sayPhrase(text) {
        textToSpeech(text, () => {
            // speech end
        })
    }
    return <section className={Styles.sectionCategory}>
        <div>
            <div className={Styles.headingContainer}>
                <h1 className={Styles.h1Heading}>{props.heading}</h1>
            </div>
            <div className={Styles.contentWrapper}>
                <div className={Styles.contentContainer}>
                    {
                        props.phraseLoading ? <InlineLoader loading={props.phraseLoading}/> :
                        <><div className={Styles.phraseContainer}>                                            
                            <div className={Styles.phraseTextContainer}>
                                <Typography>{props.phrase.english}</Typography>
                                <img className={Styles.echoButton} onClick={() => sayPhrase(props.phrase.english)} src="/audio.png" alt="audio" />
                            </div>
                            {   
                                props.showPhrase && <>
                                            <div className={Styles.phraseTextContainer}>
                                                    <Typography>{props.phrase.meaning}</Typography>
                                                    <img className={Styles.echoButton} onClick={() => sayPhrase(props.phrase.meaning)} src="/audio.png" alt="audio" />
                                                </div>
                                            </>
                            }
                        </div>
                        {
                            <div className={Styles.insightContainer}>
                                {props.logic}
                            </div>
                        }</>
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

export default Practice