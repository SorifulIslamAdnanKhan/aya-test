import { useEffect } from 'react';
import { useState } from 'react';
import { PiArrowUpLight } from "react-icons/pi";

const ScrollToTopButton = () => {

    const [showButton, setShowButton] = useState(false);

 // Show the button when the user scrolls down
 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    return (
        <>
        {showButton && (
          <button
            className="fixed bottom-6 right-4 p-3 bg-blue-600 text-white rounded-full shadow-md transition-all duration-300"
            onClick={scrollToTop}
          >
            <PiArrowUpLight className="w-5 h-5" />
          </button>
        )}
      </>
    );
};

export default ScrollToTopButton;