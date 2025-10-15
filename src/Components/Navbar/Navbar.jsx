import React, {useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'


const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar = ()=>{
    setActive('navBar')
  }

}

export default Navbar

