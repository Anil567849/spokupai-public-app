import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// styles
import SharedStyles from '../../css/shared.module.css';


// utils
import {checkUserAuth} from '../../utils/checkUserAuth.js';


// components
import HeadingDescCard from '../../components/cards/headingDescCard/HeadingDescCard.jsx';
import Header from '../../components/Header.jsx';
import {Loader} from "../../components/loaders/Loader.jsx"; 


function Learn() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language} = useParams();
    function handleLanguage(voice) {
        navigate(`/speak/${language}/grammar/tenses/${voice}`)
    }


  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <section className={SharedStyles.sectionCategory}>
                        <div>
                            <div className={SharedStyles.headingContainer}>
                            <h1 className={SharedStyles.h1Heading}>Choose Voice</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Active Voice"
                                description={`The subject of the sentence performs the action described by the verb.`}
                                onClick={() => handleLanguage('active-voice')}
                            />
                            <HeadingDescCard
                                title="Passive Voice"
                                description={` The subject of the sentence receives the action performed by the verb, and the agent (doer) may or may not be mentioned.`}
                                onClick={() => handleLanguage('passive-voice')}
                            />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default Learn