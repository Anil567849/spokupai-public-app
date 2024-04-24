import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

// components 
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";
import Button from "../../../components/buttons/button/Button.jsx";
import Practice from '../../../components/practice/Practice.jsx';

// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';

// data 
import {practicalScenariosAPI} from './data/data.js';

function PracticalScenarios() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [phraseLoading, setPhraseLoading] = useState(false);
    const [showPhrase, setShowPhrase] = useState(false)
    const [phrase, setPhrase] = useState({english : '', hindi: ''})
    const [dataIndex, setDataIndex] = useState(-1);
    const [dataKey, setDataKey] = useState("");
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
        getSubject();
    }, []);

    function getRandom(num) {
        // Returns a random integer from 0 to num-1:
        return Math.floor(Math.random() * num);    
    }

    useEffect(() => {
        if(dataKey !== ""){
            if(dataIndex === 0){
                getPhrase();
            }else{
                setDataIndex(0);
            }
        }
    }, [dataKey]);

    useEffect(() => {
        if(dataIndex !== -1){
            getPhrase();
        }
    }, [dataIndex]);

    function getSubject() {
        const keysArray = Object.keys(practicalScenariosAPI);
        const rand = getRandom(keysArray.length);
        setDataKey(keysArray[rand]);
    } 

    function getPhrase() {
        setPhraseLoading(true);
        setShowPhrase(false);
        setTimeout(() => { 
            if(dataIndex < practicalScenariosAPI[dataKey].length){
                setPhrase({
                    english: practicalScenariosAPI[dataKey][dataIndex].english,
                    hindi: practicalScenariosAPI[dataKey][dataIndex].hindi,
                })
                setPhraseLoading(false);
            }else{
                getSubject();
            }
        }, 1000);
    }



  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <Practice heading={dataKey} phrase={phrase} getSubject={getSubject} setShowPhrase={setShowPhrase} phraseLoading={phraseLoading} showPhrase={showPhrase}
                    buttonContainerChild={
                        <><Button text="Change" onClick={() => getSubject()}/>
                        <Button text="Show" onClick={() => setShowPhrase(true)}/>
                        <Button text="Next" onClick={() => setDataIndex(dataIndex+1)}/></>
                    }/>
                </>
            }
        </>
  )
}

export default PracticalScenarios