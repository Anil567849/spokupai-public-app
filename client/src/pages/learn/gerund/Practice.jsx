import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// react material ui 
import { Typography } from '@mui/material';

// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';


// components
import Header from '../../../components/Header.jsx';
import {Loader} from '../../../components/loaders/Loader.jsx';
import Button from '../../../components/buttons/button/Button.jsx';
import Practice from '../../../components/practice/Practice.jsx';
import GerundLogicModal from '../../../components/modals/GerundLogic.jsx';


// data 
import {gerundAPI} from './data/data.js';
import {gerundLogicAPI} from './data/logic.js';

function TensePractice() {   
     
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
        "Gerund as Subject",
        "Gerund as Direct Object",
        // "Gerund as Indirect Object",
        "Gerund as Predicate Nominative",
        "Gerund as Object of Preposition",
        "Gerund With Possessive Pronouns",
        "Gerund After Prepositions",
    ]


    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setShowHint(false);
        setTimeout(() => {

            const gerundRole = `${group[getRandom(group.length)]}`;
            const totalPhrases = gerundAPI[gerundRole].length;
            const obj = gerundAPI[gerundRole][getRandom(totalPhrases)];
    
            setPhrase({
                type: gerundRole,
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
                    <Practice heading={"Practice Gerund"} phrase={phrase} showHint={showHint} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
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
                        showPhraseLogic && <GerundLogicModal handleOpen={showPhraseLogic} handleClose={handleClose} data={gerundLogicAPI[phraseLogicHeading]} heading={phraseLogicHeading} meaning="Gerund: A gerund is a type of verb form that functions as a noun in a sentence. It is created by adding the suffix '-ing' to the base form of a verb. Gerunds are used to represent an action or activity and can take on various roles in a sentence, just like any other noun."/>
                    }

                </>
            }
        </>
  )
}

export default TensePractice