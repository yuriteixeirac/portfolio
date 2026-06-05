import "./App.css";
import About from "./components/About";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projetos />
      <Skills />
    </>
  );
}

export default App;
