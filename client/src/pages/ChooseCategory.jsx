import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// styles
import SharedStyles from '../css/shared/headingDescWithBadgeCard.module.css';


// https
import Axios from '../https/https.js';


// components 
import HeadingDescWithBadgeCard from '../components/cards/headingDescWithBadgeCard/HeadingDescWithBadgeCard.jsx';
import Header from '../components/Header.jsx';
import {Loader} from "../components/loaders/Loader.jsx";


// utils 
import {checkUserAuth} from '../utils/checkUserAuth.js';
import {pageLoaded} from '../utils/pageLoaded.js';



function GrammerAndPlayground() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language} = useParams();

    function handleLanguage(x) {
        navigate(`/speak/${language}/${x}`);
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
                            <h1 className={SharedStyles.h1Heading}>Choose Your Category</h1>
                            </div>
                            <div className={SharedStyles.headingDescWithBadgeCard}>
                            <HeadingDescWithBadgeCard
                                title="Start"
                                description="Let's start the language journey by mastering some main topics and concepts."
                                badge="Free"
                                onClick={() => handleLanguage('basics')}
                            />
                            <HeadingDescWithBadgeCard
                                title="Learn"
                                description="Enhance your English proficiency by delving into the intricacies of grammar."
                                badge="Free"
                                onClick={() => handleLanguage('grammar')}
                            />
                            <HeadingDescWithBadgeCard
                                title="Practice"
                                description="Let's refine your language skills for greater fluency and confidence."
                                badge="Free"
                                onClick={() => handleLanguage('practice')}
                            />
                            <HeadingDescWithBadgeCard
                                title="Resources"
                                description="Let's expand your language skills with some useful resources."
                                badge="Free"
                                onClick={() => handleLanguage('resources')}
                            />
                            {/* <HeadingDescWithBadgeCard
                                title="Conversation"
                                // description={auth ? "Improve Your Spoken English Using AI" : "Please Login to Use This Feature"}
                                description={"Cooming Soon"}
                                badge="Free"
                                // onClick={() => handleLanguage('conversation')}
                                onClick={() => {}}
                            /> */}
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default GrammerAndPlayground