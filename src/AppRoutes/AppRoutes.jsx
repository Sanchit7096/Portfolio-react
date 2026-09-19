import React from 'react'
import SkillNavigator from '../assets/Pages/SkillNavigator'
import GraphicXStudio from '../assets/Pages/GraphicXStudio'
import DKComputer from '../assets/Pages/DKComputer'
import AiChatBot from '../assets/Pages/AiChatBot'
import { Routes, Route } from 'react-router-dom'
import App from '../App'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project/Skillnavigator" element={<SkillNavigator />} />
            <Route path="/project/GraphicXStudio" element={<GraphicXStudio />} />
            <Route path="/project/DKComputer" element={<DKComputer />} />
            <Route path="/project/AiChatBot" element={<AiChatBot />} />
        </Routes>
    )
}

export default AppRoutes    