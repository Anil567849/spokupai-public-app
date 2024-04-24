import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


// components
import HeadingDescCard from '../../../components/cards/headingDescCard/HeadingDescCard.jsx';
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";


// styles 
import SharedStyles from '../../../css/shared.module.css';


// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';


function ChooseTense() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language, voice} = useParams();
    function handleLanguage(tense) {
        navigate(`/speak/${language}/grammar/tenses/${voice}/${tense}`)
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
                                <h1 className={SharedStyles.h1Heading}>Choose Category To Learn</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Past"
                                description="The past is all about things that already happened, events and experiences that are now history."
                                onClick={() => handleLanguage('past')}
                            />
                            <HeadingDescCard
                                title="Present"
                                description="The present is right now, what's happening at this very moment in your life or around you."
                                onClick={() => handleLanguage('present')}
                            />
                            <HeadingDescCard
                                title="Future"
                                description="The future is what's coming up next, all the things that haven't happened yet but will happen."
                                onClick={() => handleLanguage('future')}
                            />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default ChooseTense