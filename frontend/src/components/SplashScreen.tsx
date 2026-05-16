import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onLoaded: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoaded }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsExiting(true);
      setTimeout(() => {
        onLoaded();
      }, 300);
    };

    const timeoutId = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoaded();
      }, 300);
    }, 3000);

    if (document.readyState === 'complete') {
      clearTimeout(timeoutId);
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', handleLoad);
    };
  }, [onLoaded]);

  return (
    <div className={`splash-overlay ${isExiting ? 'exiting' : ''}`}>
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmzdEHb4mrxNAVFzlIVJodJGqR8lQroMtlfLonlSYoJAom_vJc4vZ9VYWuk8Hs9D2V2zNLiaNH2iPYFhdDY11pXyUPsOKP1tK6f39U3lNLc97IPShefFYEdak9YFX4y8VoF-KyXzJLYhy7g15rFMZZH92wCaUm_veEgrqenYM4TI4PjEf5jDC6FWrdfOzS9CJOvQos-rwCZVsPaXbxYLAtKGSh1P-ZdK0l-dE54fKMQKQE4L6SsLd8lfQDDOfP8RzrH31qp5Y3Dno"
        alt="JK Pinturas Logo" 
        className="pulse-logo h-16 md:h-20 filter brightness-0 invert"
      />
    </div>
  );
};

export default SplashScreen;