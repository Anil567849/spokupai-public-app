
const INDEFINITE = 'Indefinite';
const CONTINUOUS = 'Continuous';
const PERFECT = 'Perfect';
const PERFECT_CONTINUOUS = 'Perfect Continuous';
const SINGULAR = 'singular';
const PLURAL = 'plural';

export const futureAPI = [
    // INDEFINITE TENSES 
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Positive)`,
        'meaning': 'The Future Indefinite Tense (positive) in passive voice is used to describe actions that will be completed at a specific time in the future, without specifying the doer.',
        'singularFormat': 'Subject + will + be + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + will + be + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter will be written.', 'hindi': 'एक पत्र लिखा जायेगा।'},
        ],
        'pluralExamples': [
            {'english': 'Letters will be written.', 'hindi': 'पत्र लिखे जाएँगे।'},
            {'english': 'I will be beaten.', 'hindi': 'मैं पीटा जाऊंगा।'},
            {'english': 'We will be beaten.', 'hindi': 'हमें पीटा जाएगा।'},
        ],
        'whenToUse': [   
            {
                usage: `Use Future Indefinite Tense in positive passive voice to emphasize actions that will be completed at a specific time in the future without focusing on the doer.`,
                example: `The project will be discussed by the team tomorrow. (Highlighting the future discussion without specifying who will discuss it)`,
            },
            {
                usage: `Often used when planning or making predictions about future events.`,
                example: `The decisions will be made by the committee next week. (Emphasizing the future decisions without mentioning who will make them)`,
            },
        ],
        'commonMistakes': [  
            {
                beware: `Ensure the correct use of "will be" before the past participle of the verb.`,
                incorrect: `The tasks will completed by the employees.`,
                correct: `The tasks will be completed by the employees.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The lessons will be taught. (Incomplete positive passive voice)`,
                correct: `The lessons will be taught by the teacher. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Negative)`,
        'meaning': 'The Future Indefinite Tense (negative) in passive voice is used to describe actions that will not be completed at a specific time in the future, without specifying the doer.',
        'singularFormat': 'Subject + will + not + be + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + will + not + be + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter will not be written.', 'hindi': 'एक पत्र नहीं लिखा जायेगा।'},
        ],
        'pluralExamples': [
            {'english': 'Letters will not be written.', 'hindi': ''},
            {'english': 'I shall not be beaten.', 'hindi': 'मैं पीटा नहीं जाऊंगा।'},
            {'english': 'We shall not be beaten.', 'hindi': 'हमें पीटा नहीं जायेगा।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Indefinite Tense in negative passive voice to convey that actions will not be completed at a specific time in the future without focusing on the doer.`,
                example: `The decisions will not be made by the committee. (Stating the non-making without specifying who won't make them)`,
            },
            {
                usage: `Often used to express the absence of planned or expected future events.`,
                example: `The information will not be shared by anyone. (Emphasizing the non-sharing without mentioning who won't share)`,
            },
        ],
        'commonMistakes': [   
            {
                beware: `Ensure the correct use of "will not be" before the past participle of the verb.`,
                incorrect: `The tasks will completed by the employees.`,
                correct: `The tasks will not be completed by the employees.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The lessons will not be taught. (Incomplete negative passive voice)`,
                correct: `The lessons will not be taught by the teacher. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Interrogative)`,
        'meaning': 'The Future Indefinite Tense (interrogative) in passive voice is used to form questions about whether actions will be completed at a specific time in the future, without specifying the doer.',
        'singularFormat': 'Will + Subject + be + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Will + Subject + be + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Will a letter be written.', 'hindi': 'क्या एक पत्र लिखा जायेगा?'},
        ],
        'pluralExamples': [
            {'english': 'Will letters be written.', 'hindi': 'क्या पत्र लिखे जाएँगे?'},
            {'english': 'Shall I be beaten.', 'hindi': 'क्या मैं पीटा जाऊंगा?'},
            {'english': 'Shall we be beaten.', 'hindi': 'क्या हमें पीटा जाएगा?'},
        ],
        'whenToUse': [   
            {
                usage: `Use Future Indefinite Tense in interrogative passive voice when asking questions about whether actions will be completed at a specific time in the future, without focusing on the doer.`,
                example: `Will the decisions be made by the committee tomorrow? (Asking about the future decisions without specifying who will make them)`,
            },
            {
                usage: `Often used to inquire about planned or anticipated future events.`,
                example: `Will the information be shared by anyone next week? (Inquiring about the future sharing without mentioning who will share)`,
            },
        ],
        'commonMistakes': [   
            {
                beware: `Ensure the correct placement of "Will" before the subject and "be" before the past participle of the verb.`,
                incorrect: `The email be sent by the secretary?`,
                correct: `Will the email be sent by the secretary?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Will the lessons be taught? (Incomplete interrogative passive voice)`,
                correct: `Will the lessons be taught by the teacher? (Complete interrogative passive voice)`,
            },
        ]
    },

    // PERFECT TENSES 
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Positive)`,
        'meaning': 'The Future Perfect Tense (positive) in passive voice is used to describe actions that will have been completed by a specific time in the future, without specifying the doer.',
        'singularFormat': 'Subject + will + have + been + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + will + have + been + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter will have been written.', 'hindi': 'एक पत्र लिखा जा चुका होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Letters will have been written.', 'hindi': 'पत्र लिखे जा चुके होंगे।'},
            {'english': 'I will have been beaten.', 'hindi': 'मैं पीटा जा चुका होऊंगा।'},
            {'english': 'We will have been beaten.', 'hindi': 'हमें पीटा जा चुका होगा।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Tense in positive passive voice to emphasize actions that will have been completed by a specific time in the future without focusing on the doer.`,
                example: `The project will have been discussed by the team before the deadline. (Highlighting the completion before a future deadline without specifying who will discuss it)`,
            },
            {
                usage: `Often used when expressing the completion of an action before a future point in time.`,
                example: `The decisions will have been made by the committee before the meeting. (Emphasizing the completion before a future meeting without mentioning who will make them)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will have been" before the past participle of the verb.`,
                incorrect: `The tasks will been completed by the employees.`,
                correct: `The tasks will have been completed by the employees.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The lessons will have been taught. (Incomplete positive passive voice)`,
                correct: `The lessons will have been taught by the teacher. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Negative)`,
        'meaning': 'The Future Perfect Tense (negative) in passive voice is used to describe actions that will not have been completed by a specific time in the future, without specifying the doer.',
        'singularFormat': 'Subject + will + not + have + been + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + will + not + have + been + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter will not have been written.', 'hindi': 'एक पत्र नहीं लिखा जायेगा।'},
        ],
        'pluralExamples': [
            {'english': 'Letters will not have been written.', 'hindi': 'पत्र नहीं लिखे जाएँगे।'},
            {'english': 'I shall not have been beaten.', 'hindi': 'मैं पीटा नहीं जाऊंगा।'},
            {'english': 'We shall not have been beaten.', 'hindi': 'हमें पीटा नहीं जायेगा।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Tense in negative passive voice to convey that actions will not have been completed by a specific time in the future without focusing on the doer.`,
                example: `The decisions will not have been made by the committee before the deadline. (Stating the non-making without specifying who won't make them)`,
            },
            {
                usage: `Often used to express the absence of anticipated completion before a future point in time.`,
                example: `The information will not have been shared by anyone by next month. (Emphasizing the non-sharing without mentioning who won't share)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will not have been" before the past participle of the verb.`,
                incorrect: `The tasks will not been completed by the employees.`,
                correct: `The tasks will not have been completed by the employees.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The lessons will not have been taught. (Incomplete negative passive voice)`,
                correct: `The lessons will not have been taught by the teacher. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Interrogative)`,
        'meaning': 'The Future Perfect Tense (interrogative) in passive voice is used to form questions about whether actions will have been completed by a specific time in the future, without specifying the doer.',
        'singularFormat': 'Will + Subject + have + been + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Will + Subject + have + been + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Will a letter will have been written.', 'hindi': 'क्या एक पत्र लिखा जायेगा?'},
        ],
        'pluralExamples': [
            {'english': 'Will letters will have been written.', 'hindi': 'क्या पत्र लिखे जाएँगे?'},
            {'english': 'Will I have been beaten.', 'hindi': 'क्या मैं पीटा जा चुका होऊंगा?'},
            {'english': 'Will we have been beaten.', 'hindi': 'क्या हमें पीटा जा चुका होगा?'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Tense in interrogative passive voice when asking questions about whether actions will have been completed by a specific time in the future, without focusing on the doer.`,
                example: `Will the decisions have been made by the committee before the meeting? (Asking about the anticipated completion before a future meeting without specifying who will make them)`,
            },
            {
                usage: `Often used to inquire about the anticipated completion of actions.`,
                example: `Will the information have been shared by anyone by next year? (Inquiring about the anticipated sharing without mentioning who will share)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Will" before the subject, "have been" before the past participle of the verb.`,
                incorrect: `Will the email been sent by the secretary?`,
                correct: `Will the email have been sent by the secretary?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Will the lessons have been taught? (Incomplete interrogative passive voice)`,
                correct: `Will the lessons have been taught by the teacher? (Complete interrogative passive voice)`,
            },
        ]
    },
                
]
            
            
            