import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { HeaderMenu } from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { usePortfolio } from "./hooks/usePortfolio";


function App() {
  
  const { projects } = usePortfolio()

  return (
    <>
      <HeaderMenu/>
      <About/>
      <Skills />
      <Projects
        projects={projects}
      />
      <Experience/>
      <Footer/>
    </>
  );
}

export default App;
