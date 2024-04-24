import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// react material ui 
import { Typography } from '@mui/material';


// services 
// import getTenseFromAI from '../../../../services/getTenseFromAI.js';


// utils 
import {checkUserAuth} from '../../../../utils/checkUserAuth.js';


// components
import Header from '../../../../components/Header.jsx';
import {Loader} from "../../../../components/loaders/Loader.jsx";
import Button from "../../../../components/buttons/button/Button.jsx";
import PhraseLogicModal from "../../../../components/modals/PhraseLogic.jsx";
import TenseHintModal from "../../../../components/modals/TenseHint.jsx";
import Practice from '../../../../components/practice/Practice.jsx';


// tense: active voice practice data 
import {pastAPI as pastActiveVoicePracticeAPI} from './data/activeVoice/pastAPI.js';
import {presentAPI as presentActiveVoicePracticeAPI} from './data/activeVoice/presentAPI.js';
import {futureAPI as futureActiveVoicePracticeAPI} from './data/activeVoice/futureAPI.js';

// tense: passive voice practice data 
import {pastAPI as pastPassiveVoicePracticeAPI} from './data/passiveVoice/pastAPI.js';
import {presentAPI as presentPassiveVoicePracticeAPI} from './data/passiveVoice/presentAPI.js';
import {futureAPI as futurePassiveVoicePracticeAPI} from './data/passiveVoice/futureAPI.js';

// tense logics 
import {logicsAPI as activeVoiceTenseLogicsAPI} from './data/activeVoice/logicsAPI.js'
import {logicsAPI as passiveVoiceTenseLogicsAPI} from './data/passiveVoice/logicsAPI.js'

// active voice: theory API 
import {pastAPI as pastActiveVoiceTheoryAPI} from '../theory/data/activeVoice/past.js'
import {presentAPI as presentActiveVoiceTheoryAPI} from '../theory/data/activeVoice/present.js'
import {futureAPI as futureActiveVoiceTheoryAPI} from '../theory/data/activeVoice/future.js'

// passive voice: theory API 
import {pastAPI as pastPassiveVoiceTheoryAPI} from '../theory/data/passiveVoice/past.js'
import {presentAPI as presentPassiveVoiceTheoryAPI} from '../theory/data/passiveVoice/present.js'
import {futureAPI as futurePassiveVoiceTheoryAPI} from '../theory/data/passiveVoice/future.js'

