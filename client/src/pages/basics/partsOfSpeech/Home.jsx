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
    
    const {language, tense} = useParams();
    
    function handleLanguage(learn) {
        navigate(`/speak/${language}/basics/parts-of-speech/${learn}`)
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
                                <h1 className={SharedStyles.h1Heading}>Parts of Speech</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Introduction"
                                description="Parts of speech classify words based on their syntactic and semantic functions within a sentence."
                                onClick={() => handleLanguage('intro')}
                            />
                            <HeadingDescCard
                                title="Noun"
                                description="Nouns are words that label persons, places, things, or concepts."
                                onClick={() => handleLanguage('noun')}
                            />
                            <HeadingDescCard
                                title="Pronoun"
                                description="Pronouns replace nouns to improve sentence flow and avoid redundancy."
                                onClick={() => handleLanguage('pronoun')}
                            />
                            <HeadingDescCard
                                title="Verb"
                                description="Verbs express actions, events, or states within a sentence."
                                onClick={() => handleLanguage('verb')}
                            />
                            <HeadingDescCard
                                title="Adverb"
                                description="Adverbs add information by modifying verbs, adjectives, or other adverbs."
                                onClick={() => handleLanguage('adverb')}
                            />
                            <HeadingDescCard
                                title="Adjective"
                                description="Adjectives enhance nouns by providing details or attributes."
                                onClick={() => handleLanguage('adjective')}
                            />
                            <HeadingDescCard
                                title="Preposition"
                                description="Prepositions establish connections between elements in a sentence, conveying spatial or temporal relationships."
                                onClick={() => handleLanguage('preposition')}
                            />
                            <HeadingDescCard
                                title="Conjunction"
                                description="Conjunctions link words or groups of words to create cohesive and structured sentences."
                                onClick={() => handleLanguage('conjunction')}
                            />
                            <HeadingDescCard
                                title="Interjection"
                                description="Interjections convey strong emotions or abrupt exclamations within a sentence."
                                onClick={() => handleLanguage('interjection')}
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