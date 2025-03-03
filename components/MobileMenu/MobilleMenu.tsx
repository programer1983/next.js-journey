import React from 'react'
import './MobileMenu.scss'
import { links } from '@/data'
import {Link} from 'react-scroll'
import { IoClose} from 'react-icons/io5'

type Props = {
    menuOpened: boolean;
    toggleMenu: () => void;
}


const MobileMenu = ({menuOpened, toggleMenu}: Props) => {

  return (
    <nav className={menuOpened ? 'mobile' : 'mobile__none'}>
        {menuOpened ? <IoClose className='header__icon mobile__icon-menu' onClick={toggleMenu}/> : ''}
        <ul className='mobile__list'>
           {links.map((link) => {
            return (
              <li className='mobile__item' key={link.title}>
                 <Link 
                    key={link.title}
                    activeClass="active" 
                    to={link.path} 
                    spy={true} 
                    smooth={true} 
                    offset={link.offset} 
                    duration={500} 
                    className='mobile__link'
                  >
                   {link.title}
                 </Link>
              </li>
            )
           })}
        </ul> 
    </nav>
  )
}

export default MobileMenu