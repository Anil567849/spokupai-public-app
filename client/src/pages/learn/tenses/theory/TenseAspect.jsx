import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// react mui 
import { Typography, Button } from '@mui/material';


// utils 
import {checkUserAuth} from '../../../../utils/checkUserAuth.js';


// styles 
import Styles from '../../../../css/learn/tenses/theoryPage.module.css'
import SharedStyles from '../../../../css/shared.module.css'


// component 
import Header from '../../../../components/Header.jsx';
import {Loader} from "../../../../components/loaders/Loader.jsx";
import QuickLearnTenseModal from "../../../../components/modals/QuickLearnTense.jsx";
import HeadingDescCard from "../../../../components/cards/headingDescCard/HeadingDescCard.jsx";
import TenseTheory from "../../../../components/theory/TenseTheory.jsx";


// active voice: theory data 
import {pastAPI as pastActiveVoiceTheoryAPI} from './data/activeVoice/past.js';
import {presentAPI as presentActiveVoiceTheoryAPI} from './data/activeVoice/present.js';
import {futureAPI as futureActiveVoiceTheoryAPI} from './data/activeVoice/future.js';


// passive voice: theory data 
import {pastAPI as pastPassiveVoiceTheoryAPI} from './data/passiveVoice/past.js';
import {presentAPI as presentPassiveVoiceTheoryAPI} from './data/passiveVoice/present.js';
import {futureAPI as futurePassiveVoiceTheoryAPI} from './data/passiveVoice/future.js';





function TenseAspect() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showQuickLearnModal, setShowQuickLearnModal] = useState(false);

    // handle accordion = auto close if another one will open 
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language, voice, aspect, tense} = useParams();

    
    let API = "";

    if(voice == 'active-voice'){
        if(tense === 'past'){
            API = pastActiveVoiceTheoryAPI;
        }else if(tense === 'present'){
            API = presentActiveVoiceTheoryAPI;
        }else{
            API = futureActiveVoiceTheoryAPI;
        }
    }else{ // passive voice
        if(tense === 'past'){
            API = pastPassiveVoiceTheoryAPI;
        }else if(tense === 'present'){
            API = presentPassiveVoiceTheoryAPI;
        }else{
            API = futurePassiveVoiceTheoryAPI;
        }
    }

    function handleQuickLearn() {
        setShowQuickLearnModal(true);        
    }


    function handleClose() {
        setShowQuickLearnModal(false);        
    }

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header /> 
                    <section className={SharedStyles.sectionCategory}>
                        <div style={{display: 'flex', justifyContent: "center", marginBottom: '5rem'}}>
                            <div style={{width: '80vw'}}>
                                {
                                    API.map((item, index) => {
                                        switch(aspect){
                                            case 'indefinite': 
                                                return item.code === ('IND') && <TenseTheory tense={tense} data={item}/>
                                            case 'continuous':
                                                return item.code === ('CON') && <TenseTheory tense={tense} data={item}/>
                                            case 'perfect':
                                                return item.code === ('PER') && <TenseTheory tense={tense} data={item}/>
                                            case 'perfect-continuous':
                                                return item.code === ('PCON') && <TenseTheory tense={tense} data={item}/>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default TenseAspect