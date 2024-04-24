import React from 'react'
import Styles from './floatingBottomRightButton.module.css';

function FloatingBottomRightButton(props) {
  return (
    <button className={Styles.button} onClick={props.onClick} disabled={props?.disabled}>{props.text}</button>
  )
}

export default FloatingBottomRightButton