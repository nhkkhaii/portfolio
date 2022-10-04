import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { useScrollPosition } from "./hooks";

function App() {
  const scrollPosition = useScrollPosition();
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (item.offsetTop - scrollPosition < 280) {
      item.classList.add("active");
    }
  });
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
