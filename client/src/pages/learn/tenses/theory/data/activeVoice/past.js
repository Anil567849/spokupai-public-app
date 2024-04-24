
const INDEFINITE = 'Indefinite';
const CONTINUOUS = 'Continuous';
const PERFECT = 'Perfect';
const PERFECT_CONTINUOUS = 'Perfect Continuous';

export const pastAPI = [
    // INDEFINITE TENSES 
    {   
        'code': 'IND', // I can easily fetch particular (aspect of data) using this code.
        'heading': `${INDEFINITE} Tense (Positive)`,
        'meaning': 'The Past Indefinite Tense (positive) is used to describe actions that were completed in the past. It is also known as the Simple Past Tense.',
        'singularFormat': 'Subject + 2nd form of verb + Object',
        'pluralFormat': 'Subject + 2nd form of verb + Object',
        'singularExamples': [
                {'english': 'Boy wrote a letter.', 'hindi': 'लड़के ने एक पत्र लिखा।.'},
                {'english': 'He wrote a letter.', 'hindi': 'उसने एक पत्र लिखा।.'},
                {'english': 'She wrote a letter.', 'hindi': 'उसने एक पत्र लिखा।.'},
                {'english': 'Ram wrote a letter.', 'hindi': 'राम ने एक पत्र लिखा।.'},
            ],
        'pluralExamples': [
            {'english': 'Boys wrote a letter.', 'hindi': 'लड़कों ने एक पत्र लिखा।'},
            {'english': 'They wrote a letter.', 'hindi': 'उन्होंने एक पत्र लिखा।'},
            {'english': 'You wrote a letter.', 'hindi': 'तुमने एक पत्र लिखा।'},
            {'english': 'I wrote a letter.', 'hindi': 'मैंने एक पत्र लिखा।'},
            {'english': 'We wrote a letter.', 'hindi': 'हमने एक पत्र लिखा।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Indefinite Tense to talk about completed actions or events in the past without specifying the exact time.`,
                example: `I visited Paris last summer. (Specific time)`,
            },
            {
                usage: `It is often used with time expressions like yesterday, last week, in 1990, ago, etc.`,
                example: `She completed her project yesterday. (Time expression)`,
            },
            {
                usage: `Use it for a series of completed actions in the past.`,
                example: `They lived in London for five years. (Duration of time)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Avoid using present tense verbs when describing past events.`,
                incorrect: `She thinks it's a great movie.`,
                correct: `She thought it was a great movie.`,
            },
            {
                beware: `Be careful with irregular verbs; use their past forms correctly (example: see/saw/seen, go/went/gone, have/had).`,
                incorrect: `We seen that movie before.`,
                correct: `We saw that movie before.`,
            },
            {
                beware: `Use time markers appropriately to indicate when the action took place.`,
                incorrect: `He eats pizza yesterday.`,
                correct: `He ate pizza yesterday.`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Negative)`,
        'meaning': 'The Past Indefinite Tense (negative) is used to describe actions or events that did not happen in the past.',
        'singularFormat': 'Subject + did not + 1st form of verb + Object',
        'pluralFormat': 'Subject + did not + 1st form of verb + Object',
        'singularExamples': [
            {'english': 'Boy did not write a letter.', 'hindi': '(लड़के ने एक पत्र नहीं लिखा।).'},
            {'english': 'He did not write a letter.', 'hindi': '(उसने एक पत्र नहीं लिखा।).'},
            {'english': 'She did not write a letter.', 'hindi': '(उसने एक पत्र नहीं लिखा।).'},
            {'english': 'Ram did not write a letter.', 'hindi': '(राम ने एक पत्र नहीं लिखा।).'},
        ],
        'pluralExamples': [
            {'english': 'Boys did not write a letter', 'hindi': 'लड़कों ने एक पत्र नहीं लिखा।.'},
            {'english': 'They did not write a letter', 'hindi': 'उन्होंने एक पत्र नहीं लिखा।.'},
            {'english': 'I did not write a letter', 'hindi': 'मैंने एक पत्र नहीं लिखा।.'},
            {'english': 'You did not write a letter', 'hindi': 'तुमने एक पत्र नहीं लिखा।.'},
            {'english': 'We did not write a letter', 'hindi': 'हमने एक पत्र नहीं लिखा।.'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Indefinite Tense (negative) when you want to express that something did not occur in the past.`,
                example: `a. I did not visit the museum last week. (Negation of a specific action)`,
            },
            {
                usage: `It is often used with time expressions like yesterday, last week, in 1990, etc.`,
                example: `b. They did not play soccer yesterday. (Denial of a past activity)`,
            },
            {
                usage: `Utilize it to deny or negate actions that happened or were expected to happen.`,
                example: `c. We did not finish our homework on time. (Negating completion within a `,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "not" after the auxiliary verb "did."`,
                incorrect: `She did write not a letter.`,
                correct: `She did not write a letter.`,
            },
            {
                beware: `Use the base form of the verb after "did not."`,
                incorrect: `He did not visited the museum.`,
                correct: `He did not visit the museum.`,
            },
            {
                beware: `Be mindful of the word order and structure in negative sentences.`,
                incorrect: `We not finished our homework.`,
                correct: `We did not finish our homework.`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Interrogative)`,
        'meaning': 'The Past Indefinite Tense (interrogative) is used to form questions about actions or events that occurred in the past.',
        'singularFormat': 'Did + Subject + 1st form of verb + Object?',
        'pluralFormat': 'Did + Subject + 1st form of verb + Object?',
        'singularExamples': [
            {'english': 'Did boy write a letter?', 'hindi': 'क्या लड़के ने एक पत्र लिखा?'},
            {'english': 'Did he write a letter?', 'hindi': 'क्या उसने एक पत्र लिखा?'},
            {'english': 'Did she write a letter?', 'hindi': 'क्या उसने एक पत्र लिखा?'},
            {'english': 'Did Ram write a letter?', 'hindi': 'क्या राम ने एक पत्र लिखा?'},
        ],
        'pluralExamples': [
            {'english': 'Did boys write a letter?', 'hindi': 'क्या लड़कों ने एक पत्र लिखा?'},
            {'english': 'Did they write a letter?', 'hindi': 'क्या उन्होंने एक पत्र लिखा?'},
            {'english': 'Did I write a letter?', 'hindi': 'क्या मैंने एक पत्र लिखा?'},
            {'english': 'Did you write a letter?', 'hindi': 'क्या तुमने एक पत्र लिखा?'},
            {'english': 'Did we write a letter?', 'hindi': 'क्या हमने एक पत्र लिखा?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Indefinite Tense (interrogative) when you want to ask questions about completed actions or events in the past.`,
                example: `What did you eat for dinner last night? (Question about a past action)`,
            },
            {
                usage: `It is often used with question words like what, where, when, why, etc.`,
                example: `When did they start the project? (Question about the timing of an event)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "did" at the beginning of the sentence.`,
                incorrect: `She did write a letter?`,
                correct: `Did she write a letter?`,
            },
            {
                beware: `Use the base form of the verb after "did."`,
                incorrect: `Did he visited the museum last week?`,
                correct: `Did he visit the museum last week?`,
            },
            {
                beware: `Pay attention to the structure when forming interrogative sentences.`,
                incorrect: `Did not we finish our homework?`,
                correct: `Did we finish our homework?`,
            },
        ]
    },

    // CONTINUOUS TENSES 
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Past Continuous Tense (positive) is used to describe ongoing or continuous actions that were happening at a specific moment in the past.',
        'singularFormat': 'Subject + was + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + were + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy was writing a letter.', 'hindi': 'लड़का एक पत्र लिख रहा था।'},
            {'english': 'He was writing a letter.', 'hindi': 'वह एक पत्र लिख रहा था।'},
            {'english': 'She was writing a letter.', 'hindi': 'वह एक पत्र लिख रही थी।'},
            {'english': 'Ram was writing a letter.', 'hindi': 'राम एक पत्र लिख रहा था।'},
        ],
        'pluralExamples': [
            {'english': 'Boys were writing a letter.', 'hindi': 'लड़के एक पत्र लिख रहे थे।'},
            {'english': 'They were writing a letter.', 'hindi': 'वे एक पत्र लिख रहे थे।'},
            {'english': 'You were writing a letter.', 'hindi': 'तुम एक पत्र लिख रहे थे।'},
            {'english': 'We were writing a letter.', 'hindi': 'हम एक पत्र लिख रहे थे।'},
            {'english': 'I was writing a letter. (note: was is used)', 'hindi': 'मैं एक पत्र लिख रहा था।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Continuous Tense (positive) when emphasizing the duration or continuity of an action that was happening at a particular time in the past.`,
                example: `At 9 AM yesterday, they were still sleeping. (Emphasizing ongoing action at a specific time)`,
            },
            {
                usage: `Often used with time expressions to provide context.`,
                example: `While I was watching TV, the phone rang. (Two simultaneous actions in the past)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure correct usage of "was" with singular subjects and "were" with plural subjects.`,
                incorrect: `They was playing basketball.`,
                correct: `They were playing basketball.`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `She was read a book.`,
                correct: `She was reading a book.`,
            },
            {
                beware: `Be careful with time expressions to accurately convey the duration of the action.`,
                incorrect: `It was raining heavily for a few minutes last night.`,
                correct: `It was raining heavily all night last night.`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Past Continuous Tense (negative) is used to express that an ongoing action in the past was not happening at a specific moment or during a specific period.',
        'singularFormat': 'Subject + was not + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + were not + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy was not writing a letter.', 'hindi': 'लड़का एक पत्र नहीं लिख रहा था।'},
            {'english': 'He was not writing a letter.', 'hindi': 'वह एक पत्र नहीं लिख रहा था।'},
            {'english': 'She was not writing a letter.', 'hindi': 'वह एक पत्र नहीं लिख रही थी।'},
            {'english': 'Ram was not writing a letter.', 'hindi': 'राम एक पत्र नहीं लिख रहा था।'},
        ],
        'pluralExamples': [
            {'english': 'Boys were not writing a letter.', 'hindi': 'लड़के एक पत्र नहीं लिख रहे थे।'},
            {'english': 'They were not writing a letter.', 'hindi': 'वे एक पत्र नहीं लिख रहे थे।'},
            {'english': 'You were not writing a letter.', 'hindi': 'तुम एक पत्र नहीं लिख रहे थे।'},
            {'english': 'We were not writing a letter.', 'hindi': 'हम एक पत्र नहीं लिख रहे थे।'},
            {'english': 'I was not writing a letter. (note: was is used).', 'hindi': 'मैं एक पत्र नहीं लिख रहा था।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Continuous Tense (negative) to indicate that an ongoing action in the past was interrupted.`,
                example: `I was not watching TV when the power went out. (Indicating interruption)`,
            },
            {
                usage: `Use it when ongoing action in the past was not happening at a particular moment, or during a specified period.`,
                example: `They were not working on the project at that time. (Not happening at a specific moment)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure correct usage of "was not" with singular subjects and "were not" with plural subjects.`,
                incorrect: `He were not playing the guitar.`,
                correct: `He was not playing the guitar.`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `We were not studied for the exam.`,
                correct: `We were not studying for the exam.`,
            },
            {
                beware: `Be precise with the time frame to convey the absence of the action accurately.`,
                incorrect: `It was not raining heavily yesterday.`,
                correct: `It was not raining heavily last night.`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Past Continuous Tense (interrogative) is used to form questions about ongoing or continuous actions that were happening at a specific moment in the past.',
        'singularFormat': 'Was + Subject + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Were + Subject + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Was boy writing a letter?', 'hindi': 'क्या लड़का एक पत्र लिख रहा था?'},
            {'english': 'Was he writing a letter?', 'hindi': 'क्या वह एक पत्र लिख रहा था?'},
            {'english': 'Was she writing a letter?', 'hindi': 'क्या वह एक पत्र लिख रही थी?'},
            {'english': 'Was Ram writing a letter?', 'hindi': 'क्या राम एक पत्र लिख रहा था?'},
        ],
        'pluralExamples': [
            {'english': 'Were boys writing a letter?', 'hindi': 'क्या लड़के एक पत्र लिख रहे थे?'},
            {'english': 'Were they writing a letter?', 'hindi': 'क्या वे एक पत्र लिख रहे थे?'},
            {'english': 'Were You writing a letter?', 'hindi': 'क्या तुम एक पत्र लिख रहे थे?'},
            {'english': 'Were We writing a letter?', 'hindi': 'क्या हम एक पत्र लिख रहे थे?'},
            {'english': 'Was I writing a letter? (note: was is used).', 'hindi': 'क्या मैं एक पत्र लिख रहा था?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Continuous Tense (interrogative) to ask questions about ongoing actions in the past, especially to inquire about simultaneous actions or activities at a specific time.`,
                example: `What were you doing at 7 AM yesterday? (Inquiring about a specific time)`,
            },
            {
                usage: `Use it to ask question about ongoing action at a particular moment in the past.`,
                example: `Were they working on the project when you entered? (Questioning ongoing action at a particular moment)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure correct usage of "was" with singular subjects and "were" with plural subjects.`,
                incorrect: `Were she reading a book?`,
                correct: `Was she reading a book?`,
            },
            {
                beware: `Use the present participle (verb + ing) form of the main verb.`,
                incorrect: `Was he cooked dinner when I arrived?`,
                correct: `Was he cooking dinner when I arrived?`,
            },
            {
                beware: `Maintain the correct word order when forming interrogative sentences.`,
                incorrect: `Were studying they for the exam?`,
                correct: `Were they studying for the exam?`,
            },
        ]
    },    

    // PERFECT TENSES 
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Positive)`,
        'meaning': 'The Past Perfect Tense (positive) is used to describe an action that was completed before another action or event in the past.',
        'singularFormat': 'Subject + had + 3rd form of verb + Object',
        'pluralFormat': 'Subject + had + 3rd form of verb + Object',
        'singularExamples': [
            {'english': 'Boy had written a letter.', 'hindi': 'लड़का एक पत्र लिख चुका था।'},
            {'english': 'He had written a letter.', 'hindi': 'वह एक पत्र लिख चुका था।'},
            {'english': 'She had written a letter.', 'hindi': 'वह एक पत्र लिख चुकी थी।'},
            {'english': 'Ram had written a letter.', 'hindi': 'राम ने एक पत्र लिख चुका था।'},
        ],
        'pluralExamples': [
            {'english': 'Boys had written a letter.', 'hindi': 'लड़के ने एक पत्र लिख चुके थे।'},
            {'english': 'They had written a letter.', 'hindi': 'वे एक पत्र लिख चुके थे।'},
            {'english': 'I had written a letter.', 'hindi': 'मैं एक पत्र लिख चुका था।'},
            {'english': 'You had written a letter.', 'hindi': 'तुम एक पत्र लिख चुके थे।'},
            {'english': 'We had written a letter.', 'hindi': 'हम एक पत्र लिख चुके थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Tense (positive) when you want to express that one action was completed before another action or event in the past.`,
                example: `She had already eaten when I called her. (Completion before a specific point in the past)`,
            },
            {
                usage: `Often used with time expressions like before, already, by the time, etc.`,
                example: `By the time they arrived, we had already left. (Completion before a specific event)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had" with the past participle of the verb.`,
                incorrect: `She have finished her homework before dinner.`,
                correct: `She had finished her homework before dinner.`,
            },
            {
                beware: `Clearly establish the sequence of events to convey the completed action before another.`,
                incorrect: `We had visited the museum after it closed.`,
                correct: `We had visited the museum before it closed.`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Negative)`,
        'meaning': 'The Past Perfect Tense (negative) is used to express that an action was not completed before another action or event in the past.',
        'singularFormat': 'Subject + had not + 3rd form of verb + Object',
        'pluralFormat': 'Subject + had not + 3rd form of verb + Object',
        'singularExamples': [
            {'english': 'Boy had not written a letter.', 'hindi': 'लड़का एक पत्र नहीं लिखा चुका था।'},
            {'english': 'He had not written a letter.', 'hindi': 'वह एक पत्र नहीं लिखा चुका था।'},
            {'english': 'She had not written a letter.', 'hindi': 'वह एक पत्र नहीं लिखा चुकी थी।'},
            {'english': 'Ram had not written a letter.', 'hindi': 'राम एक पत्र नहीं लिखा चुका था।'},
        ],
        'pluralExamples': [
            {'english': 'Boys had not written a letter.', 'hindi': 'लड़के एक पत्र नहीं लिखा चुके थे।'},
            {'english': 'They had not written a letter.', 'hindi': 'वे एक पत्र नहीं लिखा चुके थे।'},
            {'english': 'I had not written a letter.', 'hindi': 'मैं एक पत्र नहीं लिखा चुका था।'},
            {'english': 'You had not written a letter.', 'hindi': 'तुम एक पत्र नहीं लिखा चुके थे।'},
            {'english': 'We had not written a letter.', 'hindi': 'हमने एक पत्र नहीं लिखा चुके थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Tense (negative) when you want to express that one action was not completed before another action or event in the past.`,
                example: `I had not heard the news before she told me. (Non-completion before a specific point in the past)`,
            },
            {
                usage: `Often used with time expressions like before, already, by the time, etc.`,
                example: `They had not started the meeting when I entered. (Non-completion before a specific event)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had not" with the past participle of the verb.`,
                incorrect: `She did not had finished her homework before dinner.`,
                correct: `She had not finished her homework before dinner.`,
            },
            {
                beware: `Clearly establish the sequence of events to convey the non-completion of the action before another.`,
                incorrect: `We had not visited the museum after it closed.`,
                correct: `We had not visited the museum before it closed.`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Interrogative)`,
        'meaning': 'The Past Perfect Tense (interrogative) is used to form questions about whether an action was completed before another action or event in the past.',
        'singularFormat': 'Had + Subject + 3rd form of verb + Object?',
        'pluralFormat': 'Had + Subject + 3rd form of verb + Object?',
        'singularExamples': [
            {'english': 'Had boy written a letter?', 'hindi': 'क्या लड़का एक पत्र लिख चुका था?'},
            {'english': 'Had he written a letter?', 'hindi': 'क्या वह एक पत्र लिख चुका था?'},
            {'english': 'Had she written a letter?', 'hindi': 'क्या वह एक पत्र लिख चुकी थी?'},
            {'english': 'Had Ram written a letter?', 'hindi': 'क्या राम एक पत्र लिख चुका था?'},
        ],
        'pluralExamples': [
            {'english': 'Had boys written a letter?', 'hindi': 'क्या लड़के एक पत्र लिख चुके थे?'},
            {'english': 'Had they written a letter?', 'hindi': 'क्या वे एक पत्र लिख चुके थे?'},
            {'english': 'Had I written a letter?', 'hindi': 'क्या मैं एक पत्र लिख चुका था?'},
            {'english': 'Had you written a letter?', 'hindi': 'क्या तुम एक पत्र लिख चुके थे?'},
            {'english': 'Had we written a letter?', 'hindi': 'क्या हम एक पत्र लिख चुके थे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Tense (interrogative) when asking whether one action was completed before another action or event in the past.`,
                example: `a. Had you heard the news before she told you? (Questioning completion before a specific point in the past)`,
            },
            {
                usage: `Often used with time expressions like before, already, by the time, etc.`,
                example: `b. Had they started the meeting when you entered? (Questioning completion before a specific event)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had" with the past participle of the verb.`,
                incorrect: `Did she had finished her homework before dinner?`,
                correct: `Had she finished her homework before dinner?`,
            },
            {
                beware: `Clearly establish the sequence of events when forming interrogative sentences.`,
                incorrect: `Had we visited the museum after it closed?`,
                correct: `Had we visited the museum before it closed?`,
            },
        ]
    },

    // PERFECT CONTINUOUS TENSES 
    {
        'code': 'PCON',
        'heading': `${PERFECT_CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Past Perfect Continuous Tense (positive) is used to express the duration of an ongoing action that started in the past and was still in progress before another action or event occurred.',
        'singularFormat': 'Subject + had been + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + had been + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy had been writing a letter since morning', 'hindi': 'लड़का सुबह से एक पत्र लिख रहा था।'},
            {'english': 'He had been writing a letter since yesterday', 'hindi': 'वह कल से एक पत्र लिख रहा था।'},
            {'english': 'She had been writing a letter since 2\'o clock', 'hindi': 'वह 2 बजे से एक पत्र लिख रही थी।'},
            {'english': 'Ram had been writing a letter for last 2 week', 'hindi': 'राम पिछले 2 हफ्ते से एक पत्र लिख रहा था।'},
        ],
        'pluralExamples': [
            {'english': 'Boys had been writing a letter since morning', 'hindi': 'लड़के सुबह से एक पत्र लिख रहे थे।'},
            {'english': 'They had been writing a letter since yesterday', 'hindi': 'वे कल से एक पत्र लिख रहे थे।'},
            {'english': 'I had been writing a letter since 2\'o clock', 'hindi': 'मैं 2 बजे से एक पत्र लिख रहा था।'},
            {'english': 'You had been writing a letter for last 2 week', 'hindi': 'तुम पिछले 2 हफ्ते से एक पत्र लिख रहे थे।'},
            {'english': 'We had been writing a letter for last 2 week', 'hindi': 'हम पिछले 2 हफ्ते से एक पत्र लिख रहे थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Continuous Tense (positive) when emphasizing the continuous duration of an action that started before a specific point in the past and continued up to that point.`,
                example: `They were tired because they had been walking for hours. (Emphasizing the duration of an action)`,
            },
            {
                usage: `Often used with time expressions like for, since, all day, etc.`,
                example: `She had been living in the city since 2010. (Highlighting the continuous state over a period)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had been" with the present participle (verb + ing).`,
                incorrect: `She had studying for hours before the exam.`,
                correct: `She had been studying for hours before the exam.`,
            },
            {
                beware: `Use time expressions accurately to convey the duration of the ongoing action.`,
                incorrect: `He had been practicing the guitar all five minutes.`,
                correct: `He had been practicing the guitar for five minutes.`,
            },
        ]
    },
    {
        'code': 'PCON',
        'heading': `${PERFECT_CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Past Perfect Continuous Tense (negative) is used to indicate that a continuous action, which started in the past and continued up to a certain point, was not happening or was not completed before another action or event.',
        'singularFormat': 'Subject + had not been + (1st form of verb + ing) + Object',
        'pluralFormat': 'Subject + had not been + (1st form of verb + ing) + Object',
        'singularExamples': [
            {'english': 'Boy had not been writing a letter since morning.', 'hindi': 'लड़का सुबह से एक पत्र नहीं लिख रहा था।'},
            {'english': 'He had not been writing a letter since yesterday.', 'hindi': 'वह कल से एक पत्र नहीं लिख रहा था।'},
            {'english': 'She had not been writing a letter since 2\'o clock.', 'hindi': 'वह 2 बजे से एक पत्र नहीं लिख रही थी।'},
            {'english': 'Ram had not been writing a letter for last 2 week.', 'hindi': 'राम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहा था।'},
        ],
        'pluralExamples': [
            {'english': 'Boys had not been writing a letter since morning.', 'hindi': 'लड़के सुबह से एक पत्र नहीं लिख रहे थे।'},
            {'english': 'They had not been writing a letter since yesterday.', 'hindi': 'वे कल से एक पत्र नहीं लिख रहे थे।'},
            {'english': 'I had not been writing a letter since 2\'o clock.', 'hindi': 'मैं 2 बजे से एक पत्र नहीं लिख रहा था।'},
            {'english': 'You had not been writing a letter for last 2 week.', 'hindi': 'तुम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहे थे।'},
            {'english': 'We had not been writing a letter for last 2 week.', 'hindi': 'हम पिछले 2 हफ्ते से एक पत्र नहीं लिख रहे थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Continuous Tense (negative) when you want to express that a continuous action, ongoing before a specific point in the past, was interrupted, not completed, or was not happening.`,
                example: `They were not tired because they had not been walking for hours. (Indicating non-completion of an action)`,
            },
            {
                usage: `Often used with time expressions like for, since, all day, etc.`,
                example: `She had not been living in the city since 2010. (Expressing the absence of a continuous state)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had not been" with the present participle (verb + ing).`,
                incorrect: `They had been not working on the project all day.`,
                correct: `They had not been working on the project all day.`,
            },
            {
                beware: `Use time expressions accurately to convey the absence of the ongoing action.`,
                incorrect: `He had not been practicing the guitar for five minutes.`,
                correct: `He had not been practicing the guitar for five minutes.`,
            },
        ]
    },
    {
        'code': 'PCON',
        'heading': `${PERFECT_CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Past Perfect Continuous Tense (interrogative) is used to form questions about the duration of a continuous action that started in the past and continued up to a certain point, emphasizing whether it was happening before another action or event.',
        'singularFormat': 'Had + Subject + been + (1st form of verb + ing) + Object?',
        'pluralFormat': 'Had + Subject + been + (1st form of verb + ing) + Object?',
        'singularExamples': [
            {'english': 'Had boy been writing a letter since morning?', 'hindi': 'क्या लड़का सुबह से एक पत्र लिख रहा था?'},
            {'english': 'Had he been writing a letter since yesterday?', 'hindi': 'क्या वह कल से एक पत्र लिख रहा था?'},
            {'english': 'Had she been writing a letter since 2\'o clock?', 'hindi': 'क्या वह 2 बजे से एक पत्र लिख रही थी?'},
            {'english': 'Had Ram been writing a letter for last 2 week?', 'hindi': 'क्या राम पिछले 2 हफ्ते से एक पत्र लिख रहा था?'},
        ],
        'pluralExamples': [
            {'english': 'Had boys been writing a letter since morning?', 'hindi': 'क्या लड़के सुबह से एक पत्र लिख रहे थे?'},
            {'english': 'Had they been writing a letter since yesterday?', 'hindi': 'क्या वे कल से एक पत्र लिख रहे थे?'},
            {'english': 'Had I been writing a letter since 2\'o clock?', 'hindi': 'क्या मैं 2 बजे से एक पत्र लिख रहा था?'},
            {'english': 'Had you been writing a letter for last 2 week?', 'hindi': 'क्या तुम पिछले 2 हफ्ते से एक पत्र लिख रहे थे?'},
            {'english': 'Had we been writing a letter for last 2 week?', 'hindi': 'क्या हम पिछले 2 हफ्ते से एक पत्र लिख रहे थे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Continuous Tense (interrogative) when asking about the duration of a continuous action that started before a specific point in the past and continued up to that point.`,
                example: `Had you been sleeping when the phone rang? (Questioning the duration of an action before a specific event)`,
            },
            {
                usage: `Often used with time expressions like for, since, all day, etc.`,
                example: `Had they been working together for a long time? (Inquiring about the continuous collaboration)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had been" with the present participle (verb + ing).`,
                incorrect: `Had she studying for hours before the exam?`,
                correct: `Had she been studying for hours before the exam.`,
            },
            {
                beware: `Use time expressions accurately to inquire about the duration of the ongoing action.`,
                incorrect: `Had he been practicing the guitar all five minutes?`,
                correct: `Had he been practicing the guitar for five minutes?`,
            },
        ]
    },
                
]
            
            
            