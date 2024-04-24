import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// styles
import SharedStyles from '../../css/shared/headingDescWithBadgeCard.module.css';


// https
import Axios from '../../https/https.js';


// components 
import HeadingDescWithBadgeCard from '../../components/cards/headingDescWithBadgeCard/HeadingDescWithBadgeCard.jsx';
import Header from '../../components/Header.jsx';
import {Loader} from "../../components/loaders/Loader.jsx";


// utils 
import {checkUserAuth} from '../../utils/checkUserAuth.js';
import {pageLoaded} from '../../utils/pageLoaded.js';



function Home() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language} = useParams();

    function handleLanguage(x) {
        navigate(`/speak/${language}/basics/${x}`);
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
                            <h1 className={SharedStyles.h1Heading}>Let's Master English</h1>
                            </div>
                            <div className={SharedStyles.headingDescWithBadgeCard}>
                            <HeadingDescWithBadgeCard
                                title="Introduction"
                                description="Let's start the language journey by adopting the right mindset."
                                badge="Free"
                                onClick={() => handleLanguage('introduction')}
                            />
                            <HeadingDescWithBadgeCard
                                title="Part of speech"
                                description="Understanding parts of speech is crucial for interpreting sentences accurately."
                                badge="Free"
                                onClick={() => handleLanguage('parts-of-speech')}
                            />
                            <HeadingDescWithBadgeCard
                                title="Voice"
                                description="Understanding the concept of voice is essential for accurately conveying how actions are performed."
                                badge="Free"
                                onClick={() => handleLanguage('voice')}
                            />
                            <HeadingDescWithBadgeCard
                                title="Tense"
                                description="Mastering tense is key to effectively expressing the timing of actions, and providing clarity."
                                badge="Free"
                                onClick={() => handleLanguage('tense')}
                            />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default Home