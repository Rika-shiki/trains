import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const newScrollProgress = Math.min(currentScrollY / scrollHeight, 1);
        setScrollProgress(newScrollProgress);
      }
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initialize scroll progress
    updateScrollProgress();
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);
  
  return scrollProgress;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
};

export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options = { threshold: 0.1 }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(element);
    
    return () => observer.unobserve(element);
  }, [elementRef, options]);
  
  return isIntersecting;
};


// export const ScrollTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//       window.scrollTo(0,0);
//   }, [pathname]);

//   return null;
// };