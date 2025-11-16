import './App.css'

import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection'
import { Footer } from './components/Footer/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CurriculumVittae } from './components/CurriculumVittae/CurriculumVittae'

import '../src/assets/css/theme.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProjectsSection />
            <ArticlesSection />
          </>
        } />
        <Route path="/cv" element={<CurriculumVittae />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
