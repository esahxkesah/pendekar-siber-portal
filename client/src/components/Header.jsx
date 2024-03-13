import React from 'react';
import { Button, Navbar, TextInput, NavbarToggle } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Dropdown, DropdownItem } from 'flowbite-react';

export default function Header() {
  const location = useLocation();
  const isLinkActive = (path) => location.pathname === path;

  return (
    <Navbar className='border-b-2 bg-yellow-200 padding:0'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ width: '50px', height: 'auto' }} src='/src/assets/img/logo.png' alt='Logo' />
      </div>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='blue' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='blue' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button color='blue'>
            Sign In
          </Button>
        </Link>
      </div>

      <Link to='/' className={`text-black font-semibold ${isLinkActive('/') ? 'text-blue-500' : ''}`}>
        Home
      </Link>

      <Dropdown style={{ backgroundColor: '#FCE96A', color: 'black' }} className='border-b-2 bg-yellow-200' label='Explore' dismissOnClick={false}>
        <Link to='/cybersafetymodule'>
          <DropdownItem className={`text-blue-900 font-semibold ${isLinkActive('/cybersafetymodule') ? 'text-blue-500' : ''}`}>CyberSafety Module</DropdownItem>
        </Link>
        <Link to='/cybersecuritycareer'>
          <DropdownItem className={`text-blue-900 font-semibold ${isLinkActive('/cybersecuritycareer') ? 'text-blue-500' : ''}`}>CyberSecurity Career</DropdownItem>
        </Link>
        <Link to='/personalitytest'>
          <DropdownItem className={`text-blue-900 font-semibold ${isLinkActive('/personalitytest') ? 'text-blue-500' : ''}`}>Personality Test</DropdownItem>
        </Link>
        <Link to='/discussionforum'>
          <DropdownItem className={`text-blue-900 font-semibold ${isLinkActive('/discussionforum') ? 'text-blue-500' : ''}`}>Discussion Forum</DropdownItem>
        </Link>
      </Dropdown>

      <Link to='/aboutus' className={`text-black font-semibold ${isLinkActive('/aboutus') ? 'text-blue-500' : ''}`}>
        About Us
      </Link>
    </Navbar>
  );
}