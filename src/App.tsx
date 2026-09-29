import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { HeaderMenu } from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <HeaderMenu />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}

export default App;
