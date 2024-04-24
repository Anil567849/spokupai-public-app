import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// styles
import SharedStyles from '../../../css/shared/headingDescWithBadgeCard.module.css';


// https
import Axios from '../../../https/https.js';

// data 
import {partsOfSpeechAPI} from './data/data.js';


// components 
import VideoAndTheory from '../../../components/basic/VideoAndTheory.jsx';
import HeadingDescWithBadgeCard from '../../../components/cards/headingDescWithBadgeCard/HeadingDescWithBadgeCard.jsx';
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";


// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';



function Noun() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {part} = useParams();
    let API;

    switch (part) {
        case 'intro':
            API = partsOfSpeechAPI.intro;
            break;
        case 'noun':
            API = partsOfSpeechAPI.noun;
            break;
        case 'pronoun':
            API = partsOfSpeechAPI.pronoun;            
            break;
        case 'verb':
            API = partsOfSpeechAPI.verb;            
            break;
        case 'adverb':
            API = partsOfSpeechAPI.adverb;            
            break;
        case 'adjective':
            API = partsOfSpeechAPI.adjective;            
            break;
        case 'preposition':
            API = partsOfSpeechAPI.preposition;            
            break;
        case 'conjunction':
            API = partsOfSpeechAPI.conjunction;            
            break;
        case 'interjection':
            API = partsOfSpeechAPI.interjection;            
            break;
        default:
            break;
    }

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <VideoAndTheory 
                    videoLink={API.videoLink}
                    heading={API.heading}
                    meaning={API.meaning}
                    examples={API.examples}
                    types={API.types}
                    functions={API.functions}
                    summary={API.summary}
                    />
                </>
            }
        </>
  )
}

export default Noun