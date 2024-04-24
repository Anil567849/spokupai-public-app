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


function Home() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language} = useParams();

    function handleLanguage(typeOfVerb) {
        navigate(`/speak/${language}/grammar/three-forms-of-verb/${typeOfVerb}`)
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
                            <h1 className={SharedStyles.h1Heading}>Practice Verbs</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Regular Verbs"
                                description=" A verb that follows a predictable pattern in forming its past tense and past participle by adding '-ed' to the base form."
                                onClick={() => handleLanguage('regular-verbs')}
                            />
                            <HeadingDescCard
                                title="Irregular Verbs"
                                description="A verb that does not follow the typical pattern in forming its past tense and past participle and has unique forms for these tenses."
                                onClick={() => handleLanguage('irregular-verbs')}
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