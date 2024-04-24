import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// react material ui 
import { Typography } from '@mui/material';


// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';


// data 
import {modalVerbsAPI} from './data/data.js';
import {modalVerbsLogicAPI} from './data/logic.js';


// components 
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";
import Button from "../../../components/buttons/button/Button.jsx";
import Practice from '../../../components/practice/Practice.jsx';
import GerundLogicModal from '../../../components/modals/GerundLogic.jsx';


function TensePractice() {   

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhrase, setShowPhrase] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [phrase, setPhrase] = useState({type: '', english : '', hindi: ''})
    const [showPhraseLogic, setShowPhraseLogic] = useState(false);
    const [phraseLogicHeading, setPhraseLogicHeading] = useState("");
    const {modalVerb} = useParams(); 
    
    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    
    const group = [
        'can', 
        'could',
        'may', 
        'might',
        'shall', 
        'should',
        'will', 
        'would',
        'must', 
        'ought to',
    ]

    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setShowHint(false);
        setTimeout(() => {
            let rand = getRandom(2);

            switch (modalVerb) {
                case 'may-might':
                    rand += 2;
                    break;
                case 'shall-should':
                    rand += 4;
                    break;
                case 'will-would':
                    rand += 6;
                    break;
                case 'must-ought-to':
                    rand += 8;
                    break;
                default:
                    break;
            }
            
            const totalPhrases = modalVerbsAPI[group[rand]].length;
            const obj = modalVerbsAPI[group[rand]][getRandom(totalPhrases)];

            setPhrase({
                type: group[rand],
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
                    <Practice heading={`Practice ${modalVerb}`} phrase={phrase} showHint={showHint} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
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
                        showPhraseLogic && <GerundLogicModal handleOpen={showPhraseLogic} handleClose={handleClose} data={modalVerbsLogicAPI[phraseLogicHeading]} heading={phraseLogicHeading}/>
                    }
                </>
            }
        </>
  )
}

export default TensePractice