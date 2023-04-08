import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, seToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p className='brand__name'>Gioconda</p>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Acasă</a></li>
        <li className='p__opensans'><a href='#about'>Despre Noi</a></li>
        <li className='p__opensans'><a href='#menu'>Meniu</a></li>
        <li className='p__opensans'><a href='#awards'>Premii</a></li>
        <li className='p__opensans'><a href='#contact'>Contacte</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
        <div></div>
      <a href="/" className='p__opensans'>Rezervare</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => seToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => seToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links' onClick={() => seToggleMenu(false)}>
              <li className='p__opensans'><a href='#home'>Acasă</a></li>
              <li className='p__opensans'><a href='#about'>Depre noi</a></li>
              <li className='p__opensans'><a href='#menu'>Meniu</a></li>
              <li className='p__opensans'><a href='#awards'>Premii</a></li>
              <li className='p__opensans'><a href='#contact'>Contacte</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
