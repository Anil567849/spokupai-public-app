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


function Resources() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);

    const {language} = useParams();
    function handleLanguage(learn) {
        navigate(`/speak/${language}/practice/${learn}`)
    }


    function downloadPDF(learn) {
        const pdfUrl = 'https://drive.google.com/uc?export=download&id=1JD5UcaA8S-TXOEFHyPpfF2KGOdu6mv3L';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `spokupai_english_grammar.pdf`; // download attribute with file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove the link from the document
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
                            <h1 className={SharedStyles.h1Heading}>Resources</h1>
                            </div>
                            <div className={SharedStyles.langCardContainer}>
                            <HeadingDescCard
                                title="Download Grammar Guide (PDF)"
                                description="Downlod Complete Gammar Guide (PDF) for better knowledge and fluency."
                                onClick={() => downloadPDF('grammar-guide-pdf')}
                            />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
  )
}

export default Resources