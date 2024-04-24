
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
        'meaning': 'The Future Indefinite Tense (positive) is used to describe actions that will happen in the future.',
        'singularFormat': 'Subject + will + 1st form of verb + Object',
        'pluralFormat': 'Subject + will + 1st form of verb + Object',
        'singularExamples': [
            {'english': 'Boy will write a letter.', 'hindi': 'लड़का एक पत्र लिखेगा।'},
            {'english': 'He will write a letter.', 'hindi': 'वह एक पत्र लिखेगा।'},
            {'english': 'She will write a letter.', 'hindi': 'वह एक पत्र लिखेगी।'},
            {'english': 'Ram will write a letter.', 'hindi': 'राम एक पत्र लिखेगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will write a letter.', 'hindi': 'लड़के एक पत्र लिखेंगे।'},
            {'english': 'They will write a letter.', 'hindi': 'वे एक पत्र लिखेंगे।'},
            {'english': 'You will write a letter.', 'hindi': 'तुम एक पत्र लिखोगे।'},
            {'english': 'I will write a letter.', 'hindi': 'मैं एक पत्र लिखूंगा।'},
            {'english': 'We will write a letter.', 'hindi': 'हम एक पत्र लिखेंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Indefinite Tense (positive) to express actions that are planned or will occur in the future.`,
                example: `I will call you later. (Stating a future action)`,
            },
            {
                usage: `Often used with time expressions like tomorrow, next week, in January, in the summer, etc.`,
                example: `She will learn to play the piano. (Expressing a future skill acquisition)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will" before the base form of the verb.`,
                incorrect: `They visit us next week.`,
                correct: `They will visit us next week.`,
            },
            {
                beware: `Use time expressions accurately to convey the future occurrence of the action.`,
                incorrect: `We will go on vacation yesterday.`,
                correct: `We will go on vacation in the summer.`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Negative)`,
        'meaning': 'The Future Indefinite Tense (negative) is used to express actions that will not happen in the future.',
        'singularFormat': `Subject + will not (won't) + 1st form of verb + Object`,
        'pluralFormat': `Subject + will not (won't) + 1st form of verb + Object`,
        'singularExamples': [
            {'english': 'Boy will not write a letter.', 'hindi': 'लड़का एक पत्र नहीं लिखेगा।'},
            {'english': 'He will not write a letter.', 'hindi': 'वह एक पत्र नहीं लिखेगा।'},
            {'english': 'She will not write a letter.', 'hindi': 'वह एक पत्र नहीं लिखेगी।'},
            {'english': 'Ram will not write a letter.', 'hindi': 'राम एक पत्र नहीं लिखेगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will not write a letter.', 'hindi': 'लड़के एक पत्र नहीं लिखेंगे।'},
            {'english': 'They will not write a letter.', 'hindi': 'वे एक पत्र नहीं लिखेंगे।'},
            {'english': 'You will not write a letter.', 'hindi': 'तुम एक पत्र नहीं लिखोगे।'},
            {'english': 'I will not write a letter.', 'hindi': 'मैं एक पत्र नहीं लिखूंगा।'},
            {'english': 'We will not write a letter.', 'hindi': 'हम एक पत्र नहीं लिखेंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Indefinite Tense (negative) to indicate actions that are not planned or will not occur in the future.`,
                example: `I won't attend the meeting on Friday. (Stating a non-occurrence)`,
            },
            {
                usage: `Often used with time expressions like tomorrow, next week, in January, etc.`,
                example: `They will not (won't) buy a new car this year. (Expressing a decision not to do something)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will not" or "won't" before the base form of the verb.`,
                incorrect: `She will not finish her project tomorrow.`,
                correct: `She will not (won't) finish her project tomorrow.`,
            },
            {
                beware: `Use time expressions accurately to convey the absence of the future action.`,
                incorrect: `We will not go on vacation in the winter yesterday.`,
                correct: `We will not (won't) go on vacation in the winter.`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Interrogative)`,
        'meaning': 'The Future Indefinite Tense (interrogative) is used to form questions about actions that will happen in the future.',
        'singularFormat': 'Will + Subject + 1st form of verb + Object?',
        'pluralFormat': 'Will + Subject + 1st form of verb + Object?',
        'singularExamples': [
            {'english': 'Will boy write a letter?', 'hindi': 'क्या लड़का एक पत्र लिखेगा?'},
            {'english': 'Will he write a letter?', 'hindi': 'क्या वह एक पत्र लिखेगा?'},
            {'english': 'Will she write a letter?', 'hindi': 'क्या वह एक पत्र लिखेगी?'},
            {'english': 'Will Ram write a letter?', 'hindi': 'क्या राम एक पत्र लिखेगा?'},
        ],
        'pluralExamples': [
            {'english': 'Wiil boys write a letter?', 'hindi': 'क्या लड़के एक पत्र लिखेंगे?'},
            {'english': 'Wiil they write a letter?', 'hindi': 'क्या वे एक पत्र लिखेंगे?'},
            {'english': 'Wiil you write a letter?', 'hindi': 'क्या तुम एक पत्र लिखोगे?'},
            {'english': 'Shall I write a letter? (note: shall is used).', 'hindi': 'क्या मैं एक पत्र लिखूंगा?'},
            {'english': 'Shall we write a letter? (note: shall is used).', 'hindi': 'क्या हम एक पत्र लिखेंगे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Indefinite Tense (interrogative) when asking questions about actions that are planned or expected to occur in the future.`,
                example: `Will you attend the conference next month? (Asking about a future plan)`,
            },
            {
                usage: `Begin the question with "Will."`,
                example: `Will she learn a new language? (Inquiring about a future skill acquisition)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Will" before the base form of the verb.`,
                incorrect: `She finish her project tomorrow?`,
                correct: `Will she finish her project tomorrow?`,
            },
            {
                beware: `Use time expressions accurately to inquire about the future occurrence of the action.`,
                incorrect: `Will we go on vacation yesterday?`,
                correct: `Will we go on vacation in the summer?`,
            },
        ]
    },  

    // CONTINUOUS TENSES 
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Future Continuous Tense (positive) is used to describe actions that will be ongoing or in progress at a specific time in the future.',
        'singularFormat': 'Subject + will be + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Subject + will be + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Boy will be writing a letter.', 'hindi': 'लड़का एक पत्र लिख रहा होगा।'},
            {'english': 'He will be writing a letter.', 'hindi': 'वह एक पत्र लिख रहा होगा।'},
            {'english': 'She will be writing a letter.', 'hindi': 'वह एक पत्र लिख रही होगी।'},
            {'english': 'Ram will be writing a letter.', 'hindi': 'राम एक पत्र लिख रहा होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will be writing a letter.', 'hindi': 'लड़के एक पत्र लिख रहे होंगे।'},
            {'english': 'They will be writing a letter.', 'hindi': 'वे एक पत्र लिख रहे होंगे।'},
            {'english': 'You will be writing a letter.', 'hindi': 'तुम एक पत्र लिख रहे होगे।'},
            {'english': 'I will be writing a letter.', 'hindi': 'मैं एक पत्र लिख रहा हूँगा।'},
            {'english': 'We will be writing a letter.', 'hindi': 'हम एक पत्र लिख रहे होंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Continuous Tense (positive) to emphasize actions that will be ongoing or happening at a specific time in the future.`,
                example: `I will be studying when you call. (Indicating ongoing action at a specific future time)`,
            },
            {
                usage: `Often used with time expressions like at this time, next week, in the evening, on Sunday, etc.`,
                example: `They will be working on the project all day. (Emphasizing continuous effort)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will be" before the present participle (verb + ing).`,
                incorrect: `She will studying at this time tomorrow.`,
                correct: `She will be studying at this time tomorrow.`,
            },
            {
                beware: `Use time expressions accurately to specify the future time of the ongoing action.`,
                incorrect: `We will be celebrating the festival yesterday.`,
                correct: `We will be celebrating the festival on Sunday.`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Future Continuous Tense (negative) is used to express that an action will not be happening or will not be ongoing at a specific time in the future.',
        'singularFormat': `Subject + will not (won't) be + (1st form of verb + ing) + Object`,
        'pluralFormat': `Subject + will not (won't) be + (1st form of verb + ing) + Object`,
        'singularExamples': [
            {'english': 'Boy will not be writing a letter.', 'hindi': 'लड़का एक पत्र नहीं लिख रहा होगा।'},
            {'english': 'He will not be writing a letter.', 'hindi': 'वह एक पत्र नहीं लिख रहा होगा।'},
            {'english': 'She will not be writing a letter.', 'hindi': 'वह एक पत्र नहीं लिख रही होगी'},
            {'english': 'Ram will not be writing a letter.', 'hindi': 'राम एक पत्र नहीं लिख रहा होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will not be writing a letter.', 'hindi': 'लड़के एक पत्र नहीं लिख रहें होंगे।'},
            {'english': 'They will not be writing a letter.', 'hindi': 'वे एक पत्र नहीं लिख रहें होंगे।'},
            {'english': 'You will not be writing a letter.', 'hindi': 'तुम एक पत्र नहीं लिख रहे होंगे।'},
            {'english': 'I will not be writing a letter.', 'hindi': 'मैं एक पत्र नहीं लिख रहा हूँगा।'},
            {'english': 'We will not be writing a letter.', 'hindi': 'हम एक पत्र नहीं लिख रहे होंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Continuous Tense (negative) to indicate that an action will not be ongoing or happening at a specific time in the future.`,
                example: `I won't be studying when you call. (Expressing the absence of an ongoing action)`,
            },
            {
                usage: `Often used with time expressions like at this time, next week, in the evening, on Sunday, etc.`,
                example: `They won't be working on the project in the afternoon. (Denying continuous effort)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will not be" or "won't be" before the present participle (verb + ing).`,
                incorrect: `She will be studying at this time tomorrow.`,
                correct: `She will not (won't) be studying at this time tomorrow.`,
            },
            {
                beware: `Use time expressions accurately to specify the future time of the non-occurring action.`,
                incorrect: `We won't be celebrating the festival yesterday.`,
                correct: `We won't be celebrating the festival on Sunday.`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Future Continuous Tense (interrogative) is used to form questions about actions that will be ongoing or in progress at a specific time in the future.',
        'singularFormat': 'Will + Subject + be + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Will + Subject + be + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Will boy be writing a letter?', 'hindi': 'क्या लड़का एक पत्र लिख रहा होगा?'},
            {'english': 'Will he be writing a letter?', 'hindi': 'क्या वह एक पत्र लिख रहा होगा?'},
            {'english': 'Will she be writing a letter?', 'hindi': 'क्या वह एक पत्र लिख रही होगी?'},
            {'english': 'Will Ram be writing a letter?', 'hindi': 'क्या राम एक पत्र लिख रहा होगा?'},
        ],
        'pluralExamples': [
            {'english': 'Will boys be writing a letter?', 'hindi': 'क्या लड़के एक पत्र लिख रहे होंगे?'},
            {'english': 'Will they be writing a letter?', 'hindi': 'क्या वे एक पत्र लिख रहे होंगे?'},
            {'english': 'Will You be writing a letter?', 'hindi': 'क्या आप एक पत्र लिख रहे होंगे?'},
            {'english': 'Will I be writing a letter?', 'hindi': 'क्या मैं एक पत्र लिख रहा होगा?'},
            {'english': 'Will We be writing a letter?', 'hindi': 'क्या हम एक पत्र लिख रहे होंगे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Continuous Tense (interrogative) when asking questions about actions that will be ongoing or happening at a specific time in the future.`,
                example: `Will you be working on the assignment tomorrow evening? (Asking about ongoing work)`,
            },
            {
                usage: `Begin the question with "Will."`,
                example: `Will she be attending the conference next month? (Inquiring about a specific future activity)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Will" before the subject and "be" before the present participle (verb + ing).`,
                incorrect: `She will studying at this time tomorrow?`,
                correct: `Will she be studying at this time tomorrow?`,
            },
            {
                beware: `Use time expressions accurately to inquire about the future occurrence of the ongoing action.`,
                incorrect: `Will we be celebrating the festival yesterday?`,
                correct: `Will we be celebrating the festival on Sunday?`,
            },
        ]
    },      

    // PERFECT TENSES 
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Positive)`,
        'meaning': 'The Future Perfect Tense (positive) is used to describe actions that will be completed by a specific point in the future.',
        'singularFormat': 'Subject + will have + 3rd form of verb + Object',
        'pluralFormat': 'Subject + will have + 3rd form of verb + Objec',
        'singularExamples': [
            {'english': 'Boy will have written a letter.', 'hindi': 'लड़का एक पत्र लिख चुका होगा।'},
            {'english': 'He will have written a letter.', 'hindi': 'वह एक पत्र लिख चुका होगा।'},
            {'english': 'She will have written a letter.', 'hindi': 'वह एक पत्र लिख चुकी होगी।'},
            {'english': 'Ram will have written a letter.', 'hindi': 'राम एक पत्र लिख चुका होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will have written a letter.', 'hindi': 'लड़के एक पत्र लिख चुके होंगे।'},
            {'english': 'They will have written a letter.', 'hindi': 'वे एक पत्र लिख चुके होंगे।'},
            {'english': 'You will have written a letter.', 'hindi': 'तुम एक पत्र लिख चुके होगे।'},
            {'english': 'I will have written a letter.', 'hindi': 'मैं एक पत्र लिख चुका हूँगा।'},
            {'english': 'We will have written a letter.', 'hindi': 'हम एक पत्र लिख चुके होंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Tense (positive) to express actions that will be completed before a specific point in the future.`,
                example: `I will have finished reading the book by tomorrow. (Indicating completion before a specified time)`,
            },
            {
                usage: `Often used with time expressions like by the end of, before, by the time, etc.`,
                example: `She will have graduated by the time you return. (Expressing completion before a future event)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will have" before the past participle of the verb.`,
                incorrect: `They will completed the construction by next month.`,
                correct: `They will have completed the construction by next month.`,
            },
            {
                beware: `Use time expressions accurately to specify the future completion of the action.`,
                incorrect: `We will have moved to a new house yesterday.`,
                correct: `We will have moved to a new house by the time school starts.`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Negative)`,
        'meaning': 'The Future Perfect Tense (negative) is used to express that actions will not be completed by a specific point in the future.',
        'singularFormat': `Subject + will not (won't) have + 3rd form of verb + Object`,
        'pluralFormat': `Subject + will not (won't) have + 3rd form of verb + Object`,
        'singularExamples': [
            {'english': 'Boy will not have written a letter.', 'hindi': 'लड़का एक पत्र नहीं लिख चुका होगा।'},
            {'english': 'He will not have written a letter.', 'hindi': 'वह एक पत्र नहीं लिख चुका होगा।'},
            {'english': 'She will not have written a letter.', 'hindi': 'वह एक पत्र नहीं लिख चुकी होगी।'},
            {'english': 'Ram will not have written a letter.', 'hindi': 'राम एक पत्र नहीं लिख चुका होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will not have written a letter.', 'hindi': 'लड़के एक पत्र नहीं लिख चुके होंगे।'},
            {'english': 'They will not have written a letter.', 'hindi': 'वे एक पत्र नहीं लिख चुके होंगे।'},
            {'english': 'You will not have written a letter.', 'hindi': 'तुम एक पत्र नहीं लिख चुके होगे।'},
            {'english': 'I will not have written a letter.', 'hindi': 'मैं एक पत्र नहीं लिख चुका हूँगा।'},
            {'english': 'We will not have written a letter.', 'hindi': 'हम एक पत्र नहीं लिख चुके होंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Tense (negative) to indicate that actions will not be completed before a specific point in the future.`,
                example: `I won't have finished the assignment by tomorrow. (Expressing non-completion before a specified time)`,
            },
            {
                usage: `Often used with time expressions like by the end of, before, by the time, etc.`,
                example: `They won't have implemented the new policy by the end of the year. (Denying future completion)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will not have" or "won't have" before the past participle of the verb.`,
                incorrect: `They will not completed the construction by next month.`,
                correct: `They won't have completed the construction by next month.`,
            },
            {
                beware: `Use time expressions accurately to specify the future non-completion of the action.`,
                incorrect: `We won't have moved to a new house yesterday.`,
                correct: `We won't have moved to a new house by the time school starts.`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Interrogative)`,
        'meaning': 'The Future Perfect Tense (interrogative) is used to form questions about actions that will be completed by a specific point in the future.',
        'singularFormat': 'Will + Subject + have + 3rd form of verb + Object?',
        'pluralFormat': 'Will + Subject + have + 3rd form of verb + Object?',
        'singularExamples': [
            {'english': 'Will boy have written a letter?', 'hindi': 'क्या लड़का एक पत्र लिख चुका होगा?'},
            {'english': 'Will he have written a letter?', 'hindi': 'क्या वह एक पत्र लिख चुका होगा?'},
            {'english': 'Will she have written a letter?', 'hindi': 'क्या वह एक पत्र लिख चुकी होगी?'},
            {'english': 'Will Ram have written a letter?', 'hindi': 'क्या राम एक पत्र लिख चुका होगा?'},
        ],
        'pluralExamples': [
            {'english': 'Will boys have written a letter?', 'hindi': 'क्या लड़के एक पत्र लिख चुके होंगे?'},
            {'english': 'Will they have written a letter?', 'hindi': 'क्या वे एक पत्र लिख चुके होंगे?'},
            {'english': 'Will you have written a letter?', 'hindi': 'क्या तुम एक पत्र लिख चुके होंगे?'},
            {'english': 'Will I have written a letter?', 'hindi': 'क्या मैं एक पत्र लिख चुका हूँगा?'},
            {'english': 'Will we have written a letter?', 'hindi': 'क्या हम एक पत्र लिख चुके होंगे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Tense (interrogative) when asking questions about actions that will be completed before a specific point in the future.`,
                example: `Will you have finished the project by the deadline? (Inquiring about future completion)`,
            },
            {
                usage: `Begin the question with "Will."`,
                example: `Will she have learned to play the piano by the end of the year? (Asking about a future skill acquisition)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Will" before the subject and "have" before the past participle of the verb.`,
                incorrect: `She will finished her project by the end of the week?`,
                correct: `Will she have finished her project by the end of the week?`,
            },
            {
                beware: `Use time expressions accurately to inquire about the future completion of the action.`,
                incorrect: `Will we have moved to a new house yesterday?`,
                correct: `Will we have moved to a new house by the time school starts?`,
            },
        ]
    },

    // PERFECT CONTINUOUS TENSES 
    {
        'code': 'PCON',
        'heading': `${PERFECT_CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Future Perfect Continuous Tense (positive) is used to describe actions that will have been ongoing for a specific duration before a certain point in the future.',
        'singularFormat': 'Subject + will have been + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Subject + will have been + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Boy will have been writing a letter since morning.', 'hindi': 'लड़का सुबह से एक पत्र लिख रहा होगा।'},
            {'english': 'He will have been writing a letter since yesterday.', 'hindi': 'वह कल से एक पत्र लिख रहा होगा।'},
            {'english': `She will have been writing a letter since 2 o'clock.`, 'hindi': 'वह 2 बजे से एक पत्र लिख रही होगी।'},
            {'english': 'Ram will have been writing a letter for last 2 week.', 'hindi': 'राम पिछले 2 हफ्ते से एक पत्र लिख रहा होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will have been writing a letter since morning.', 'hindi': 'लड़के सुबह से एक पत्र लिख रहे होंगे।'},
            {'english': 'They will have been writing a letter since yesterday.', 'hindi': 'वे कल से एक पत्र लिख रहे होंगे।'},
            {'english': 'You will have been writing a letter for last 2 week.', 'hindi': 'तुम पिछले 2 हफ्ते से एक पत्र लिख रहे होंगे।'},
            {'english': `I will have been writing a letter since 2 o'clock.`, 'hindi': 'मैं 2 बजे से एक पत्र लिख रहा हूँगा।'},
            {'english': 'We will have been writing a letter for last 2 week.', 'hindi': 'हम पिछले 2 हफ्ते से एक पत्र लिख रहे होंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Continuous Tense (positive) to emphasize the continuous duration of an action that will have been ongoing before a specific point in the future.`,
                example: `I will have been working here for five years by the end of the month. (Highlighting continuous employment)`,
            },
            {
                usage: `Often used with time expressions like for, since, by the time, etc.`,
                example: `She will have been running the marathon for hours when she crosses the finish line. (Emphasizing ongoing activity)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will have been" before the present participle (verb + ing).`,
                incorrect: `They will been working on the project for a month by the deadline.`,
                correct: `They will have been working on the project for a month by the deadline.`,
            },
            {
                beware: `Use time expressions accurately to specify the future duration of the ongoing action.`,
                incorrect: `It will have been raining since morning when we arrive.`,
                correct: `It will have been raining since morning when we leave.`,
            },
        ]
    },
    {
        'code': 'PCON',
        'heading': `${PERFECT_CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Future Perfect Continuous Tense (negative) is used to express that actions will not have been ongoing for a specific duration before a certain point in the future.',
        'singularFormat': 'Subject + will not have been + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + will not have been + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy will not have been writing a letter since morning.', 'hindi': 'लड़का सुबह से एक पत्र नहीं लिख रहा होगा।'},
            {'english': 'He will not have been writing a letter since yesterday.', 'hindi': 'वह कल से एक पत्र नहीं लिख रहा होगा।'},
            {'english': `She will not have been writing a letter since 2 o'clock.`, 'hindi': 'वह 2 बजे से एक पत्र नहीं लिख रही होगी।'},
            {'english': 'Ram will not have been writing a letter for last 2 week.', 'hindi': 'राम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहा होगा।'},
        ],
        'pluralExamples': [
            {'english': 'Boys will not have been writing a letter since morning.', 'hindi': 'लड़के सुबह से एक पत्र नहीं लिख रहे होंगे।'},
            {'english': 'They will not have been writing a letter since yesterday.', 'hindi': 'वे कल से एक पत्र नहीं लिख रहे होंगे।'},
            {'english': 'You will not have been writing a letter for last 2 week.', 'hindi': 'तुम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहे होंगे।'},
            {'english': `I will not have been writing a letter since 2 o'clock.`, 'hindi': 'मैं 2 बजे से एक पत्र नहीं लिख रहा हूँगा।'},
            {'english': 'We will not have been writing a letter for last 2 week.', 'hindi': 'हम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहे होंगे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Continuous Tense (negative) to indicate that actions will not have been ongoing for a specific duration before a certain point in the future.`,
                example: `I will not have been living in this city for ten years by next month. (Expressing the absence of continuous residence)`,
            },
            {
                usage: `Often used with time expressions like for, since, by the time, etc.`,
                example: `They will not have been practicing for the concert for a week by the performance day. (Denying continuous preparation)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "will not have been" before the present participle (verb + ing).`,
                incorrect: `They will not been working on the project for a month by the deadline.`,
                correct: `They will not have been working on the project for a month by the deadline.`
            },
            {
                beware: `Use time expressions accurately to specify the future duration of the non-occurring action.`,
                incorrect: `It will not have been raining since morning when we arrive.`,
                correct: `It will not have been raining since morning when we leave.`
            },
        ]
    },
    {
        'code': 'PCON',
        'heading': `${PERFECT_CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Future Perfect Continuous Tense (interrogative) is used to form questions about actions that will have been ongoing for a specific duration before a certain point in the future.',
        'singularFormat': 'Will + Subject + have been + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Will + Subject + have been + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Will boy have been writing a letter since morning?', 'hindi': 'क्या लड़का सुबह से एक पत्र लिख रहा होगा?'},
            {'english': 'Will he have been writing a letter since yesterday?', 'hindi': 'क्या वह कल से एक पत्र लिख रहा होगा?'},
            {'english': `Will she have been writing a letter since 2 o'clock?`, 'hindi': 'क्या वह 2 बजे से एक पत्र लिख रही होगी?'},
            {'english': 'Will Ram have been writing a letter for last 2 week?', 'hindi': 'क्या राम पिछले 2 हफ्तों से एक पत्र लिख रहा होगा?'},
        ],
        'pluralExamples': [
            {'english': 'Will boys have been writing a letter since morning?', 'hindi': 'क्या लड़के सुबह से एक पत्र लिख रहे होंगे?'},
            {'english': 'Will they have been writing a letter since yesterday?', 'hindi': 'क्या वे कल से एक पत्र लिख रहे होंगे?'},
            {'english': 'Will you have been writing a letter for last 2 week?', 'hindi': 'क्या आप पिछले 2 हफ्तों से एक पत्र लिख रहे होंगे?'},
            {'english': `Shall I have been writing a letter since 2 o'clock?`, 'hindi': 'क्या मैं 2 बजे से एक पत्र लिख रहा हूँगा?'},
            {'english': 'Shall we have been writing a letter for last 2 week?', 'hindi': 'क्या हम पिछले 2 हफ्तों से एक पत्र लिख रहे होंगे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Future Perfect Continuous Tense (interrogative) when asking questions about actions that will have been ongoing for a specific duration before a certain point in the future.`,
                example: `Will you have been working on the report for three hours by the time the meeting starts? (Inquiring about continuous effort)`,
            },
            {
                usage: `Begin the question with "Will."`,
                example: `Will she have been traveling for a week by the time she returns? (Asking about the duration of travel)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Will" before the subject, "have been" before the present participle (verb + ing).`,
                incorrect: `Will they been working on the project for a month by the deadline?`,
                correct: `Will they have been working on the project for a month by the deadline?`,
            },
            {
                beware: `Use time expressions accurately to inquire about the future duration of the ongoing action.`,
                incorrect: `Will it have been raining since morning when we arrive?`,
                correct: `Will it have been raining since morning when we leave?`,
            },
        ]
    },
                
]
            
            
            