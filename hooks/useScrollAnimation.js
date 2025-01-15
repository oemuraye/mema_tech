import { useEffect } from 'react';

const useScrollAnimation = (
  className = 'js-scroll',
  scrolledClass = 'scrolled',
  onElementInView = null
) => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(`.${className}`);

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add(scrolledClass);
      if (onElementInView) {
        onElementInView(element);
      }
    };

    const hideScrollElement = (element) => {
      element.classList.remove(scrolledClass);
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Initial check to apply animations on load
    handleScrollAnimation();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, [className, scrolledClass, onElementInView]);
};

export default useScrollAnimation;
