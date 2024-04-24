
const INDEFINITE = 'Indefinite';
const CONTINUOUS = 'Continuous';
const PERFECT = 'Perfect';
const PERFECT_CONTINUOUS = 'Perfect Continuous';
const SINGULAR = 'singular';
const PLURAL = 'plural';

export const presentAPI = [
    // INDEFINITE TENSES 
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Positive)`,
        'meaning': 'The Present Indefinite Tense (positive) in passive voice is used to describe actions that are currently being done to the subject without specifying the doer.',
        'singularFormat': 'Subject + is + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + are + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter is written', 'hindi': 'एक पत्र लिखा जाता है।'},
        ],
        'pluralExamples': [
            {'english': 'Letters are written', 'hindi': 'पत्र लिखे जाते हैं।'},
            {'english': 'I am beaten.', 'hindi': 'मैं पीटा गया हूँ।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Indefinite Tense in positive passive voice to emphasize actions that are currently happening to the subject without focusing on the doer.`,
                example: `The news is broadcasted daily. (Emphasizing the regular broadcast without specifying who broadcasts it)`,
            },
            {
                usage: `Often used to describe routine actions or general truths.`,
                example: `The rules are followed by all employees. (Highlighting the adherence without mentioning who follows them)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "is," "am," or "are" based on the subject.`,
                incorrect: `The email am sent by the manager.`,
                correct: `The email is sent by the manager.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The tasks are completed. (Incomplete positive passive voice)`,
                correct: `The tasks are completed by the team. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Negative)`,
        'meaning': 'The Present Indefinite Tense (negative) in passive voice is used to describe actions that are not currently being done to the subject without specifying the doer.',
        'singularFormat': 'Subject + is + not + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + am/are + not + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'Letter is not written', 'hindi': 'पत्र नहीं लिखा जाता हैं।'},
        ],
        'pluralExamples': [
            {'english': 'I am not beaten.', 'hindi': 'मैं पीटा नहीं हूँ।'},
            {'english': 'Letters are not written', 'hindi': 'पत्र नहीं लिखे जाते हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Indefinite Tense in negative passive voice to convey that actions are not currently happening to the subject without focusing on the doer.`,
                example: `The rules are not followed by all employees. (Stating the non-adherence without specifying who doesn't follow them)`,
            },
            {
                usage: `Often used to express the absence of routine actions or general truths.`,
                example: `The news is not broadcasted daily. (Emphasizing the non-regular broadcast without mentioning who doesn't broadcast it)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "is not," "am not," or "are not" based on the subject.`,
                incorrect: `The email not sent by the manager.`,
                correct: `The email is not sent by the manager.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The tasks are not completed. (Incomplete negative passive voice)`,
                correct: `The tasks are not completed by the team. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Interrogative)`,
        'meaning': 'The Present Indefinite Tense (interrogative) in passive voice is used to form questions about actions currently being done to the subject without specifying the doer.',
        'singularFormat': 'Is + Subject + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Am/Are + Subject + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Is a letter written.', 'hindi': 'क्या एक पत्र लिखा जाता है?'},
        ],
        'pluralExamples': [
            {'english': 'Am I beaten.', 'hindi': 'क्या मैं पीटा गया हूँ?'},
            {'english': 'Are letters written.', 'hindi': 'क्या पत्र लिखे जाते हैं?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Indefinite Tense in interrogative passive voice when asking questions about actions currently being done to the subject without focusing on the doer.`,
                example: `Are the rules followed by all employees? (Asking about the adherence without specifying who follows them)`,
            },
            {
                usage: `Often used to inquire about routine actions or general truths.`,
                example: `Is the news broadcasted daily? (Inquiring about the regular broadcast without mentioning who broadcasts it)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Is," "Am," or "Are" based on the subject.`,
                incorrect: `The email is sent by the manager?`,
                correct: `Is the email sent by the manager?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Are the tasks completed? (Incomplete interrogative passive voice)`,
                correct: `Are the tasks completed by the team? (Complete interrogative passive voice)`,
            },
        ]
    },

    // CONTINUOUS TENSES 
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Present Continuous Tense (positive) in passive voice is used to describe actions that are currently taking place to the subject without specifying the doer.',
        'singularFormat': 'Subject + is + being + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + am/are + being + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter is being written.', 'hindi': 'एक पत्र लिखा जा रहा है।'},
        ],
        'pluralExamples': [
            {'english': 'I am being beaten.', 'hindi': 'मुझे पीटा जा रहा है।'},
            {'english': 'Letters are being written.', 'hindi': 'पत्र लिखे जा रहे हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Continuous Tense in positive passive voice to emphasize actions that are currently taking place to the subject without focusing on the doer.`,
                example: `The project is being discussed by the team. (Emphasizing the ongoing discussion without specifying who is discussing)`,
            },
            {
                usage: `Often used to describe ongoing activities or processes.`,
                example: `The event is being organized by the committee. (Highlighting the ongoing organization without mentioning who is organizing)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "is being," "am being," or "are being" based on the subject.`,
                incorrect: `The email being sent by the secretary.`,
                correct: `The email is being sent by the secretary.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The tasks are being completed. (Incomplete positive passive voice)`,
                correct: `The tasks are being completed by the employees. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Present Continuous Tense (negative) in passive voice is used to describe actions that are currently not taking place to the subject without specifying the doer.',
        'singularFormat': 'Subject + is + not being + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + am/are + not being + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter is not being written.', 'hindi': 'एक पत्र नहीं लिखा जा रहा है।'},
        ],
        'pluralExamples': [
            {'english': 'I am not being beaten.', 'hindi': 'मुझे नहीं पीटा जा रहा है।'},
            {'english': 'Letters are not being written.', 'hindi': 'पत्र नहीं लिखे जा रहे हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Continuous Tense in negative passive voice to convey that actions are currently not taking place to the subject without focusing on the doer.`,
                example: `The experiment is not being conducted by the researchers. (Stating the non-conduction without specifying who is not conducting)`,
            },
            {
                usage: `Often used to express the absence of ongoing activities or processes.`,
                example: `The machinery is not being used by anyone. (Emphasizing the non-use without mentioning who is not using)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "is not being," "am not being," or "are not being" based on the subject.`,
                incorrect: `The email not being sent by the secretary.`,
                correct: `The email is not being sent by the secretary.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The tasks are not being completed. (Incomplete negative passive voice)`,
                correct: `The tasks are not being completed by the employees. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Present Continuous Tense (interrogative) in passive voice is used to form questions about actions that are currently taking place to the subject without specifying the doer.',
        'singularFormat': 'Is/Am/Are + Subject + being + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Is/Am/Are + Subject + being + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Is a letter being written.', 'hindi': 'क्या पत्र लिखा जा रहा है?'},
        ],
        'pluralExamples': [
            {'english': 'Am I begin beaten.', 'hindi': 'क्या मुझे पीटा जा रहा है?'},
            {'english': 'Are letters being written?', 'hindi': 'क्या पत्र लिखे जा रहे हैं?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Continuous Tense in interrogative passive voice when asking questions about actions that are currently taking place to the subject without focusing on the doer.`,
                example: `Is the project being discussed by the team? (Asking about the ongoing discussion without specifying who is discussing)`,
            },
            {
                usage: `Often used to inquire about ongoing activities or processes.`,
                example: `Are the preparations being made by the organizers? (Inquiring about the ongoing preparations without mentioning who is organizing)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Is," "Am," or "Are" based on the subject.`,
                incorrect: `The email being sent by the secretary?`,
                correct: `Is the email being sent by the secretary?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Are the tasks being completed? (Incomplete interrogative passive voice)`,
                correct: `Are the tasks being completed by the employees? (Complete interrogative passive voice)`,
            },
        ]
    },     

    // PERFECT TENSES 
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Positive)`,
        'meaning': 'The Present Perfect Tense (positive) in passive voice is used to describe actions that have been completed at an indefinite time before the present, without specifying the doer.',
        'singularFormat': 'Subject + has/have + been + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + has/have + been + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter has been written.', 'hindi': 'एक पत्र लिखा गया है।'},
        ],
        'pluralExamples': [
            {'english': 'Letters have been written.', 'hindi': 'पत्र लिखे गए हैं।'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Tense in positive passive voice to emphasize actions that have been completed before the present without focusing on the doer.`,
                example: `The project has been discussed by the team. (Highlighting the recent discussion without specifying who discussed it)`,
            },
            {
                usage: `Often used to convey recent or indefinite past actions.`,
                example: `The decisions have been made by the committee. (Emphasizing the recent decisions without mentioning who made them)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "has been" or "have been" based on the subject.`,
                incorrect: `The tasks has been completed by the employees.`,
                correct: `The tasks have been completed by the employees.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The email has been sent. (Incomplete positive passive voice)`,
                correct: `The email has been sent by the secretary. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Negative)`,
        'meaning': 'The Present Perfect Tense (negative) in passive voice is used to describe actions that have not been completed at an indefinite time before the present, without specifying the doer.',
        'singularFormat': 'Subject + has + not been + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + have + not been + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter has not been written.', 'hindi': 'एक पत्र नहीं लिखा गया है।'},
        ],
        'pluralExamples': [
            {'english': 'Letters have not been written.', 'hindi': 'पत्र नहीं लिखे गए हैं।'},
        ],
        'whenToUse': [ 
            {
                usage: `Use Present Perfect Tense in negative passive voice to convey that actions have not been completed before the present without focusing on the doer.`,
                example: `The decisions have not been made by the committee. (Stating the non-making without specifying who didn't make them)`,
            },
            {
                usage: `Often used to express the absence of recent or indefinite past actions.`,
                example: `The information has not been shared by anyone. (Emphasizing the non-sharing without mentioning who didn't share)`,
            },
        ],
        'commonMistakes': [   
            {
                beware: `Ensure the correct use of "has not been" or "have not been" based on the subject.`,
                incorrect: `The tasks has not been completed by the employees.`,
                correct: `The tasks have not been completed by the employees.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The lessons have not been taught. (Incomplete negative passive voice)`,
                correct: `The lessons have not been taught by the teacher. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Interrogative)`,
        'meaning': 'The Present Perfect Tense (interrogative) in passive voice is used to form questions about whether actions have been completed at an indefinite time before the present, without specifying the doer.',
        'singularFormat': 'Has + Subject + been + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Have + Subject + been + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Has a letter been written.', 'hindi': 'क्या एक पत्र लिखा गया है?'},
        ],
        'pluralExamples': [
            {'english': 'Have letters been written.', 'hindi': 'क्या पत्र लिखे गए हैं?'},
        ],
        'whenToUse': [
            {
                usage: `Use Present Perfect Tense in interrogative passive voice when asking questions about whether actions have been completed at an indefinite time before the present, without focusing on the doer.`,
                example: `Have the decisions been made by the committee? (Asking about the recent decisions without specifying who made them)`,
            },
            {
                usage: `Often used to inquire about recent or indefinite past actions.`,
                example: `Has the information been shared by anyone? (Inquiring about the recent sharing without mentioning who shared)`,
            },
        ],
        'commonMistakes': [   
            {
                beware: `Ensure the correct placement of "Has" or "Have" before the subject and "been" before the past participle of the verb.`,
                incorrect: `The email been sent by the secretary?`,
                correct: `Has the email been sent by the secretary?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Have the lessons been taught? (Incomplete interrogative passive voice)`,
                correct: `Have the lessons been taught by the teacher? (Complete interrogative passive voice)`,
            },
        ]
    },
                
]
            
            
            