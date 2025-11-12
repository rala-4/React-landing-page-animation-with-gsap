import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <FirstVideo />
    </main>
  );
}

export default App;
