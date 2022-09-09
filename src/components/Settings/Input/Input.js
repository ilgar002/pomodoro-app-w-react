import React from 'react'
import './Input.scss'

const Input = ({ label, value, refValue }) => {
    return (
        <div className='mode-option'>
            <label htmlFor={label}>{label}</label>
            <input ref={refValue} type="number" min="1" defaultValue={value}  />
        </div>
    )
}

export default Input

//<label htmlFor="pomodoro">pomodoro</label>
