import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// react material ui 
import { Typography } from '@mui/material';


// utils 
import {pageLoaded} from '../../../utils/pageLoaded.js';


// data 
import {phrasalVerbsAPI} from './data/data.js';


// components 
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";
import Button from "../../../components/buttons/button/Button.jsx";
import Practice from '../../../components/practice/phrasalVerb/Practice.jsx';


function PhrasalPractice() {   

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhrase, setShowPhrase] = useState(false)
    const [phrase, setPhrase] = useState({type: '', english : '', meaning: ''})
    const [showPhraseLogic, setShowPhraseLogic] = useState(false);
    const [phraseLogicHeading, setPhraseLogicHeading] = useState("");
    const {modalVerb} = useParams(); 
    
    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    
    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setTimeout(() => {
            const totalPhrases = phrasalVerbsAPI.length;
            const obj = phrasalVerbsAPI[getRandom(totalPhrases)];
            console.log(obj);

            setPhrase({
                english: obj.english,
                meaning: obj.meaning,
            })
            setPhraseLoading(false);
        }, 1000);
        
    }
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
        getPhrase();
    }, []);


  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <Practice heading={`Practice Phrasal Verbs`} phrase={phrase} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={getPhrase}/></>
                    }
                    logic={
                        <Typography>Learn More</Typography>
                    }
                    />
                </>
            }
        </>
  )
}

export default PhrasalPractice