function TensePractice() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhraseLogic, setShowPhraseLogic] = useState(false);
    const [phraseLogicHeading, setPhraseLogicHeading] = useState("");
    const [showPhrase, setShowPhrase] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [phrase, setPhrase] = useState({type: '', english : '', hindi: '', singularFormat: '', pluralFormat: ''})
    // const [limitReached, setLimitReached] = useState({type: false, message : ''})
    const {voice, tense} = useParams();
    
    /*
        function getTenseFromAI() {
            setPhraseLoading(true);
            setShowPhrase(false);
            getTenseFromAI(tense, (err, result) => {
                if(err){
                    // console.log('Try Again');
                    setPhraseLoading(false);
                }else{
                    if(result.type == "daily limit reached"){
                        setLimitReached({type: true, message: 'daily free account limit reached - please try tomorrow or upgrade your subscription!'})
                    }else if(result.type == "limit reached"){
                        setLimitReached({type: true, message: 'Free account limit reached - please upgrade your subscription!'})
                    }else{
                        setPhrase({
                            type: result.type,
                            english: JSON.parse(result.response).english,
                            hindi: JSON.parse(result.response).hindi,
                        });
                    }
                    setPhraseLoading(false);
                }
            });
        }
    */

    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    
    const structure = [
        'positive',
        'negative',
        'interrogative',
    ]


    function getTenseHelper(group, structure, practiceAPI, TheoryAPI) {


        const tenseName = `${tense} ${group[getRandom(group.length)]} tense (${structure[getRandom(structure.length)]})`;

        let singularFormat, pluralFormat;
        const totalPhrases = practiceAPI[tenseName].length;
        const obj = practiceAPI[tenseName][getRandom(totalPhrases)];

        TheoryAPI.forEach(element => {
            if(`${tense} ${element.heading.toLowerCase()}` === tenseName.toLowerCase()){
                singularFormat = element.singularFormat;
                pluralFormat = element.pluralFormat;
                return true;
            }
        });

        setPhrase({
            type: tenseName,
            english: obj.english,
            hindi: obj.hindi,
            singularFormat,
            pluralFormat,
        })
    }


    function getTense() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setShowHint(false);
        setTimeout(() => {

            if(voice === 'active-voice'){
                const group = [
                    'indefinite',
                    'continuous',
                    'perfect',
                    'perfect continuous'
                ]
                switch (tense) {
                    case 'past':
                        getTenseHelper(group, structure, pastActiveVoicePracticeAPI, pastActiveVoiceTheoryAPI);
                        break;
                    case 'present':
                        getTenseHelper(group, structure, presentActiveVoicePracticeAPI, presentActiveVoiceTheoryAPI);
                        break;
                    case 'future':
                        getTenseHelper(group, structure, futureActiveVoicePracticeAPI, futureActiveVoiceTheoryAPI);
                        break;
                    default:
                        break;
                }
            }else{
                const group1 = [
                    'indefinite',
                    'continuous',
                    'perfect',
                ]
        
                const group2 = [
                    'indefinite',
                    'perfect',
                ]
                switch (tense) {
                    case 'past':
                        getTenseHelper(group1, structure, pastPassiveVoicePracticeAPI, pastPassiveVoiceTheoryAPI);
                        break;
                    case 'present':
                        getTenseHelper(group1, structure, presentPassiveVoicePracticeAPI, presentPassiveVoiceTheoryAPI);
                        break;
                    case 'future':
                        getTenseHelper(group2, structure, futurePassiveVoicePracticeAPI, futurePassiveVoiceTheoryAPI);
                        break;
                    default:
                        break;
                }
            }

            setPhraseLoading(false);
        }, 1000);
        
    }
    
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
        getTense();
    }, []);


    function handleShowPhraseLogic(typeOfPhrase) {
        setShowPhraseLogic(true);
        const modifiedText = removeContentFromFirstOpeningParenthesis(typeOfPhrase);
        setPhraseLogicHeading(modifiedText)

    }
    function handleShowHint(typeOfPhrase) {
        setShowHint(true);
        const modifiedText = removeContentFromFirstOpeningParenthesis(typeOfPhrase);
        setPhraseLogicHeading(modifiedText)

    }


    function handleClose() {
        setShowPhraseLogic(false)
        setShowHint(false);
    }

    function removeContentFromFirstOpeningParenthesis(text) {
        const firstParenthesisIndex = text.indexOf('(');

        if (firstParenthesisIndex !== -1) {
            return text.substring(0, firstParenthesisIndex).trim();
        }

        return text;
    }

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />                    
                    <Practice heading={`Practice ${tense} tense`} phrase={phrase} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Hint" onClick={() => handleShowHint(phrase.type)}/>
                        <Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={getTense}/></>
                    }
                    logic={
                        <Typography onClick={() => handleShowPhraseLogic(phrase.type)}>Logic</Typography>
                    }
                    />

                    {
                        showPhraseLogic && <PhraseLogicModal handleOpen={showPhraseLogic} handleClose={handleClose} data={voice == 'active-voice' ? activeVoiceTenseLogicsAPI[phraseLogicHeading] : passiveVoiceTenseLogicsAPI[phraseLogicHeading]} heading={phraseLogicHeading} singularFormat={phrase.singularFormat} pluralFormat={phrase.pluralFormat}/>
                    }

                    {
                        showHint && <TenseHintModal handleOpen={showHint} handleClose={handleClose}  englishPhrase={phrase.english} heading={phraseLogicHeading} singularFormat={phrase.singularFormat} pluralFormat={phrase.pluralFormat}/>
                    }
                </>
            }
        </>
  )
}

export default TensePractice