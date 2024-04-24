import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Styles from './temp.module.css';

const InternalStyles = {
    mainContainer: {
        padding: 0,
        width: '100vw', 
        marginBottom: "4rem", 
        marginTop: '4rem',
    },
    videoAndTheoryWrapper: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
    },
    videoBox: { 
        width: '100%', 
        height: '100%'
    },
    headingBox: {
        marginBottom: '2rem',
    },
    ul: {
        listStyle: 'none',
    },
    liContent: {
        marginLeft: '1.1rem',
    },
    bold: {
        fontWeight: 'bold',
    }

}

function VideoAndTheory(props){

    return (
        <div style={InternalStyles.mainContainer}>

            <div style={InternalStyles.videoAndTheoryWrapper}>
            
                {/* Video Box  */}
                <div className={Styles.videoWrapper}>
                    <div style={InternalStyles.videoBox}>
                        <iframe width="100%" height="100%" src={props.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>                              
                </div>

                {/* Theory Box  */}
                <div className={Styles.theoryWrapper}>
                    {props.heading && <div style={InternalStyles.headingBox}>
                        <Typography variant="h5" component="h1" sx={InternalStyles.bold}>{props.heading}</Typography>  
                        <Typography sx={{fontSize: 16, fontWeight: 'bold'}} component="h3">{props.meaning}</Typography>
                    </div>
                    }

                    {props.examples && <div>
                        <Typography variant="h5" component="h2" sx={InternalStyles.bold}>Examples</Typography>
                        <ul>
                            {
                                props.examples.map((example, index) => {
                                    return (
                                        <li><Typography>{example.example}</Typography> </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    }

                    {props.types && <div>
                        <Typography variant="h5" component="h2" sx={InternalStyles.bold}>Types</Typography>  
                        {
                            props.types.map((type, index) => {
                                return (
                                    <ul style={InternalStyles.ul}>
                                        <li><Typography sx={InternalStyles.bold}>{index+1}: {type.heading}</Typography></li>
                                        <li style={InternalStyles.liContent}><Typography><b>Meaning: </b>{type.meaning}</Typography></li>
                                        <li style={InternalStyles.liContent}><Typography><b>Example: </b>{type.example}</Typography></li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    }

                    {props.functions && <div>
                        <Typography variant="h5" component="h2" sx={InternalStyles.bold}>Functions</Typography>  
                            {
                                props.functions?.map((func, index) => {
                                    return (
                                        <ul style={InternalStyles.ul}>
                                            <li><Typography sx={InternalStyles.bold}>{index+1}: {func.heading}</Typography> </li>
                                            <li style={InternalStyles.liContent}><Typography><b>Example: </b>{func.example}</Typography></li>
                                            <li style={InternalStyles.liContent}><Typography><b>Meaning: </b>{func.meaning}</Typography></li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    }

                    {props.summary && <div>
                        <Typography variant="h5" component="h2" sx={InternalStyles.bold}>Summary</Typography>  
                        <ul>
                            {
                                props.summary?.map((summ, index) => {
                                    return (
                                        <li><Typography>{summ.summary}</Typography></li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                    }
                </div>
                
            </div>

        </div>
    )

}

export default VideoAndTheory;