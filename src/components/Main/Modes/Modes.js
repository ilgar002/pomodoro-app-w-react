import React from 'react';
import './Modes.scss';

const Modes = ({ currentMode, setCurrentMode }) => {
  return (
    <div className="mode-option-btns">
      <button onClick={() => setCurrentMode('pomodoro')}
        className={currentMode === "pomodoro" ? "active" : null}>pomodoro</button>
      <button onClick={() => setCurrentMode('shortBreak')}
        className={currentMode === "shortBreak" ? "active" : null}>short break</button>
      <button onClick={() => setCurrentMode('longBreak')}
        className={currentMode === "longBreak" ? "active" : null}>long break</button>
    </div>
  )
}

export default Modes