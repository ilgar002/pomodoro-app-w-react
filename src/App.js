import React, { useState, useEffect, useRef,useCallback } from 'react'
import './App.scss'
import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import Settings from './components/Settings/Settings';
import FilterLayout from "./components/Layout-Filter/FilterLayout"

const App = () => {


  const [settingsVisibility, setSettingsVisibility] = useState(false)
  const [currentMode, setCurrentMode] = useState(localStorage.getItem('currentMode') ? JSON.parse(localStorage.getItem('currentMode')) : "pomodoro")
  const [timeValue, setTimeValue] = useState(localStorage.getItem('timeValue') ? JSON.parse(localStorage.getItem('timeValue')) : { pomodoro: 25, shortBreak: 5, longBreak: 15 })
  const [currentFont, setCurrentFont] = useState(localStorage.getItem('currentFont') ? JSON.parse(localStorage.getItem('currentFont')) : ['Open Sans', 'sans-serif'])
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') ? JSON.parse(localStorage.getItem('primaryColor')) : "#F77373")

  const layoutRef=useRef()
  

  useEffect(() => {
    document.documentElement.style.setProperty("--font-family", `${currentFont[0]}, ${currentFont[1]}`)
    localStorage.setItem("currentFont", JSON.stringify(currentFont))
  }, [currentFont])
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor)
    localStorage.setItem("primaryColor", JSON.stringify(primaryColor))
  }, [primaryColor])

  useEffect(() => {
    localStorage.setItem("timeValue", JSON.stringify(timeValue))
  }, [timeValue])

  useEffect(() => {
    localStorage.setItem("currentMode", JSON.stringify(currentMode))
  }, [currentMode])

  const convertToSeconds = useCallback(
    (value) => {
      value = Number(value)
      let minutes = parseInt(value / 60)
      let seconds = parseInt(value % 60)
      seconds = seconds >= 10 ? `${seconds}` : `0${seconds}`
      let result = `${minutes}:${seconds}`
      return result
    },
    [],
  );

  return (
    <div className='container'>
      <Header />
      <Main
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        timeValue={timeValue}
        convertToSeconds={convertToSeconds}
      />
      <Footer
        setSettingsVisibility={setSettingsVisibility}
      />
      <Settings
        settingsVisibility={settingsVisibility}
        setSettingsVisibility={setSettingsVisibility}
        timeValue={timeValue}
        setTimeValue={setTimeValue}
        currentFont={currentFont}
        setCurrentFont={setCurrentFont}
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        layoutRef={layoutRef}
      />
      {settingsVisibility && <FilterLayout layoutRef={layoutRef} />}
    </div>

  )
}

export default App