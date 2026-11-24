import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import '../Styles/style.css'
import Body from '../Components/Body.jsx'

const savedTheme = localStorage.getItem("portfolio-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.classList.toggle(
  "dark",
  savedTheme === "dark" || (savedTheme !== "light" && preferredDark)
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Body />
  </BrowserRouter>
  </StrictMode>
);

// Build marker: 1795507008
