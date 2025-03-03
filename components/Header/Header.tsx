'use client';

import React, {useEffect, useState} from 'react'
import "./Header.scss"
import Link from 'next/link'
import Nav from '../Nav/Nav'
import MobileMenu from '../MobileMenu/MobilleMenu';
import Button from '../Button/Button';
import {IoMenu, IoClose } from "react-icons/io5";
import Image from 'next/image';

const Header = () => {
  const [active, setActive] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  
  const toggleMenu = () => setMenuOpened(!menuOpened)


  useEffect(() => {
      const handleScroll = () => {
        setActive(window.scrollY > 40)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  
  return (
    <header className={`${active ?  'header__active' : 'header'}`}>
    <div className="container">
      <div className='header__inner'>
        <Link href='/' className='header__logo'>
            <Image src="./logo.svg" alt="logo" height={90} width={133}/>
        </Link>
        <Nav />
        <div className="header__buttons">
          <div className="header__button">
            <Button 
               type="button"
               title='Login'
               icon='/user.svg'
            />
          </div>
          {!menuOpened ? 
            (<IoMenu className='header__icon' onClick={toggleMenu}/>) 
            : 
            (<IoClose className='header__icon' onClick={toggleMenu}/>) }
        </div>
      </div>
      <MobileMenu menuOpened={menuOpened}/>
    </div>     
    </header>
  )
}

export default Header