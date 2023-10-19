import { useState } from "react";

import Logo from "./Logo";
import MenuHamburger from "./MenuHamburger";
import ListadoNav from "./ListadoNav";

import './styles.css';


const Index = ({ bg  = "bg-teal-600" }) => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };
  
    const handleSelect = () => {
      setClicked(!clicked);
    };
  
    return (
      <nav className={`NavbarItems ${bg}`}>
        <Logo texto={"SACGes"} />
        <MenuHamburger clicked={clicked} handleClick={handleClick} />
        <ListadoNav clicked={clicked} handleSelect={handleSelect} />
      </nav>
    );
  };
  
  export default Index;