import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

// Auth Pages 
import Auth from './pages/auth/Auth.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import Otp from './pages/auth/Otp.jsx';

// App Maintainance Pages
import RegistrationClosed from './pages/temp/RegistrationClosed.jsx';

// Main Pages
import Home from './pages/Home.jsx';

// Basic Pages
import BasicsHome from './pages/basics/Home.jsx';
import BasicsIntro from './pages/basics/introduction/Intro.jsx';
import PartsOfSpeechHome from './pages/basics/partsOfSpeech/Home.jsx';
import PartsOfSpeech from './pages/basics/partsOfSpeech/PartOfSpeech.jsx';
import BasicsVoice from './pages/basics/voice/Voice.jsx';
import BasicsTense from './pages/basics/tense/Tense.jsx';

// Resources Page
import ResourceHome from './pages/resources/Resources.jsx';

// Learn Pages 
import Learn from './pages/learn/Learn.jsx';
import ChooseCategory from './pages/ChooseCategory.jsx';

// Gerund Pages 
import GerundPractice from './pages/learn/gerund/Practice.jsx';


// Tesens Pages
import ChooseTense from './pages/learn/tenses/ChooseTense.jsx';
import VoiceHome from './pages/learn/Voice.jsx';
import TheoryOrPractice from './pages/learn/tenses/TheoryOrPractice.jsx';
import TenseTheory from './pages/learn/tenses/theory/TenseTheory.jsx';
import TenseAspectTheory from './pages/learn/tenses/theory/TenseAspect.jsx';

import TensePractice from './pages/learn/tenses/practice/TensePractice.jsx';

//Modal Verbs Pages
import ModalVerbsHome from './pages/learn/modalVerbs/Home.jsx';
import ModalVerbsPractice from './pages/learn/modalVerbs/Practice.jsx';

//Phrasal Verbs Pages
// import PhrasalVerbsPractice from './pages/learn/phrasalVerbs/Practice.jsx';

//Idioms Pages
import IdiomsPractice from './pages/learn/idioms/Practice.jsx';

//Preposition
import PrepositionPractice from './pages/learn/prepositions/Practice.jsx';

//Conjunction
import ConjunctionPractice from './pages/learn/conjunctions/Practice.jsx';

//Three Form of Verbs Pages
import ThreeFormsOfVerbHome from './pages/learn/threeFormsOfVerb/ThreeFormsOfVerbHome.jsx';
import VerbsPractice from './pages/learn/threeFormsOfVerb/practice/VerbsPractice.jsx';

// Vocabulary Pages
import VocabularyPractice from './pages/learn/vocabulary/Practice.jsx';

// Practice: 
import PracticePage from './pages/practice/Home.jsx';
import EverydayPracticeDifficulty from './pages/practice/everydayPhrases/ChooseLevel.jsx';
import EverydayPhrasePractice from './pages/practice/everydayPhrases/Practice.jsx';
import PracticalScenarios from './pages/practice/practicalScenarios/Practice.jsx';


// Menu Pages 
import PrivacyPolicy from './pages/menu/PrivacyPolicy.jsx';



function App() {

  return (
    <div>
      <Routes>
        {/* Main  */}
        <Route path="/" element={ <Home/> }/>
        <Route path="/speak/:language" element={ <ChooseCategory/> }/>


        {/* Auth  */}
        <Route path="/auth" element={ <Auth/> }/>
        <Route path="/auth/login" element={ <Login/> }/>
        <Route path="/auth/signup" element={ <Signup/> }/>
        <Route path="/auth/otp" element={ <Otp/> }/>
        {/* <Route path="/auth/:auth" element={ <RegistrationClosed/> }/> AppMaintainance */}


        {/* Menu  */}
        <Route path="/privacy-policy" element={ <PrivacyPolicy/> }/>

        {/* Basic  */}
        <Route path="/speak/:language/basics" element={ <BasicsHome/> }/>
        <Route path="/speak/:language/basics/introduction" element={ <BasicsIntro/> }/>
        <Route path="/speak/:language/basics/parts-of-speech" element={ <PartsOfSpeechHome/> }/>
        <Route path="/speak/:language/basics/parts-of-speech/:part" element={ <PartsOfSpeech/> }/>
        <Route path="/speak/:language/basics/voice" element={ <BasicsVoice/> }/>
        <Route path="/speak/:language/basics/tense" element={ <BasicsTense/> }/>

        {/* Resources */}
        <Route path="/speak/:language/resources" element={ <ResourceHome/> }/>

        {/* Learn */}
        <Route path="/speak/:language/grammar" element={ <Learn/> }/>

        {/* Tenses  */}
        <Route path="/speak/:language/grammar/tenses" element={ <VoiceHome/> }/>
        <Route path="/speak/:language/grammar/tenses/:voice" element={ <ChooseTense/> }/>
        <Route path="/speak/:language/grammar/tenses/:voice/:tense" element={ <TheoryOrPractice/> }/>
        <Route path="/speak/:language/grammar/tenses/:voice/:tense/theory" element={ <TenseTheory/> }/>
        <Route path="/speak/:language/grammar/tenses/:voice/:tense/theory/:aspect" element={ <TenseAspectTheory/> }/>

        <Route path="/speak/:language/grammar/tenses/:voice/:tense/practice" element={ <TensePractice/> }/>

        {/* modal-verbs  */}
        <Route path="/speak/:language/grammar/modal-verbs" element={ <ModalVerbsHome/> }/>
        <Route path="/speak/:language/grammar/modal-verbs/:modalVerb" element={ <ModalVerbsPractice/> }/>

        {/* phrasal-verbs  */}
        {/* <Route path="/speak/:language/grammar/phrasal-verbs" element={ <PhrasalVerbsPractice/> }/> */}

        {/* idioms */}
        <Route path="/speak/:language/grammar/idioms" element={ <IdiomsPractice/> }/>
      
        {/* practice  */}
        <Route path="/speak/:language/practice" element={ <PracticePage/> }/>
        <Route path="/speak/:language/practice/everyday-phrases" element={ <EverydayPracticeDifficulty/> }/>
        <Route path="/speak/:language/practice/everyday-phrases/:difficulty" element={ <EverydayPhrasePractice/> }/>
        <Route path="/speak/:language/practice/practical-scenarios" element={ <PracticalScenarios/> }/>

        {/* verbs  */}
        <Route path="/speak/:language/grammar/three-forms-of-verb" element={ <ThreeFormsOfVerbHome/> }/>
        <Route path="/speak/:language/grammar/three-forms-of-verb/:typeOfVerb" element={ <VerbsPractice/> }/>

        {/* gerund  */}
        <Route path="/speak/:language/grammar/gerund" element={ <GerundPractice/> }/>

        {/* preposition  */}
        <Route path="/speak/:language/grammar/preposition" element={ <PrepositionPractice/> }/>

        {/* conjunction  */}
        <Route path="/speak/:language/grammar/conjunction" element={ <ConjunctionPractice/> }/>

        {/* vocabulary  */}
        <Route path="/speak/:language/grammar/vocabulary" element={ <VocabularyPractice/> }/>

        {/* Redirect to homepage for any other route */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>
  );
}

export default App;
