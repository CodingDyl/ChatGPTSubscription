import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mantine/core';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import LoginModal from './modal/LoginModal';
import LogoutDialog from './dialogs/LogoutDialog';
import { logout } from '../../client';
import AccountMenu from '../components/menu/AccountMenu';
import { Menu, Group, Text } from '@mantine/core';
import {
  IconLogout,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronRight,
  IconDots,
} from '@tabler/icons-react';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogout, setOpenLogout] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuButtonRef = useRef();

  const handleLogin = () => {
    setOpen(!open);
    setAnchorEl(null);

    //set login
    
  };

  const handleMenuOpen = (event) => {
    // setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleLogoutDialog = () => {
    setOpenLogout(true);
  };

  const handleLogoutDialogClose = () => {
    setOpenLogout(false);
  };

  const handleLogout = () => {
    logout();
    setOpenLogout(false);
    handleMenuClose();
  }

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
              <button onClick={loggedIn ? handleMenuOpen : handleLogin} ref={menuButtonRef}>
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
    <Group position="center">
      <Menu
        withArrow
        width={300}
        position={'bottom'}
        opened={openMenu}
        onClose={() => setOpenMenu(false)}
        control={elementRef => {
          if (elementRef) {
            elementRef.current = menuButtonRef.current;
          }
        }}
      >
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight size="0.9rem" stroke={1.5} />}>
            <Group>
              <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              />

              <div>
                <Text weight={500}>Dylan Petzer</Text>
                <Text size="xs" color="dimmed">
                  2610dylan@gmail.com
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>Account settings</Menu.Item>
          <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
            Change account
          </Menu.Item>
          <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
            Pause subscription
          </Menu.Item>
          <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
      <LogoutDialog open={openLogout} handleClose={handleLogoutDialogClose} logout={handleLogout} setLogged={setLoggedIn}/>
      
    </>
  )
}

export default Navbar