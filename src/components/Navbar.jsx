import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mantine/core';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import LoginModal from './modal/LoginModal';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogin = () => {
    setOpen(!open);
    setAnchorEl(null);

    //set login
    
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary border-b-2 border-secondary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            WhatsApp-GPT &nbsp; 
            <span className="sm:block hidden">| GPT on the Go</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
          <li>
              <button onClick={loggedIn ? handleMenuOpen : handleLogin}>
                {loggedIn ? <Avatar radius="xl" color='green'/> : <a href="#" className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">Login</a> }
              </button>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl b-4 b-secondary`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title); }}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
              <button onClick={handleLogin} className="text-secondary">
                {loggedIn ? <a>Account</a> : <a>Login</a>}
              </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <LoginModal opened={open} close={() => setOpen(false)} logged={setLoggedIn}/>
    <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Subscription</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Navbar