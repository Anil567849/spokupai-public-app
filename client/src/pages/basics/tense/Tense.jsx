import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

// components 
import VideoAndTheory from '../../../components/basic/VideoAndTheory.jsx';
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";


// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';



function Tense() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const videoLink = "https://www.youtube.com/embed/1vuHanwiI5c?si=R2HJNXLNE0E3O28K";
    const heading = "Tense";
    const meaning = `In grammar, "tense" refers to the form of a verb that indicates the time of an action or a state of being. Tense helps us understand when an action occurred or will occur in relation to the present moment.`;
    const types = [
        {
            heading: `Past Tense`,
            meaning: `Describes actions that already happened.`,
            example: `She walked to the store.`,
        },
        {
                heading: `Present Tense`,
                meaning: `Describes actions happening now.`,
                example: `She walks to the store.`,
        },
        {
                heading: `Future Tense`,
                meaning: `Describes actions that will happen.`,
                example: `She will walk to the store.`,
        },
    ];
    const examples = [
        {
                example: `Past: She completed her project last week.`,
        },
        {
                example: `Present: She is completing her project this week.`,
        },
        {
                example: `Future: She will complete her project next week.`,
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

export default Tense