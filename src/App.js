import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid">
      <Header />
      <div className="grid wide">
        <Nav />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
