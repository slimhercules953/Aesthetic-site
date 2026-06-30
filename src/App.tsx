import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Commands from './components/Commands';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Commands />
      </main>
      <Footer />
    </div>
  );
}

export default App;
