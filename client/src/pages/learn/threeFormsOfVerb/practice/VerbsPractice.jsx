import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// utils 
import {checkUserAuth} from '../../../../utils/checkUserAuth.js';


// services
// import getTenseFromAI from '../../../../services/getTenseFromAI.js';


// data 
import {irregularVerbsAPI} from './data/irregularVerbsAPI.js';
import {regularVerbsAPI} from './data/regularVerbsAPI.js';


// components 
import Header from '../../../../components/Header.jsx';
import {Loader} from "../../../../components/loaders/Loader.jsx";
import Button from "../../../../components/buttons/button/Button.jsx";
import Practice from "../../../../components/practice/threeFormsOfVerb/Practice.jsx";



function TensePractice() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showVerb, setShowVerb] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [verb, setVerb] = useState({type: '', v1 : '',  v2 : '',  v3 : '', hindi: ''})
    

    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    
    const {typeOfVerb} = useParams();
    
    function getVerb() {
        setPhraseLoading(true);
        setShowVerb(false);
        setShowHint(false);
        setTimeout(() => {
            let obj;
            if(typeOfVerb === "regular-verbs"){
                const len = regularVerbsAPI["regular-verbs"].length;
                obj = regularVerbsAPI["regular-verbs"][getRandom(len)];
            }else{ // irregular-verbs
                const len = irregularVerbsAPI["irregular-verbs"].length;
                obj = irregularVerbsAPI["irregular-verbs"][getRandom(len)];
            }
            setVerb({
                type: typeOfVerb,
                v1: obj.v1,
                v2: obj.v2,
                v3: obj.v3,
                hindi: obj.hindi,
            })
            setPhraseLoading(false);
        }, 1000);
        
    }
        
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
        getVerb();
    }, []);


  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <Practice typeOfVerb={typeOfVerb} verb={verb} showHint={showHint} showVerb={showVerb} phraseLoading={phraseLoading}
                    buttonContainerChild={
                        <><Button text="Hint" onClick={() => setShowHint(true)}/>
                        <Button text="Show" onClick={() => setShowVerb(true)}/>
                        <Button text="Next" onClick={getVerb}/></>
                    }
                    />
                </>
            }
        </>
  )
}

export default TensePractice