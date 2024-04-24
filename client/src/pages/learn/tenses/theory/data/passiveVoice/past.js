
const INDEFINITE = 'Indefinite';
const CONTINUOUS = 'Continuous';
const PERFECT = 'Perfect';
const PERFECT_CONTINUOUS = 'Perfect Continuous';
const SINGULAR = 'singular';
const PLURAL = 'plural';

export const pastAPI = [
    // INDEFINITE TENSES 
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Positive)`,
        'meaning': 'The Past Indefinite Tense (positive) in passive voice is used to describe an action that was done to the subject in the past without specifying the doer.',
        'singularFormat': 'Subject + was + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + were + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter was written.', 'hindi': 'एक पत्र लिखा गया था।'},
        ],
        'pluralExamples': [
            {'english': 'Letters were written.', 'hindi': 'पत्र लिखे गए थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Indefinite Tense in passive voice to emphasize the action done to the subject in the past without focusing on the doer.`,
                example: `The document was found on the desk. (Emphasizing the discovery without specifying who found it)`,
            },
            {
                usage: `Often used when the doer is unknown, not important, or can be implied.`,
                example: `The decision was made during the meeting. (Highlighting the decision without mentioning who made it)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "was" or "were" based on the subject.`,
                incorrect: `The cake were baked yesterday.`,
                correct: `The cake was baked yesterday.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The letter was mailed. (Incomplete passive voice)`,
                correct: `The letter was mailed by John. (Complete passive voice)`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Negative)`,
        'meaning': 'The Past Indefinite Tense (negative) in passive voice is used to describe an action that was not done to the subject in the past without specifying the doer.',
        'singularFormat': 'Subject + was not + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + were not + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter was not written.', 'hindi': 'एक पत्र नहीं लिखा गया था।'},
        ],
        'pluralExamples': [
            {'english': 'Letters were not written.', 'hindi': 'पत्र नहीं लिखे गए थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Indefinite Tense in negative passive voice to convey that an action was not done to the subject in the past without focusing on the doer.`,
                example: `The message was not received on time. (Stating the non-reception without specifying who didn't send it)`,
            },
            {
                usage: `Often used when the doer is unknown, not important, or can be implied.`,
                example: `The document was not found in the office. (Emphasizing the absence of discovery without mentioning who didn't find it)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "was not" or "were not" based on the subject.`,
                incorrect: `The cake were not baked yesterday.`,
                correct: `The cake was not baked yesterday.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The letter was not mailed. (Incomplete negative passive voice)`,
                correct: `The letter was not mailed by anyone. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'IND',
        'heading': `${INDEFINITE} Tense (Interrogative)`,
        'meaning': 'The Past Indefinite Tense (interrogative) in passive voice is used to form questions about actions that were done to the subject in the past without specifying the doer.',
        'singularFormat': 'Was + Subject + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Were + Subject + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Was a letter written.', 'hindi': 'क्या एक पत्र लिखा गया था?'},
        ],
        'pluralExamples': [
            {'english': 'Were letters written.', 'hindi': 'क्या पत्र लिखे गए थे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Indefinite Tense in interrogative passive voice to ask questions about actions that were done to the subject in the past without focusing on the doer.`,
                example: `Was the package received on time? (Inquiring about the reception without specifying who sent it)`,
            },
            {
                usage: `Often used when the doer is unknown, not important, or can be implied.`,
                example: `Was the mistake noticed during the presentation? (Asking about the notice without mentioning who made the mistake)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "Was" or "Were" based on the subject.`,
                incorrect: `Were the cake baked yesterday?`,
                correct: `Was the cake baked yesterday?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Was the letter mailed this morning? (Incomplete interrogative passive voice)`,
                correct: `Was the letter mailed by anyone this morning? (Complete interrogative passive voice)`,
            },
        ]
    },

    // CONTINUOUS TENSES 
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Positive)`,
        'meaning': 'The Past Continuous Tense (positive) in passive voice is used to describe an ongoing action that was happening to the subject in the past without specifying the doer.',
        'singularFormat': 'Subject + was + being + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + were + being + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter was being written.', 'hindi': 'एक पत्र लिखा जा रहा था।'},
        ],
        'pluralExamples': [
            {'english': 'Letters were being written.', 'hindi': 'पत्र लिखे जा रहे थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Continuous Tense in positive passive voice to emphasize an ongoing action that was happening to the subject in the past without focusing on the doer.`,
                example: `The document was being reviewed when the error was discovered. (Highlighting the ongoing review without specifying who was reviewing)`,
            },
            {
                usage: `Often used to describe a process or activity in progress.`,
                example: `The project was being discussed during the conference call. (Emphasizing the ongoing discussion without mentioning who was discussing)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "was being" or "were being" based on the subject.`,
                incorrect: `The cake was being bake when the guests arrived.`,
                correct: `The cake was being baked when the guests arrived.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The car was being repaired. (Incomplete positive passive voice)`,
                correct: `The car was being repaired by the mechanic. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Negative)`,
        'meaning': 'The Past Continuous Tense (negative) in passive voice is used to describe an ongoing action that was not happening to the subject in the past without specifying the doer.',
        'singularFormat': 'Subject + was + not being + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + were + not being + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter was not being written.', 'hindi': 'एक पत्र नहीं लिखा जा रहा था।'},
        ],
        'pluralExamples': [
            {'english': 'Letters were not being written.', 'hindi': '"पत्र नहीं लिखे जा रहे थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Continuous Tense in negative passive voice to convey that an ongoing action was not happening to the subject in the past without focusing on the doer.`,
                example: `The presentation was not being conducted when they arrived. (Stating the non-conduct without specifying who was conducting)`,
            },
            {
                usage: `Often used to explain the absence of a process or activity.`,
                example: `The machinery was not being used at that time. (Emphasizing the non-use without mentioning who wasn't using it)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "was not being" or "were not being" based on the subject.`,
                incorrect: `The cake was not being bake when they entered the kitchen.`,
                correct: `The cake was not being baked when they entered the kitchen.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The car was not being repaired. (Incomplete negative passive voice)`,
                correct: `The car was not being repaired by anyone. (Complete negative passive voice)`,
            },
        ]
    },
    {
        'code': 'CON',
        'heading': `${CONTINUOUS} Tense (Interrogative)`,
        'meaning': 'The Past Continuous Tense (interrogative) in passive voice is used to form questions about ongoing actions that were happening to the subject in the past without specifying the doer.',
        'singularFormat': 'Was + Subject + being + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Were + Subject + being + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Was a letter being written?', 'hindi': 'क्या एक पत्र लिखा जा रहा था?'},
        ],
        'pluralExamples': [
            {'english': 'Were letters being written?', 'hindi': 'क्या पत्र लिखे जा रहे थे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Continuous Tense in interrogative passive voice when asking questions about ongoing actions that were happening to the subject in the past without focusing on the doer.`,
                example: `Was the experiment being conducted when you arrived? (Asking about the ongoing experiment without specifying who was conducting it)`,
            },
            {
                usage: `Often used to inquire about processes or activities in progress.`,
                example: `Were the machines being used at that time? (Inquiring about the use without mentioning who was using them)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Was" or "Were" based on the subject.`,
                incorrect: `Were the cake being baked when they entered the kitchen?`,
                correct: `Was the cake being baked when they entered the kitchen?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Was the car being repaired? (Incomplete interrogative passive voice)`,
                correct: `Was the car being repaired by anyone? (Complete interrogative passive voice)`,
            },
        ]
    },      

    // PERFECT TENSES 
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Positive)`,
        'meaning': 'The Past Perfect Tense (positive) in passive voice is used to describe an action that had been completed before another past action, without specifying the doer.',
        'singularFormat': 'Subject + had + been + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + had + been + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter had been written.', 'hindi': 'एक पत्र लिखा गया था।'},
        ],
        'pluralExamples': [
            {'english': 'Letters had been written.', 'hindi': 'पत्र लिखे गए थे।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Tense in positive passive voice to emphasize an action that had been completed before another past action, without focusing on the doer.`,
                example: `The application had been processed by the time she received the confirmation. (Highlighting the completion before another past action)`,
            },
            {
                usage: `Often used to show the sequence of completed events in the past.`,
                example: `The house had been built before they moved in. (Emphasizing the completion before another past event)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had been" before the past participle of the verb.`,
                incorrect: `The project have been completed before the deadline.`,
                correct: `The project had been completed before the deadline.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The report had been submitted. (Incomplete positive passive voice)`,
                correct: `The report had been submitted by the team. (Complete positive passive voice)`,
            },
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Negative)`,
        'meaning': 'The Past Perfect Tense (negative) in passive voice is used to describe an action that had not been completed before another past action, without specifying the doer.',
        'singularFormat': 'Subject + had + not been + 3rd form of verb + (by + doer) + Object',
        'pluralFormat': 'Subject + had + not been + 3rd form of verb + (by + doer) + Object',
        'singularExamples': [
            {'english': 'A letter had not been written.', 'hindi': 'एक पत्र नहीं लिखा गया था।'},
        ],
        'pluralExamples': [
            {'english': 'Letter had not been written.', 'hindi': 'पत्र नहीं लिखा गया था।'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Tense in negative passive voice to convey that an action had not been completed before another past action, without focusing on the doer.`,
                example: `The repairs had not been finished by the time they decided to move. (Stating the non-completion before another past decision)`,
            },
            {
                usage: `Often used to show the absence of a completed event in the past sequence.`,
                example: `The news had not been heard by most of the audience when they discussed it. (Emphasizing the non-hearing before another past discussion)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct use of "had not been" before the past participle of the verb.`,
                incorrect: `The project have not been completed before the deadline.`,
                correct: `The project had not been completed before the deadline.`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `The report had not been submitted. (Incomplete negative passive voice)`,
                correct: `The report had not been submitted by the team. (Complete negative passive voice)`,
            },
            
        ]
    },
    {
        'code': 'PER',
        'heading': `${PERFECT} Tense (Interrogative)`,
        'meaning': 'The Past Perfect Tense (interrogative) in passive voice is used to form questions about whether an action had been completed before another past action, without specifying the doer.',
        'singularFormat': 'Had + Subject + been + 3rd form of verb + (by + doer) + Object?',
        'pluralFormat': 'Had + Subject + been + 3rd form of verb + (by + doer) + Object?',
        'singularExamples': [
            {'english': 'Had a letter been written.', 'hindi': 'क्या एक पत्र लिखा गया था?'},
        ],
        'pluralExamples': [
            {'english': 'Had letters been written.', 'hindi': 'क्या पत्र लिखे गए थे?'},
        ],
        'whenToUse': [
            {
                usage: `Use Past Perfect Tense in interrogative passive voice to ask whether an action had been completed before another past action, without focusing on the doer.`,
                example: `Had the news been heard by most of the team before the meeting? (Asking about the completion before another past event)`,
            },
            {
                usage: `Often used to inquire about the sequence of completed events in the past.`,
                example: `Had the repairs been finished by the time they decided to move? (Inquiring about the completion before another past decision)`,
            },
        ],
        'commonMistakes': [
            {
                beware: `Ensure the correct placement of "Had" before the subject and "been" before the past participle of the verb.`,
                incorrect: `The project had the deadline been completed before?`,
                correct: `Had the project been completed before the deadline?`,
            },
            {
                beware: `Include "by + doer" only if the doer is known or important to mention.`,
                incorrect: `Had the report been submitted before the meeting? (Incomplete interrogative passive voice)`,
                correct: `Had the report been submitted by the team before the meeting? (Complete interrogative passive voice)`,
            },
        ]
    },        
]
            
            
            