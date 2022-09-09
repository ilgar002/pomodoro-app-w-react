import React, { useRef, useEffect } from 'react'
import "./Settings.scss"
import Input from './Input/Input';
import { RiCloseFill } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';



const Settings = ({ settingsVisibility, setSettingsVisibility, timeValue, setTimeValue, currentFont, setCurrentFont, primaryColor, setPrimaryColor, layoutRef }) => {
  const pomodoroRef = useRef()
  const shortBreakRef = useRef()
  const longBreakRef = useRef()
  
  useEffect(() => {
    window.addEventListener("click", (e) => {
      e.target === layoutRef.current && setSettingsVisibility(false)
    })
  }, [settingsVisibility])

  function closeSettings() {
    setSettingsVisibility(false)
  }

  function onSubmitSettings(e) {
    e.preventDefault()
    setTimeValue({ pomodoro: pomodoroRef.current.value, shortBreak: shortBreakRef.current.value, longBreak: longBreakRef.current.value })
    setSettingsVisibility(false)
  }
  return (
    <div
      className={settingsVisibility ? 'settings-modal active' : 'settings-modal'}
    >

      <div className="caption">
        <h4 className='title'>Settings</h4>
        <RiCloseFill
          className='close-icon'
          onClick={closeSettings}
        />
      </div>


      <form onSubmit={onSubmitSettings} className="settings-form">
        <div className="select-time">
          <h4 className='subheading'>Time (Minutes)</h4>
          <div className="mode-options">
            <Input
              refValue={pomodoroRef}
              label="pomodoro"
              value={timeValue.pomodoro}
            />
            <Input
              refValue={shortBreakRef}
              label="short break"
              value={timeValue.shortBreak}
            />
            <Input
              refValue={longBreakRef}
              label="long break"
              value={timeValue.longBreak}
            />
          </div>
        </div>
        <div className="select-font">
          <h4 className="subheading">Font</h4>
          <div className="font-options">
            <div
              className={currentFont[0] === 'Open Sans' ? "font-option active" : "font-option"}
              onClick={() => {
                setCurrentFont(["Open Sans", "sans-serif"])
              }}>Aa</div>
            <div
              className={currentFont[0] === 'Oswald' ? "font-option active" : "font-option"}
              onClick={() => {
                setCurrentFont(["Oswald", "sans-serif"])
              }}>Aa</div>
            <div
              className={currentFont[0] === "Roboto Mono" ? "font-option active" : "font-option"}
              onClick={() => {
                setCurrentFont(["Roboto Mono", "monospace"])
              }}>Aa</div>

          </div>
        </div>
        <div className="select-color">
          <h4 className="subheading">Color</h4>
          <div className="color-options">
            <div className="color-option"
              onClick={() => setPrimaryColor('#F77373')}
            >
              {primaryColor === "#F77373" && <FiCheck className='checked-icon' />}
            </div>
            <div className="color-option"
              onClick={() => setPrimaryColor('#59d4d9')}
            >
              {primaryColor === "#59d4d9" && <FiCheck className='checked-icon' />}
            </div>
            <div
              className="color-option"
              onClick={() => setPrimaryColor('#D881F8')}
            >
              {primaryColor === "#D881F8" && <FiCheck className='checked-icon' />}
            </div>
          </div>
        </div>
        <button type='submit' className="apply">
          Apply
        </button>
      </form>
    </div>
  )
}

export default Settings

//className="settings-modal"