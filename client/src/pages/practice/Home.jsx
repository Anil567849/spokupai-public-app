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
    function handleLanguage(learn) {
        navigate(`/speak/${language}/practice/${learn}`)
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
                            <h1 className={SharedStyles.h1Heading}>Everyday Phrases</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Everyday Phrases"
                                description="Let's learn the art of effective communication through everyday conversation practice"
                                onClick={() => handleLanguage('everyday-phrases')}
                            />
                            <HeadingDescCard
                                title="Practical Scenarios"
                                description="Let's learn English with practical scenarios designed to elevate your speaking skills and confidence."
                                onClick={() => handleLanguage('practical-scenarios')}
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