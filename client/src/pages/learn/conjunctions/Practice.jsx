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


// data 
import {conjunctionsAPI} from './data/data.js';
import {conjunctionsLogicAPI} from './data/logic.js';

function ConjunctionPractice() {   
     
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
        "coordinate",
        "subordinate",
        "correlative",
    ]
    const coordinateGroup = [
        "and",
        "but",
        "or",
        "nor",
        "for",
        "so",
        "yet",
    ]
    const subordinateGroup = [
        "after",
        "although",
        "because",
        "before",
        "if",
        "since",
        "though",
        "unless",
        "until",
        "when",
        "while",
    ]
    const correlativeGroup = [
        "either...or",
        "neither...nor",
        "both...and",
        "not only...but also",
        "whether...or",
    ]


    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setShowHint(false);
        setTimeout(() => {

            const conjunctionGroup = `${group[getRandom(group.length)]}`;
            console.log(conjunctionGroup);
            let conjunction;
            if(conjunctionGroup === "coordinate"){
                conjunction = coordinateGroup[getRandom(coordinateGroup.length)]
            }else if(conjunctionGroup === "subordinate"){
                conjunction = subordinateGroup[getRandom(subordinateGroup.length)]
            }else{
                conjunction = correlativeGroup[getRandom(correlativeGroup.length)]
            }
            const totalPhrases = conjunctionsAPI[conjunctionGroup][conjunction].length;
            const obj = conjunctionsAPI[conjunctionGroup][conjunction][getRandom(totalPhrases)];
    
            setPhrase({
                type: conjunction,
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
                    <Practice heading={"Practice Conjunctions"} phrase={phrase} showHint={showHint} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Hint" onClick={() => setShowHint(true)}/>
                        <Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={getPhrase}/></>
                    }
                    />
                </>
            }
        </>
  )
}

export default ConjunctionPractice