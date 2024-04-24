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
        navigate(`/speak/${language}/grammar/modal-verbs/${learn}`)
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
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Can & Could"
                                description="Improve Can & Could by Practicing It"
                                onClick={() => handleLanguage('can-could')}
                            />
                            <HeadingDescCard
                                title="May & Might"
                                description="Improve May & Might by Practicing It"
                                onClick={() => handleLanguage('may-might')}
                            />
                            <HeadingDescCard
                                title="Shall & Should"
                                description="Improve Shall & Should by Practicing It"
                                onClick={() => handleLanguage('shall-should')}
                            />
                            <HeadingDescCard
                                title="Will & Would"
                                description="Improve Will & Would by Practicing It"
                                onClick={() => handleLanguage('will-would')}
                            />
                            <HeadingDescCard
                                title="Must & Ought To"
                                description="Improve Must & Ought To by Practicing It"
                                onClick={() => handleLanguage('must-ought-to')}
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