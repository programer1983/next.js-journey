import React from 'react'
import './Nav.scss'
import { links } from '@/data'
import {Link} from 'react-scroll'


const Nav = () => {

  return (
    <nav className='nav'>
        <ul className='nav__list'>
           {links.map((link) => {
            return (
              <li className='nav__item' key={link.title}>
                 <Link 
                    key={link.title}
                    activeClass="active" 
                    to={link.path} 
                    spy={true} 
                    smooth={true} 
                    offset={link.offset} 
                    duration={500} 
                    className='nav__link'
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

export default Nav