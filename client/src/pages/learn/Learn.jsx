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
        navigate(`/speak/${language}/grammar/${learn}`)
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
                            <h1 className={SharedStyles.h1Heading}>Practice Grammar</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Tense"
                                description="Tense refers to the time of the action (past, present, or future) expressed in a sentence."
                                onClick={() => handleLanguage('tenses')}
                            />
                            <HeadingDescCard
                                title="Vocabulary"
                                description="Vocabulary refers to the set of words known and used by an individual."
                                onClick={() => handleLanguage('vocabulary')}
                            />
                            <HeadingDescCard
                                title="3 forms of verb"
                                description="The three forms of a verb are the base form, the past tense form, and the past participle form."
                                onClick={() => handleLanguage('three-forms-of-verb')}
                            />
                            <HeadingDescCard
                                title="Modal Verbs"
                                description="Modal verbs are auxiliary verbs used to express ability, possibility, necessity, and permission."
                                onClick={() => handleLanguage('modal-verbs')}
                            />
                            {/* <HeadingDescCard
                                title="Phrasal Verbs"
                                description="Testing"
                                onClick={() => handleLanguage('phrasal-verbs')}
                            /> */}
                            <HeadingDescCard
                                title="Preposition"
                                description="A preposition is a word that shows the relationship between a noun (or pronoun) and other elements in a sentence."
                                onClick={() => handleLanguage('preposition')}
                            />
                            <HeadingDescCard
                                title="Conjunction"
                                description="A conjunction is a word that connects words, phrases, or clauses in a sentence."
                                onClick={() => handleLanguage('conjunction')}
                            />
                            <HeadingDescCard
                                title="Idioms"
                                description="Idioms are expressions that cannot be deduced from the literal definitions of their individual words."
                                onClick={() => handleLanguage('idioms')}
                            />
                            <HeadingDescCard
                                title="Gerund"
                                description="A gerund is the -ing form of a verb that functions as a noun in a sentence, representing an action or a state."
                                onClick={() => handleLanguage('gerund')}
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