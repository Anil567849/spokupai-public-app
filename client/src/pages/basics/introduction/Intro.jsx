import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

// components 
import VideoAndTheory from '../../../components/basic/VideoAndTheory.jsx';
import Header from '../../../components/Header.jsx';
import {Loader} from "../../../components/loaders/Loader.jsx";

// utils 
import {checkUserAuth} from '../../../utils/checkUserAuth.js';



function Home() {   
     
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        checkUserAuth("/auth", setLoading, navigate);
    }, []);


    const videoLink = "https://www.youtube.com/embed/p1oHpGLLGL8?si=qSq2C8oIAOfo7anH";

  return (
        <>
            {
                loading ? <Loader loading={loading}/> : 
                <>
                    <Header />
                    <VideoAndTheory 
                    videoLink={videoLink}
                    />
                </>
            }
        </>
  )
}

export default Home