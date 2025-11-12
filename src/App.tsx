import './App.css'

import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection'
import { Footer } from './components/Footer/Footer'

import '../src/assets/css/theme.css'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <ArticlesSection />
      <Footer />
    </>
  )
}

export default App
