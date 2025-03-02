import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/data'
import './Footer.scss'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__inner">
                <div className="footer__columns">
                        {FOOTER_LINKS.map((col) => (
                        <FooterColumn 
                            key={col.title} 
                            title={col.title}
                        >
                            <ul className='footer__list'>
                                {col.links.map((link) => (
                                    <Link className='footer__link' href='/' key={link}>{link}</Link>
                                ))}
                            </ul>  
                            </FooterColumn>
                        ))}
                    
                    <div className="footer__column">
                        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                            {FOOTER_CONTACT_INFO.links.map((link) =>  (
                                <Link href='/' key={link.label}>
                                  <div className='footer__column-info'>
                                    <p className='footer__label'>{link.label}:</p>
                                    <p className='footer__value'>{link.value}</p>
                                  </div>
                                </Link>
                            ))}
                        </FooterColumn>
                    </div>
                    <div className="footer__column">
                        <FooterColumn title={SOCIALS.title}>
                            <ul className='footer__social-list'>
                                {SOCIALS.links.map((link) => (
                                    <Link href='/' key={link}>
                                        <Image 
                                            src={link}
                                            alt='logo'
                                            height={22}
                                            width={22}
                                            className='footer__social-image'
                                        />
                                    </Link>
                                ))}
                            </ul>
                        </FooterColumn>
                    </div>
                </div>
               <p className='footer__passport'>
                <span>2024 Passport</span>
                <span>All rights reserved</span>
               </p>
            </div>
        </div>
    </footer>
  )
}


type FooterColumnProps = {
    title: string
    children: React.ReactNode
}

 const FooterColumn = ({title, children}: FooterColumnProps) => {
   return(
       <div className='footer__block'>
           <h4 className='footer__column-title'>{title}</h4>
           {children}
       </div>

   )
 }

export default Footer