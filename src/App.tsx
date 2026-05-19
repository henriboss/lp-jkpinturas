import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SectionBullets from './components/SectionBullets';
import ProblemSolution from './components/ProblemSolution';
import ComparisonTable from './components/ComparisonTable';
import Features from './components/Features';
import TechnicalSpecs from './components/TechnicalSpecs';
import IdealCases from './components/IdealCases';
import CalculatorCTA from './components/CalculatorCTA';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useGTMEvent } from './hooks/useGTMEvent';
import { useScrollDepth } from './hooks/useScrollDepth';

function App() {
  useScrollReveal();
  const [showSplash, setShowSplash] = useState(true);
  const { trackEvent } = useGTMEvent();

  const handleLoaded = () => {
    setShowSplash(false);
  };

  useScrollDepth(trackEvent);

  return (
    <>
      {showSplash && <SplashScreen onLoaded={handleLoaded} />}
      <div className="min-h-screen">
        <NavBar />
        <main>
          <Hero />
          <SectionBullets />
          <ProblemSolution />
          <ComparisonTable />
          <Features />
          <TechnicalSpecs />
          <IdealCases />
          <CalculatorCTA />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
