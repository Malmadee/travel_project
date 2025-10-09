import React, { useState } from 'react';
import "./Navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  
  // function to toggle navBar
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // function to remove navBar
  const removeNavbar = () => {
    setActive('navBar');
  };

  
};

export default Navbar;