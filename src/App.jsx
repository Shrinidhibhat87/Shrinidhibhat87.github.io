// ============================================================
// App.jsx — Root component
// ============================================================
// Assembles all page sections in order.
// Each section component is self-contained and receives data
// from the src/data/ files.
//
// To add a new section:
//   1. Create the component in src/components/
//   2. Import it here
//   3. Add <NewSection /> in the correct position below
// ============================================================

import Navbar       from './components/Navbar.jsx';
import Hero         from './components/Hero.jsx';
import About        from './components/About.jsx';
import Experience   from './components/Experience.jsx';
import Projects     from './components/Projects.jsx';
import Skills       from './components/Skills.jsx';
import Education    from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Articles     from './components/Articles.jsx';
import Contact      from './components/Contact.jsx';
import Footer       from './components/Footer.jsx';

export default function App() {
  return (
    // Dark background fills the whole page
    <div className="bg-bg min-h-screen text-text-primary">

      {/* Fixed navigation bar — always on top */}
      <Navbar />

      {/* Main page content — all sections stacked vertically */}
      <main>
        {/* Each section has an id that matches the NAV_LINKS in Navbar.jsx */}
        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="articles">
          <Articles />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
