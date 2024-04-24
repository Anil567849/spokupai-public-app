import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SharedStyles from '../../css/shared.module.css';

const InternalStyles = {
    heading: {
        fontWeight: 'bold',
        margin: "3rem 0",
        textTransform: 'capitalize'
    },
    subHeading: {
        fontWeight: 'bold',
        marginBottom: "0.5rem",
        fontSize: 20,
        textTransform: 'capitalize'
    },
    meaning: {
        fontWeight: 'bold', 
        marginBottom: '2rem', 
        marginLeft: '1.5rem',
    },
    format : {
        marginLeft: '1.5rem',
        fontWeight: 'bold',
    },
    liContent: {
        marginBottom: '0.3rem',
    },
    bold: {
        fontWeight: 'bold',
    }

}

function TenseTheory(props){

    const heading = `${props.tense} ${props.data.heading}`;

    return (
        <Box>
            <Box className={SharedStyles.headingContainer}>
                <Typography sx={InternalStyles.heading} variant="h4" component="h1" className={SharedStyles.h1Heading}>{heading}</Typography>
            </Box>
            <Box>
                <Box className="heading">
                    <Typography sx={InternalStyles.subHeading} component="h2">{heading}</Typography>
                    <Typography sx={InternalStyles.meaning}>{props.data.meaning}</Typography>
                </Box>
                <Box className="singular-format">
                    <Typography sx={InternalStyles.subHeading} component="h2">Singular Format</Typography>
                    <Typography sx={InternalStyles.format}>{props.data.singularFormat}</Typography>
                    {/* examples  */}
                    {
                        props.data.singularExamples.map((example) => {
                            return (
                                <ul>
                                    <li><Typography sx={InternalStyles.liContent}>{example.english}</Typography></li>
                                    <li><Typography>{example.hindi}</Typography></li>
                                </ul>
                            )
                        })
                    }
                </Box>
                <Box className="plural-format">
                    <Typography sx={InternalStyles.subHeading} component="h2">Plural Format</Typography>
                    <Typography sx={InternalStyles.format}>{props.data.pluralFormat}</Typography>
                    {/* examples  */}
                    {
                        props.data.pluralExamples.map((example) => {
                            return (
                                <ul>
                                    <li><Typography sx={InternalStyles.liContent}>{example.english}</Typography></li>
                                    <li><Typography>{example.hindi}</Typography></li>
                                </ul>
                            )
                        })
                    }
                </Box>
                <Box className="when-to-use">
                    <Typography sx={InternalStyles.subHeading} component="h2">When To Use</Typography>
                    {/* examples  */}
                    {
                        props.data.whenToUse.map((item) => {
                            return (
                                <ul>
                                    <li><Typography sx={InternalStyles.liContent}><b>Usage: </b>{item.usage}</Typography></li>
                                    <li><Typography><b>Example: </b>{item.example}</Typography></li>
                                </ul>
                            )
                        })
                    }
                </Box>
                <Box className="Common Mistakes">
                    <Typography sx={InternalStyles.subHeading} component="h2">Common Mistakes</Typography>
                    {/* examples  */}
                    {
                        props.data.commonMistakes.map((item) => {
                            return (
                                <ul>
                                    <li><Typography sx={InternalStyles.liContent}><b>Note: </b>{item.beware}</Typography></li>
                                    <li><Typography sx={InternalStyles.liContent}><b>Incorrect: </b>{item.incorrect}</Typography></li>
                                    <li><Typography><b>Correct: </b>{item.correct}</Typography></li>
                                </ul>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    )

}

export default TenseTheory;