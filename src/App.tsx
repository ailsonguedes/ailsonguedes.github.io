import './App.css'

import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <ArticlesSection />
    </>
  )
}

export default App
