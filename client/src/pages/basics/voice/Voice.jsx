import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

// components 
import VideoAndTheory from '../../../components/basic/VideoAndTheory.jsx';
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";


// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';



function Voice() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const videoLink = "https://www.youtube.com/embed/hbf2bLHa0IA?si=hp8oMIByuetwg-at";
    const heading = "Voice";
    const meaning = `In grammar, the concept of "voice" refers to the relationship between the subject of a sentence and the action or state expressed by the verb. `;
    const types = [
        {
            heading: `Active Voice`,
            meaning: `In active voice, the subject of the sentence performs the action expressed by the verb.`,
            example: `The cat chased the mouse." (The subject "cat" is performing the action of chasing.)`,
        },
        {
                heading: `Passive Voice`,
                meaning: `In passive voice, the subject of the sentence is the receiver of the action, and the doer of the action may or may not be mentioned.`,
                example: `The mouse was chased by the cat." (The subject "mouse" is the one being chased, and the doer of the action, the cat, is mentioned with the preposition "by.")`,
        },
    ];
    const examples = [
        {
            example: `Active Voice: She wrote a beautiful poem.`,
        },
        {
            example: `Passive Voice: A beautiful poem was written by her.`,
        },
        {
            example: `Active Voice: They are building a new bridge across the river.`,
        },
        {
            example: `Passive Voice: A new bridge is being built across the river.`,
        },
    ];

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <VideoAndTheory 
                    videoLink={videoLink}
                    heading={heading}
                    meaning={meaning}
                    examples={examples}
                    types={types}
                    />
                </>
            }
        </>
  )
}

export default Voice