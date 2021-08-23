import React from 'react'
import styles from './InputRadio.module.scss'

const InputRadio = ({onChange, currentId, id, name,label, type}) => {
    return (
        <div className={styles.radioWrapper}>
                <input className={styles.radioInput} onChange={event=>onChange(id)} checked={id === currentId} type="radio" id={id} name={name}/>
            <label className={styles.radioLabel} htmlFor={id}>{label}</label>            
        </div>
    )
}

export default InputRadio
