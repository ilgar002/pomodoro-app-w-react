import React from 'react'
import './Footer.scss'
import { AiTwotoneSetting } from 'react-icons/ai';

const Footer = ({ setSettingsVisibility }) => {
    return (
        <footer>
            <AiTwotoneSetting
                className='settings-icon'
                onClick={() => setSettingsVisibility(true)}
            />
        </footer>

    )
}

export default Footer