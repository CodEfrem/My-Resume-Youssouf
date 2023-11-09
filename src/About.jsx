import AboutSection from './components/AboutSection'
import Facts from './components/Facts'
import Skills from './components/Skills'
import Nav from "./components/Nav";

function About() {

  return (
    <>
      <main className="flex-shrink-0">
        <AboutSection />
        <Skills />
        <Facts />
      </main>
    </>
  )
}

export default App