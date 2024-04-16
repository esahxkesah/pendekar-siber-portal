import React from 'react';
import { Button, Navbar, TextInput, NavbarToggle, Avatar, DropdownHeader, DropdownDivider } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun} from 'react-icons/fa';
import { Dropdown, DropdownItem } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLinkActive = (path) => location.pathname === path;
  const { currentUser } = useSelector(state => state.user);
  const {theme} = useSelector((state)=> state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch(`/api/user/signout`,
      {method: 'POST',
    });
    const data = await res.json();
    if(!res.ok){
      console.log(data.message);
    }else {
      dispatch(signoutSuccess());
    }
   } catch (error){
      console.log(error.message);
    }
  };

  return (
    <Navbar className='border-b-2 bg-yellow-200 padding:0'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ width: '50px', height: 'auto' }} src='/src/assets/img/logo.png' alt='Logo' />
      </div>

      <div className='flex items-center gap-4 md:order-2'>
  <Link to='/' className={` font-semibold ${isLinkActive('/') ? 'text-blue-500' : ''}`}>
    Home
  </Link>
  <Dropdown  label='Explore' color={false} dismissOnClick={false}>
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
  <Link to='/aboutus' className={`font-semibold ${isLinkActive('/aboutus') ? 'text-blue-500' : ''}`}>
    About Us
  </Link>
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

      <div className='flex gap-2 md:order-3'>
        <Button className='w-12 h-10 hidden sm:inline' color='blue' pill
        onClick={()=> dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun/> : <FaMoon/>}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </Navbar>
  );
}