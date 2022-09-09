import React, { useEffect, useState, useRef } from 'react'
import './Timer.scss'

const Timer = ({ currentMode, timeValue, convertToSeconds }) => {
    const animationRef = useRef()
    let timerId = useRef()

    let initTime;
    if (currentMode === "pomodoro") {
        initTime = timeValue.pomodoro * 60
    }
    else if (currentMode === "shortBreak") {
        initTime = timeValue.shortBreak * 60
    }
    else if (currentMode === "longBreak") {
        initTime = timeValue.longBreak * 60
    }


    const [remainingTime, setRemainingTime] = useState(initTime)
    const [isTimerOpen, setIsTimerOpen] = useState(false)


    useEffect(() => {
        setRemainingTime(initTime)
        clearInterval(timerId.current)
        setIsTimerOpen(false)
        animationRef.current.style.strokeDashoffset = 0
    }, [initTime, currentMode, timeValue])

    useEffect(() => {
        let animationId;
        if (remainingTime <= 0) {
            clearInterval(timerId.current)
            setRemainingTime(initTime)
            setIsTimerOpen(false)
            animationRef.current.style.strokeDashoffset = 0
            animationRef.current.style.animation = "circleAnimation .4s 1 linear forwards running"
            animationId = setTimeout(() => {
                animationRef.current.style.animationPlayState = "paused"
                animationRef.current.style.animation = null
                clearInterval(animationId)
            }, 400)
        }
        else {
            if (isTimerOpen) {
                animationRef.current.style.strokeDashoffset = 1036.2 - (1036.2 * (remainingTime / initTime))
            }
        }
        // document.title = `Pomodoro App`
        isTimerOpen ? document.title = `${convertToSeconds(remainingTime)} | Pomodoro App` : document.title = `Pomodoro App`
    }, [remainingTime, isTimerOpen])


    function onClickStart() {
        animationRef.current.style.animation = null
        setIsTimerOpen(true)
        console.log();
        timerId.current = setInterval(() => {
            setRemainingTime((prevState) => prevState -= 1)
        }, 1000)
    }

    function onClickPause() {
        setIsTimerOpen(false)
        clearInterval(timerId.current)
    }
    return (
        <div className="timer">
            <div className="outer">
                <div className="inner">
                    <div className="remaining-time">{convertToSeconds(remainingTime)}</div>
                    {isTimerOpen ? <button onClick={onClickPause} className="pause">Pause</button> : <button onClick={onClickStart} className="start">Start</button>}
                </div>
            </div>
            <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="360px" height="360px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle
                    ref={animationRef}
                    cx="180" cy="180" r="165" strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

export default Timer