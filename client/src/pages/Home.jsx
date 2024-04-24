import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

// utils 
import {checkUserAuth} from '../utils/checkUserAuth.js';
import {pageLoaded} from '../utils/pageLoaded.js';


// components 
import HeadingDescWithBadgeCard from '../components/cards/headingDescWithBadgeCard/HeadingDescWithBadgeCard.jsx';
import Header from '../components/Header.jsx';
import {Loader} from "../components/loaders/Loader.jsx";


// styles
import SharedStyles from '../css/shared/headingDescWithBadgeCard.module.css';


function Home() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        checkUserAuth('/auth', setLoading, navigate);
    }, []);

    function handleLanguage(lang) {
        navigate(`/speak/${lang}`)
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
                                <h1 className={SharedStyles.h1Heading}>Choose Your Language</h1>
                            </div>
                            <div className={SharedStyles.headingDescWithBadgeCard}>
                            <HeadingDescWithBadgeCard
                                title="English"
                                description="Improve Your Spoken English Using Science Based AI Application"
                                badge="Free"
                                onClick={() => handleLanguage('english')}
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