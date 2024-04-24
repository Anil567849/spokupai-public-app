import React from 'react'
import Styles from './exampleCard.module.css';


function ExampleCard({text}) {
  return (
    <div className={Styles.ExampleCard_card}>
        <p className={Styles.ExampleCard_cardText}><q>{text}</q></p>
    </div>
  )
}

export default ExampleCard