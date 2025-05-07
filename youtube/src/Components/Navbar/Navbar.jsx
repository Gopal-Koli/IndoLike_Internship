import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import profile from '../../assets/gopal.jpg'
const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
        <IoMdMenu className='menu-icon' />
            <img className='logo' src={logo} alt="" />
        </div>

        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
            <input type='text'  placeholder='search here...' />
            < IoSearch className='search'/>
            </div>
            <MdKeyboardVoice className='mic' />
    
        </div>

        <div className='create'>
        <IoAddOutline /> Create
        </div>

        <div className='nav-right flex-div'>
           
            <IoMdNotifications /> 
            
            <img src={profile}  className="myprofile" alt=" Profile" />

        </div>
      
    </nav>
  )
}

export default Navbar
