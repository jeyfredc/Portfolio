import About from "./components/About";
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
      <Footer />
    </>
  );
}

export default App;
