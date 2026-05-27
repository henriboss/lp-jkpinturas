import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useGTMEvent } from './hooks/useGTMEvent';
import { useScrollDepth } from './hooks/useScrollDepth';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SurfaceCards from './components/SurfaceCards';
import PainBlock from './components/PainBlock';
import Applications from './components/Applications';
import ComparisonTable from './components/ComparisonTable';
import Mechanism from './components/Mechanism';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import Credibility from './components/Credibility';
import CalculatorCTA from './components/CalculatorCTA';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  useScrollReveal();
  const { trackEvent } = useGTMEvent();
  useScrollDepth(trackEvent);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || '';
            if (text.includes('Fale agora em nosso WhatsApp!')) {
              if (node.parentNode) {
                node.textContent = text.replace(
                  'Fale agora em nosso WhatsApp!',
                  '¡Hable ahora en nuestro WhatsApp!'
                );
                observer.disconnect();
              }
            }
          } else if (node instanceof HTMLElement) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            let textNode;
            while ((textNode = walker.nextNode())) {
              if (textNode.textContent?.includes('Fale agora em nosso WhatsApp!')) {
                textNode.textContent = textNode.textContent.replace(
                  'Fale agora em nosso WhatsApp!',
                  '¡Hable ahora en nuestro WhatsApp!'
                );
                observer.disconnect();
              }
            }
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <NavBar />
      <main>
        <Hero />
        <SurfaceCards />
        <PainBlock />
        <Applications />
        <ComparisonTable />
        <Mechanism />
        <Testimonials />
        <BeforeAfter />
        <Credibility />
        <CalculatorCTA />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
