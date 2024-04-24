import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


// react material ui 
import { Typography } from '@mui/material';

// utils
import {checkUserAuth} from '../../../utils/checkUserAuth.js';


// components
import Header from '../../../components/Header.jsx';
import {Loader} from '../../../components/loaders/Loader.jsx';
import Button from '../../../components/buttons/button/Button.jsx';
import Practice from '../../../components/practice/Practice.jsx';
import VocabsLogicModal from '../../../components/modals/VocabularyLogic.jsx';


// data 
import {vocabAPI} from './data/data.js';
import {vocabsLogicAPI} from './data/logic.js';

function TensePractice() {   
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhrase, setShowPhrase] = useState(false)
    const [phrase, setPhrase] = useState({type: '', english : '', hindi: ''})
    const [phraseLogicHeading, setPhraseLogicHeading] = useState("");
    const [showPhraseLogic, setShowPhraseLogic] = useState(false);
    

    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    
    const group = [
        "General",
        // "Toilet",
        // "Nature",
        // "House",
    ]


    function getVocab() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setTimeout(() => {

            const gerundName = `${group[getRandom(group.length)]}`;
            const totalPhrases = vocabAPI[gerundName].length;
            const obj = vocabAPI[gerundName][getRandom(totalPhrases)];
    
            setPhrase({
                type: gerundName,
                english: obj.english,
                hindi: obj.hindi,
            })
            
            setPhraseLoading(false);
        }, 1000);
        
    }
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
        getVocab();
    }, []);

    function handleShowPhraseLogic(type) {
        setShowPhraseLogic(true);
        setPhraseLogicHeading(type);
    }

    function handleClose() {
        setShowPhraseLogic(false)
    }

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />                    
                    <Practice heading={"Practice Vocabulary"} phrase={phrase} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={getVocab}/></>
                    }
                    logic={
                        <Typography onClick={() => handleShowPhraseLogic(phrase.english)}>Examples</Typography>
                    }
                    />

                    {
                        showPhraseLogic && <VocabsLogicModal handleOpen={showPhraseLogic} handleClose={handleClose} data={vocabsLogicAPI[phraseLogicHeading]} heading={phraseLogicHeading}/>
                    }

                </>
            }
        </>
  )
}

export default TensePractice