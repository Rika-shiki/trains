import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import { ScrollToTop } from './components/ScrollToTop.tsx';
// import { useLocation } from "react-router-dom";
import './index.css';
// import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  // <App />
  // <ScrollToTop />

  <StrictMode>
    <App />
  </StrictMode>



  // <BrowserRouter>
  //     <App />
  // </BrowserRouter>
);
