import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// utils 
import {checkUserAuth} from '../../../../utils/checkUserAuth.js';

// styles 
import SharedStyles from '../../../../css/shared.module.css'

// component 
import Header from '../../../../components/Header.jsx';
import {Loader} from "../../../../components/loaders/Loader.jsx";
import HeadingDescCard from "../../../../components/cards/headingDescCard/HeadingDescCard.jsx";



function TenseTheory() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);


    
    const {language, voice, tense} = useParams();
    function handleTense(learn) {
        navigate(`/speak/${language}/grammar/tenses/${voice}/${tense}/theory/${learn}`)
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
                                <h1 className={SharedStyles.h1Heading}>Learn {tense} tense</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                                <HeadingDescCard
                                    title="Indefinite"
                                    description={`It expresses actions in a general, timeless manner`}
                                    onClick={() => handleTense("indefinite")}
                                />
                                { (voice === 'active-voice') && <HeadingDescCard
                                    title="Continuous"
                                    description={`Indicates ongoing actions or events at a specific point in time`}
                                    onClick={() => handleTense("continuous")}
                                />
                                }
                                {/* I seperated passive-voice continuous tense code for clarity  */}
                                { (((voice === 'passive-voice') && (tense === 'past' || tense === 'present')))  && <HeadingDescCard
                                    title="Continuous"
                                    description={`Indicates ongoing actions or events at a specific point in time`}
                                    onClick={() => handleTense("continuous")}
                                />
                                }
                                <HeadingDescCard
                                    title="Perfect"
                                    description={`Describes actions that are completed before a specific point in time`}
                                    onClick={() => handleTense("perfect")}
                                />
                                { voice === 'active-voice' && <HeadingDescCard
                                    title="Perfect Continuous"
                                    description={`Conveys actions that started in the past, continued up to a certain point, and may still be ongoing`}
                                    onClick={() => handleTense("perfect-continuous")}
                                />
                                }
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default TenseTheory