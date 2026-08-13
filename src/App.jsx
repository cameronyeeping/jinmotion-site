import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import DebugThemeToggle from './components/DebugThemeToggle'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <BrowserRouter>
      <Header onContactClick={openContact} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onContactClick={openContact} />} />
          <Route path="/about" element={<AboutPage onContactClick={openContact} />} />
          <Route path="/projects" element={<ProjectsPage onContactClick={openContact} />} />
          <Route path="/projects/:id" element={<ProjectDetailPage onContactClick={openContact} />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <DebugThemeToggle />
    </BrowserRouter>
  )
}

export default App
