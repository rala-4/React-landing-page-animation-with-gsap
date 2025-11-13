import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
}

export default App;
