import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-[100]">
      <nav className="flex justify-center items-center px-gutter py-4 max-w-container-max mx-auto w-full">
        <div className="flex items-center">
          <img 
            alt="JK Pinturas Logo" 
            className="h-9 lg:h-11" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmzdEHb4mrxNAVFzlIVJodJGqR8lQroMtlfLonlSYoJAom_vJc4vZ9VYWuk8Hs9D2V2zNLiaNH2iPYFhdDY11pXyUPsOKP1tK6f39U3lNLc97IPShefFYEdak9YFX4y8VoF-KyXzJLYhy7g15rFMZZH92wCaUm_veEgrqenYM4TI4PjEf5jDC6FWrdfOzS9CJOvQos-rwCZVsPaXbxYLAtKGSh1P-ZdK0l-dE54fKMQKQE4L6SsLd8lfQDDOfP8RzrH31qp5Y3Dno" 
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
