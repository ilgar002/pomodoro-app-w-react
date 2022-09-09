import React from 'react'
import "./Main.scss"
import Modes from './Modes/Modes'
import Timer from './Timer/Timer'
const Main = ({ currentMode, setCurrentMode, timeValue, convertToSeconds }) => {
    return (
        <main>
            <Modes
                currentMode={currentMode}
                setCurrentMode={setCurrentMode}
            />
            <Timer
                currentMode={currentMode}
                timeValue={timeValue}
                convertToSeconds={convertToSeconds}
            />
        </main>
    )
}

export default Main