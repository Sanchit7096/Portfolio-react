import React from 'react'
import SkillNavigator from '../assets/Pages/SkillNavigator'
import FitLab from '../assets/Pages/FitLab'
import AiChatBot from '../assets/Pages/AiChatBot'
import { Routes, Route } from 'react-router-dom'
import App from '../App'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project/Skillnavigator" element={<SkillNavigator />} />
            <Route path="/project/FitLab" element={<FitLab />} />
            <Route path="/project/AiChatBot" element={<AiChatBot />} />
        </Routes>
    )
}

export default AppRoutes    