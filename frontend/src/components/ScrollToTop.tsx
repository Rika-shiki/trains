// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";



// export const ScrollTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0,0);
//     }, [pathname]);

//     return null;
// };





// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({top:0, behavior: "smooth"});
  }, [pathname]);

  return null; // No UI needed
};

export default ScrollToTop;
