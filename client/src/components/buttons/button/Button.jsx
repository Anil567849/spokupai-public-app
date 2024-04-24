import React from 'react'
import Styles from './button.module.css';

function Button(props) {
  return (
    <button className={Styles.button} onClick={props.onClick} disabled={props?.disabled}>{props.text}</button>
  )
}

export default Button