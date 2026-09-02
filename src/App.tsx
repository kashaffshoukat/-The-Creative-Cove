import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedStrip from "./components/FeaturedStrip";
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cove-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedStrip />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
