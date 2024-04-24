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


function ChooseLevel() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language} = useParams();
    function handleLanguage(level) {
        navigate(`/speak/${language}/practice/everyday-phrases/${level}`)
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
                            <h1 className={SharedStyles.h1Heading}>Choose Difficulty</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Easy"
                                description="Start your language with ease as we explore a collection of simple and commonly used English phrases."
                                onClick={() => handleLanguage('easy')}
                            />
                            <HeadingDescCard
                                title="Medium"
                                description="Take your language skills to the next level with a curated selection of medium difficulty English phrases."
                                onClick={() => handleLanguage('medium')}
                            />
                            <HeadingDescCard
                                title="Hard"
                                description="Challenge yourself with advanced English phrases designed to refine your language proficiency."
                                onClick={() => handleLanguage('hard')}
                            />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default ChooseLevel