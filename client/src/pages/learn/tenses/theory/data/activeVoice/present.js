
const INDEFINITE = 'Indefinite';
const CONTINUOUS = 'Continuous';
const PERFECT = 'Perfect';
const PERFECT_CONTINUOUS = 'Perfect Continuous';
const SINGULAR = 'singular';
const PLURAL = 'plural';

export const presentAPI = [
    // INDEFINITE TENSES 
    {
        'code': 'IND', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${INDEFINITE} Tense (Positive)`,
        'meaning': 'The Present Indefinite Tense (positive) is used to describe habitual actions, general truths, and routines that occur regularly in the present.',
        'singularFormat': 'Subject + (1st form of verb + s/es) + Object',
        'pluralFormat': 'Subject + 1st form of verb + Object',
        'singularExamples': [
            {'english': 'Boy writes a letter.', 'hindi': 'लड़का एक पत्र लिखता है।'},
            {'english': 'He writes a letter.', 'hindi': 'वह एक पत्र लिखता है।'},
            {'english': 'She writes a letter.', 'hindi': 'वह एक पत्र लिखती है।'},
            {'english': 'Ram writes a letter.', 'hindi': 'राम एक पत्र लिखता है।'},
        ],
        'pluralExamples': [
            {'english': 'Boys write a letter.', 'hindi': 'लड़के एक पत्र लिखते हैं।'},
            {'english': 'They write a letter.', 'hindi': 'वे एक पत्र लिखते हैं।'},
            {'english': 'You write a letter.', 'hindi': 'तुम एक पत्र लिखते हो।'},
            {'english': 'I write a letter.', 'hindi': 'मैं एक पत्र लिखता/लिखती हूँ।'},
            {'english': 'We write a letter.', 'hindi': 'हम एक पत्र लिखते हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Indefinite Tense (positive) for actions that are regular, habitual, or general truths in the present.`,
                example: `He usually takes the bus to work. (Describing a routine)`,
            },
            {
                usage: `Commonly used with adverbs and expressions like always, often, usually, every day, etc.`,
                example: `The Earth revolves around the sun. (Stating a general truth)`,
            },
        ],
        'commonMistakes': [
            {
                usage: `Ensure correct verb conjugation, especially adding "s" or "es" for third person singular (He, She, It, Name).`,
                incorrect: `He eat dinner at 7 PM.`,
                correct: `He eats dinner at 7 PM.`,
            },
            {
                usage: `Use appropriate adverbs or time expressions to convey the regularity of the action.`,
                incorrect: `She reads a book rarely.`,
                correct: `She rarely reads a book.`,
            },
        ]
    },
    {
        'code': 'IND', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${INDEFINITE} Tense (Negative)`,
        'meaning': 'The Present Indefinite Tense (negative) is used to express actions that do not happen or are not true in the present.',
        'singularFormat': 'Subject + does not + 1st form of verb + Object',
        'pluralFormat': 'Subject + do not + 1st form of verb + Object',
        'singularExamples': [
            {'english': 'Boy does not write a letter.', 'hindi': 'लड़का एक पत्र नहीं लिखता हैं।'},
            {'english': 'He does not write a letter.', 'hindi': 'वह एक पत्र नहीं लिखता हैं।'},
            {'english': 'She does not write a letter.', 'hindi': 'वह एक पत्र नहीं लिखती हैं।'},
            {'english': 'Ram does not write a letter.', 'hindi': 'राम एक पत्र नहीं लिखता हैं।'},
        ],
        'pluralExamples': [
            {'english': 'Boys do not write a letter.', 'hindi': 'लड़के एक पत्र नहीं लिखते हैं।'},
            {'english': 'They do not write a letter.', 'hindi': 'वे एक पत्र नहीं लिखते हैं।'},
            {'english': 'I do not write a letter.', 'hindi': 'मैं एक पत्र नहीं लिखता/लिखती हैं।'},
            {'english': 'You do not write a letter.', 'hindi': 'तुम एक पत्र नहीं लिखते हो।'},
            {'english': 'We do not write a letter.', 'hindi': 'हम एक पत्र नहीं लिखते हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Indefinite Tense (negative) to indicate actions that are not happening or are not true in the present.`,
                example: `I do not like spicy food. (Expressing a personal preference)`,
            },
            {
                usage: `Employ "do not" for plural subjects.`,
                example: `They do not work on Saturdays. (Stating a non-occurrence)`,
            },
            {
                usage: `Employ "does not" for singular subjects.`,
                example: `She does not speak Spanish. (Indicating a lack of ability)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure correct usage of "do not" or "does not" based on the subject.`,
                incorrect: `He does not reads a book every evening.`,
                correct: `He does not read a book every evening.`,
            },
            {
                beware: `Use the base form of the verb after "do not" or "does not."`,
                incorrect: `We do not eats dinner at home.`,
                correct: `We do not eat dinner at home.`,
            },
        ]
    },
    {
        'code': 'IND', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${INDEFINITE} Tense (Interrogative)`,
        'meaning': 'The Present Indefinite Tense (interrogative) is used to form questions about actions or situations that occur regularly or are generally true in the present.',
        'singularFormat': 'Does + Subject + 1st form of verb + Object?',
        'pluralFormat': 'Do + Subject + 1st form of verb + Object?',
        'singularExamples': [
            {'english': 'Does boy write a letter?', 'hindi': 'क्या लड़का एक पत्र लिखता है?'},
            {'english': 'Does he write a letter?', 'hindi': 'क्या वह एक पत्र लिखता है?'},
            {'english': 'Does she write a letter?', 'hindi': 'क्या वह एक पत्र लिखती है?'},
            {'english': 'Does Ram write a letter?', 'hindi': 'क्या राम एक पत्र लिखता है?'},
        ],
        'pluralExamples': [
            {'english': 'Do boys write a letter?', 'hindi': 'क्या लड़के एक पत्र लिखते हैं?'},
            {'english': 'Do they write a letter?', 'hindi': 'क्या वे एक पत्र लिखते हैं?'},
            {'english': 'Do I write a letter?', 'hindi': 'क्या मैं एक पत्र लिखता/लिखती हूँ?'},
            {'english': 'Do you write a letter?', 'hindi': 'क्या तुम एक पत्र लिखते हो?'},
            {'english': 'Do we write a letter?', 'hindi': 'क्या हम एक पत्र लिखते हैं?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Indefinite Tense (interrogative) when asking questions about actions or situations that are regular or generally true in the present.`,
                example: `Do you like watching movies? (Asking about a regular preference)`,
            },
            {
                usage: `Employ "do" for plural subjects.`,
                example: `Do they speak French? (Inquiring about a general ability)`,
            },
            {
                usage: `Employ "does" for singular subjects.`,
                example: `Does he speak French? (Inquiring about a general ability)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure correct usage of "do" or "does" based on the subject.`,
                incorrect: `Does they play soccer on weekends?`,
                correct: `Do they play soccer on weekends?`,
            },
            {
                beware: `Use the base form of the verb after "do" or "does."`,
                incorrect: `Does he reads a book every evening?`,
                correct: `Does he read a book every evening?`,
            },
        ]
    },

    // CONTINUOUS TENSES 
    {   
        'code': 'CON', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Present Continuous Tense (positive) is used to describe actions that are happening at the current moment or around the present time.',
        'singularFormat': 'Subject + is + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + am/are + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy is writing a letter', 'hindi': 'लड़का एक पत्र लिख रहा है।'},
            {'english': 'He is writing a letter', 'hindi': 'वह एक पत्र लिख रहा है।'},
            {'english': 'She is writing a letter', 'hindi': 'वह एक पत्र लिख रही है।'},
            {'english': 'Ram is writing a letter', 'hindi': 'राम एक पत्र लिख रहा है।'},
        ],
        'pluralExamples': [
            {'english': 'Boys are writing a letter.', 'hindi': 'लड़के एक पत्र लिख रहे हैं।'},
            {'english': 'They are writing a letter.', 'hindi': 'वे एक पत्र लिख रहे हैं।'},
            {'english': 'You are writing a letter.', 'hindi': 'आप एक पत्र लिख रहे हैं।'},
            {'english': 'We are writing a letter.', 'hindi': 'हम एक पत्र लिख रहे हैं।'},
            {'english': 'I am writing a letter. (note: am is used)', 'hindi': 'मैं एक पत्र लिख रहा/रही हूँ।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Continuous Tense (positive) to talk about actions that are occurring at the present moment or around the current period.`,
                example: `I am working on a project for my job. (Describing a current task)`,
            },
            {
                usage: `Often used with time expressions like now, at the moment, currently, etc.`,
                example: `She is talking on the phone with her friend. (Indicating an ongoing conversation)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "am," "are," or "is" based on the subject.`,
                incorrect: `They is playing soccer in the park.`,
                correct: `They are playing soccer in the park.`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `He is cook dinner for the family.`,
                correct: `He is cooking dinner for the family.`,
            },
        ]
    },
    {   
        'code': 'CON', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Present Continuous Tense (negative) is used to express actions that are not happening at the current moment or around the present time.',
        'singularFormat': 'Subject + is not + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + am/are not + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy is not writing a letter', 'hindi': 'लड़का एक पत्र नहीं लिख रहा है।'},
            {'english': 'He is not writing a letter', 'hindi': 'वह एक पत्र नहीं लिख रहा है।'},
            {'english': 'She is not writing a letter', 'hindi': 'वह एक पत्र नहीं लिख रही है।'},
            {'english': 'Ram is not writing a letter', 'hindi': 'राम एक पत्र नहीं लिख रहा है।'},
        ],
        'pluralExamples': [
            {'english': 'Boys are not writing a letter.', 'hindi': 'लड़के एक पत्र नहीं लिख रहे हैं।'},
            {'english': 'They are not writing a letter.', 'hindi': 'वे एक पत्र नहीं लिख रहे हैं।'},
            {'english': 'You are not writing a letter.', 'hindi': 'आप एक पत्र नहीं लिख रहे हैं।'},
            {'english': 'We are not writing a letter.', 'hindi': 'हम एक पत्र नहीं लिख रहे हैं।'},
            {'english': 'I am not writing a letter. (note: am is used)', 'hindi': 'मैं एक पत्र नहीं लिख रहा/रही हूँ।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Continuous Tense (negative) to indicate actions that are not occurring at the present moment or around the current period.`,
                example: `I am not working on weekends. (Expressing non-occurrence)`,
            },
            {
                usage: `Employ "am not," "are not," or "is not" based on the subject.`,
                example: `She is not talking on the phone right now. (Denying the current action)`,
            },
            {
                usage: `Employ "am not," "are not," or "is not" based on the subject.`,
                example: `They are not talking on the phone right now. (Denying the current action)`,
            },
            {
                usage: `Employ "am not," "are not," or "is not" based on the subject.`,
                example: `I am not talking on the phone right now. (Denying the current action)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "am not," "are not," or "is not" based on the subject.`,
                incorrect: `They is not playing soccer in the park.`,
                correct: `They are not playing soccer in the park.`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `He is not cook dinner for the family.`,
                correct: `He is not cooking dinner for the family.`,
            },
        ]
    },
    {   
        'code': 'CON', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Present Continuous Tense (interrogative) is used to form questions about actions that are happening at the current moment or around the present time.',
        'singularFormat': 'Is + Subject + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Am/Are + Subject + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Is boy writing a letter?', 'hindi': 'क्या लड़का एक पत्र लिख रहा है?'},
            {'english': 'Is he writing a letter?', 'hindi': 'क्या वह एक पत्र लिख रहा है?'},
            {'english': 'Is she writing a letter?', 'hindi': 'क्या वह एक पत्र लिख रही है?'},
            {'english': 'Is Ram writing a letter?', 'hindi': 'क्या राम एक पत्र लिख रहा है?'},
        ],
        'pluralExamples': [
            {'english': 'Are boys writing a letter?', 'hindi': 'क्या लड़के एक पत्र लिख रहे हैं?'},
            {'english': 'Are they writing a letter?', 'hindi': 'क्या वे एक पत्र लिख रहे हैं?'},
            {'english': 'Are You writing a letter?', 'hindi': 'क्या आप एक पत्र लिख रहे हैं?'},
            {'english': 'Are We writing a letter?', 'hindi': 'क्या हम एक पत्र लिख रहे हैं?'},
            {'english': 'Am I writing a letter? (note: am is used)', 'hindi': 'क्या मैं एक पत्र लिख रहा हूँ?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Continuous Tense (interrogative) when asking about actions that are currently in progress or happening around the present time.`,
                example: `Are you working on a new project? (Inquiring about a current task)`,
            },
            {
                usage: `Employ "Am," "Are," or "Is" based on the subject.`,
                example: `Is she talking on the phone right now? (Asking about an ongoing conversation)`,
            },
            {
                usage: `Employ "Am," "Are," or "Is" based on the subject.`,
                example: `Are they talking on the phone right now? (Asking about an ongoing conversation)`,
            },
            {
                usage: `Employ "Am," "Are," or "Is" based on the subject.`,
                example: `Am I talking on the phone right now? (Asking about an ongoing conversation)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "Am," "Are," or "Is" based on the subject.`,
                incorrect: `They is playing soccer in the park?`,
                correct: `Are they playing soccer in the park?`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `Is he cook dinner for the family?`,
                correct: `Is he cooking dinner for the family?`,
            },
        ]
    },     

    // PERFECT TENSES 
    {   
        'code': 'PER', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${PERFECT} Tense (Positive)`,
        'meaning': 'The Present Perfect Tense (positive) is used to describe actions that started in the past and have a connection to the present, indicating completion or relevance.',
        'singularFormat': 'Subject + has + 3rd form of verb + Object',
        'pluralFormat': 'Subject + have + 3rd form of verb + Object',
        'singularExamples': [
            {'english': 'Boy has written a letter.', 'hindi': 'लड़का एक पत्र लिख चुका है।'},
            {'english': 'He has written a letter.', 'hindi': 'वह एक पत्र लिख चुका है।'},
            {'english': 'She has written a letter.', 'hindi': 'वह एक पत्र लिख चुकी है।'},
            {'english': 'Ram has written a letter.', 'hindi': 'राम एक पत्र लिख चुका है।'},
        ],
        'pluralExamples': [
            {'english': 'Boys have written a letter.', 'hindi': 'लड़के एक पत्र लिख चुके हैं।'},
            {'english': 'They have written a letter.', 'hindi': 'वे एक पत्र लिख चुके हैं।'},
            {'english': 'I have written a letter.', 'hindi': 'मैं एक पत्र लिखा चुका हूँ।'},
            {'english': 'You have written a letter.', 'hindi': 'आप एक पत्र लिख चुके हो।'},
            {'english': 'We have written a letter.', 'hindi': 'हम एक पत्र लिख चुके हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Tense (positive) to express actions that started in the past and have relevance or completion in the present.`,
                example: `I have lived in this city for five years. (Expressing a duration of time up to the present)`,
            },
            {
                usage: `Often used with time expressions like already, several times, before, this month, etc.`,
                example: `She has written three novels. (Stating a completed action with present relevance)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "have" or "has" based on the subject.`,
                incorrect: `She has finished her homework.`,
                correct: `She has finished her homework.`,
            },
            {
                beware: `Use the past participle form of the main verb.`,
                incorrect: `They have visit Paris several times.`,
                correct: `They have visited Paris several times.`,
            },
        ]
    },
    {   
        'code': 'PER', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${PERFECT} Tense (Negative)`,
        'meaning': 'The Present Perfect Tense (negative) is used to express actions that have not occurred or have not been completed up to the present moment.',
        'singularFormat': 'Subject + has not + 3rd form of verb + Object',
        'pluralFormat': 'Subject + have not + 3rd form of verb + Object',
        'singularExamples': [
            {'english': 'Boy has not written a letter.', 'hindi': 'लड़का एक पत्र नहीं लिख चुका है।'},
            {'english': 'He has not written a letter.', 'hindi': 'वह एक पत्र नहीं लिख चुका है।'},
            {'english': 'She has not written a letter.', 'hindi': 'वह एक पत्र नहीं लिख चुकी है।'},
            {'english': 'Ram has not written a letter.', 'hindi': 'राम एक पत्र नहीं लिख चुका है।'},
        ],
        'pluralExamples': [                
            {'english': 'Boys have not written a letter.', 'hindi': 'लड़के एक पत्र नहीं लिख चुके हैं।'},
            {'english': 'They have not written a letter.', 'hindi': 'वे एक पत्र नहीं लिख चुके हैं।'},
            {'english': 'I have not written a letter.', 'hindi': 'मैं एक पत्र नहीं लिख चुका है।'},
            {'english': 'You have not written a letter.', 'hindi': 'आप एक पत्र नहीं लिख चुके हो।'},
            {'english': 'We have not written a letter.', 'hindi': 'हम एक पत्र नहीं लिख चुके है।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Tense (negative) to convey actions that have not happened or are not completed up to the present moment.`,
                example: `I have not traveled to Europe. (Expressing an absence of a specific experience)`,
            },
            {
                usage: `Often used with time expressions like yet, never, not yet, this month, etc.`,
                example: `They have not finished the project. (Indicating non-completion)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "have not" or "has not" based on the subject.`,
                incorrect: `She has not finished her homework.`,
                correct: `She has not finished her homework.`,
            },
            {
                beware: `Use the past participle form of the main verb.`,
                incorrect: `They have not visit Paris yet.`,
                correct: `They have not visited Paris yet.`,
            },
        ]
    },
    {   
        'code': 'PER', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${PERFECT} Tense (Interrogative)`,
        'meaning': 'The Present Perfect Tense (interrogative) is used to form questions about actions that have a connection to the present, indicating completion or relevance.',
        'singularFormat': 'Has + Subject + 3rd form of verb + Object?',
        'pluralFormat': 'Have + Subject + 3rd form of verb + Object?',
        'singularExamples': [
            {'english': 'Has boy written a letter?', 'hindi': 'क्या लड़का एक पत्र लिख चुका है?'},
            {'english': 'Has he written a letter?', 'hindi': 'क्या वह एक पत्र लिख चुका है?'},
            {'english': 'Has she written a letter?', 'hindi': 'क्या वह एक पत्र लिख चुकी है?'},
            {'english': 'Has Ram written a letter?', 'hindi': 'क्या राम ने एक पत्र लिख चुका है?'},
        ],
        'pluralExamples': [
            {'english': 'Have boys written a letter?', 'hindi': 'क्या लड़के एक पत्र लिख चुके हैं?'},
            {'english': 'Have they written a letter?', 'hindi': 'क्या वे एक पत्र लिख चुके हैं?'},
            {'english': 'Have I written a letter?', 'hindi': 'क्या मैं एक पत्र लिख चुका हूँ?'},
            {'english': 'Have you written a letter?', 'hindi': 'क्या आप एक पत्र लिख चुका हो?'},
            {'english': 'Have we written a letter?', 'hindi': 'क्या हम एक पत्र लिख चुके है?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Tense (interrogative) when asking questions about actions that started in the past and have relevance or completion in the present.`,
                exmaple: `Have you ever traveled to Europe? (Inquiring about a specific experience)`,
            },
            {
                usage: `Employ "Have" for plural subjects.`,
                exmaple: `Have they finished the report? (Asking about a recent completion)`,
            },
            {
                usage: `Employ "Has" for singular subjects.`,
                exmaple: `Has she finished the report? (Asking about a recent completion)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "Have" or "Has" based on the subject.`,
                incorrect:  `Has they visited Paris yet?`,
                correct: `Have they visited Paris yet?`,
            },
            {
                beware: `Use the past participle form of the main verb.`,
                incorrect:  `Have she seen that movie before?`,
                correct: `Has she seen that movie before?`,
            },
        ]
    },

    // PERFECT CONTINUOUS TENSES 
    {   
        'code': 'PCON', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${PERFECT_CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Present Perfect Continuous Tense (positive) is used to express the duration of an action that started in the past, has continued into the present, and may still be ongoing.',
        'singularFormat': 'Subject + has been + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + have been + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy has been writing a letter since morning', 'hindi': 'लड़का सुबह से एक पत्र लिख रहा है।'},
            {'english': 'He has been writing a letter since yesterday', 'hindi': 'वह कल से एक पत्र लिख रहा है।'},
            {'english': 'She has been writing a letter since 2\'o clock', 'hindi': 'वह 2 बजे से एक पत्र लिख रही है।'},
            {'english': 'Ram has been writing a letter for last 2 week', 'hindi': 'राम पिछले 2 हफ्ते से एक पत्र लिख रहा है।'},
        ],
        'pluralExamples': [
            {'english': 'Boys have been writing a letter since morning.', 'hindi': 'लड़के सुबह से एक पत्र लिख रहे हैं।'},
            {'english': 'They have been writing a letter since yesterday.', 'hindi': 'वे कल से एक पत्र लिख रहे हैं।'},
            {'english': 'I have been writing a letter since 2\'o clock.', 'hindi': 'मैं 2 बजे से एक पत्र लिख रहा हूँ।'},
            {'english': 'You have been writing a letter for last 2 week.', 'hindi': 'आप पिछले 2 हफ्ते से एक पत्र लिख रहे हैं।'},
            {'english': 'We have been writing a letter for last 2 week.', 'hindi': 'हम पिछले 2 हफ्ते से एक पत्र लिख रहे हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Continuous Tense (positive) to highlight the continuous duration of an action that started in the past and is still ongoing in the present.`,
                example: `I have been learning Spanish for six months. (Emphasizing the duration of learning)`,
            },
            {
                usage: `Often used with time expressions like for, since, all day, etc.`,
                example: `She has been working here since graduation. (Indicating continuous employment)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "have been" or "has been" based on the subject.`,
                incorrect: `She has been studying for two hours.`,
                correct: `She has been studying for two hours.`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `They have been work on the project all morning.`,
                correct: `They have been working on the project all morning.`,
            },
        ]
    },
    {   
        'code': 'PCON', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${PERFECT_CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Present Perfect Continuous Tense (negative) is used to indicate that a continuous action, which started in the past and continued into the present, has not been happening or is not true.',
        'singularFormat': 'Subject + has not been + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + have not been + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy has not been writing a letter since morning.', 'hindi': 'लड़का सुबह से एक पत्र नहीं लिख रहा है।'},
            {'english': 'He has not been writing a letter since yesterday.', 'hindi': 'वह कल से एक पत्र नहीं लिख रहा है।'},
            {'english': 'She has not been writing a letter since 2\'o clock.', 'hindi': 'वह 2 बजे से एक पत्र नहीं लिख रही है।'},
            {'english': 'Ram has not been writing a letter for last 2 week.', 'hindi': 'राम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहा है।'},
        ],
        'pluralExamples': [
            {'english': 'Boys have not been writing a letter since morning.', 'hindi': 'लड़के सुबह से एक पत्र नहीं लिख रहे हैं।'},
            {'english': 'They have not been writing a letter since yesterday.', 'hindi': 'वे कल से एक पत्र लिख नहीं रहे हैं।'},
            {'english': 'I have not been writing a letter since 2\'o clock.', 'hindi': 'मैं 2 बजे से एक पत्र नहीं लिख रहा हूँ।'},
            {'english': 'You have not been writing a letter for last 2 week.', 'hindi': 'आप पिछले 2 हफ्ते से एक पत्र नहीं लिख रहे हो।'},
            {'english': 'We have not been writing a letter for last 2 week.', 'hindi': 'हम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहे हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Continuous Tense (negative) to convey that a continuous action, ongoing from the past to the present, has not been happening or is not true.`,
                example: `I have not been jogging every morning. (Expressing the absence of a continuous habit)`,
            },
            {
                usage: `Often used with time expressions like for, since, all day, etc.`,
                example: `They have not been working together lately. (Indicating a break in the collaboration)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "have not been" or "has not been" based on the subject.`,
                incorrect: `She have not been studying for two hours.`,
                correct: `She has not been studying for two hours.`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `They have not been work on the project all morning.`,
                correct: `They have not been working on the project all morning.`,
            },
        ]
    },
    {   
        'code': 'PCON', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${PERFECT_CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Present Perfect Continuous Tense (interrogative) is used to form questions about the duration of a continuous action that started in the past and continued into the present.',
        'singularFormat': 'Has + Subject + been + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Have + Subject + been + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Has boy been writing a letter since morning?', 'hindi': 'क्या लड़का सुबह से एक पत्र लिख रहा है?'},
            {'english': 'Has he been writing a letter since yesterday?', 'hindi': 'क्या वह कल से एक पत्र लिख रहा है?'},
            {'english': 'Has she been writing a letter since 2\'o clock?', 'hindi': 'क्या वह 2 बजे से एक पत्र लिख रही है?'},
            {'english': 'Has Ram been writing a letter for last 2 week?', 'hindi': 'क्या राम पिछले 2 हफ्ते से एक पत्र लिख रहा है?'},
        ],
        'pluralExamples': [
            {'english': 'Have boys been writing a letter since morning?', 'hindi': 'क्या लड़के सुबह से एक पत्र लिख रहे हैं?'},
            {'english': 'Have they been writing a letter since yesterday?', 'hindi': 'क्या वे कल से एक पत्र लिख रहे हैं?'},
            {'english': 'Have I been writing a letter since 2\'o clock?', 'hindi': 'क्या मैं 2 बजे से एक पत्र लिख रहा हूँ?'},
            {'english': 'Have you been writing a letter for last 2 week?', 'hindi': 'क्या आप पिछले 2 हफ्ते से एक पत्र लिख रहे हैं?'},
            {'english': 'Have we been writing a letter for last 2 week?', 'hindi': 'क्या हम पिछले 2 हफ्ते से एक पत्र लिख रहे हैं?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Continuous Tense (interrogative) when asking questions about the duration of a continuous action that started in the past and continued into the present.`,
                example: `Have you been studying Spanish for a long time? (Inquiring about the duration of study)`,
            },
            {
                usage: `Employ "Have" for plural subjects.`,
                example: `Has she been working on the project all day? (Asking about continuous effort)`,
            },
            {
                usage: `Employ "Has" for singular subjects.`,
                example: `Has she been working on the project all day? (Asking about continuous effort)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "Have" or "Has" based on the subject.`,
                incorrect: `Has they been working on the project all morning?`,
                correct: `Have they been working on the project all morning?`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `Have he been practicing the guitar since noon?`,
                correct: `Has he been practicing the guitar since noon?`,
            },
        ]
    },
                
]
            
            
            