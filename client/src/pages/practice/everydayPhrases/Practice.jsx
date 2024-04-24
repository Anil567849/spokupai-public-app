import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';



// components 
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";
import Button from "../../../components/buttons/button/Button.jsx";
import Practice from '../../../components/practice/Practice.jsx';


// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';


// data 
import {GeneralAPI} from './data/data.js';

function TensePractice() {   
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhrase, setShowPhrase] = useState(false)
    const [phrase, setPhrase] = useState({english : '', hindi: ''})
    const {difficulty} = useParams();
    
    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }
    

    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setTimeout(() => {
            const totalPhrases = GeneralAPI[difficulty].length;
            const obj = GeneralAPI[difficulty][getRandom(totalPhrases)];
            
            setPhrase({
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



  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />                    
                    <Practice heading={"Everyday Phrases"} phrase={phrase} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={getPhrase}/></>
                    }/>
                </>
            }
        </>
  )
}

export default TensePractice