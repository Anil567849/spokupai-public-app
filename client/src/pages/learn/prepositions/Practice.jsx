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
import PrepositionsLogicModal from '../../../components/modals/GerundLogic.jsx';


// data 
import {prepositionsAPI} from './data/data.js';
import {prepositionsLogicAPI} from './data/logic.js';

function PrepositionPractice() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhrase, setShowPhrase] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [phrase, setPhrase] = useState({type: '', english : '', hindi: ''})
    const [showPhraseLogic, setShowPhraseLogic] = useState(false);
    const [phraseLogicHeading, setPhraseLogicHeading] = useState("");
    

    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    
    const group = [
        "in",
        "on",
        "at",
    ]


    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setShowHint(false);
        setTimeout(() => {

            const preposition = `${group[getRandom(group.length)]}`;
            const totalPhrases = prepositionsAPI[preposition].length;
            const obj = prepositionsAPI[preposition][getRandom(totalPhrases)];
    
            setPhrase({
                type: preposition,
                english: obj.english,
                hindi: obj.hindi,
            })

            setPhraseLoading(false);
        }, 1000);
        
    }
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
        getPhrase();
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
                    <Practice heading={"Practice Prepositions"} phrase={phrase} showHint={showHint} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Hint" onClick={() => setShowHint(true)}/>
                        <Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={getPhrase}/></>
                    }
                    logic={
                        <Typography onClick={() => handleShowPhraseLogic(phrase.type)}>Logic</Typography>
                    }
                    />

                    {
                        showPhraseLogic && <PrepositionsLogicModal handleOpen={showPhraseLogic} handleClose={handleClose} data={prepositionsLogicAPI[phraseLogicHeading]} heading={phraseLogicHeading}/>
                    }

                </>
            }
        </>
  )
}

export default PrepositionPractice