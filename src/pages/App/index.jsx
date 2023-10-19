import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../../components/Navbar";

// import './styles.css';

const BG_COLOR_NAVBAR = "bg-sky-600";

const Index = () => {  
  return (    
    <BrowserRouter>
      <NavBar bg={BG_COLOR_NAVBAR} />
      <div className={`container ${BG_COLOR_SECONDARY}`}>
      </div>
    </BrowserRouter>
  )
}

export default Index
