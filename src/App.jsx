import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lusia from "./sections/Lusia";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lusia />
    </main>
  );
}

export default App;
