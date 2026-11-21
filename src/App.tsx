import './App.css'

import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'
import { ProjectsSection } from './components/Projects/ProjectsSection/ProjectsSection'
import { ArticlesSection } from './components/Articles/ArticlesSection/ArticlesSection'
import { ArticlesPage } from './components/Articles/ArticlesPage/ArticlesPage'
import { ArticleDetailsPage } from './components/Articles/ArticleDetailsPage/ArticleDetailsPage'
import { Footer } from './components/Footer/Footer'

import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import { CurriculumVittae } from './components/CurriculumVitae/CurriculumVitae'
import { ProjectsPage } from './components/Projects/ProjectsPage/ProjectsPage'
import { ProjectDetailsPage } from './components/Projects/ProjectDetailsPage/ProjectDetailsPage'
import { useEffect } from 'react'

import '../src/assets/css/theme.css'

// Ao trocar de rota a página começa no topo.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProjectsSection />
            <ArticlesSection />
          </>
        } />
        <Route path="/articles/:articleName" element={<ArticleDetailsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/projects/:projectName" element={<ProjectDetailsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CurriculumVittae />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
