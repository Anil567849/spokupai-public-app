import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// styles 
import SharedStyles from '../../../css/shared.module.css';


// utils
import {checkUserAuth} from '../../../utils/checkUserAuth.js';


// components 
import HeadingDescCard from '../../../components/cards/headingDescCard/HeadingDescCard.jsx';
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";


function TheoryOrPractice() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    
    const {language, voice, tense} = useParams();
    function handleLanguage(learn) {
        navigate(`/speak/${language}/grammar/tenses/${voice}/${tense}/${learn}`)
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
                                <h1 className={SharedStyles.h1Heading}>Choose Your Intent</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Theory"
                                description={`Improve ${tense} Tenses by Learning It`}
                                onClick={() => handleLanguage('theory')}
                            />
                            <HeadingDescCard
                                title="Practice"
                                description={`Improve ${tense} Tenses by Practicing It`}
                                onClick={() => handleLanguage('practice')}
                            />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default TheoryOrPractice