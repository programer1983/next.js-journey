import Link from 'next/link';
import './PacageItem.scss'
import Image from 'next/image';
import { RiMapPinLine, RiTimeLine } from 'react-icons/ri';
import { TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';

type PacageItem = {
    title: string;
    location: string;
    price: string;
    url: string;
    des: string;
    duration: string;
}

const PacageItem = ({title, location, price, url, des, duration}: PacageItem) => {
  return (
    <div className='pacage__item'>
       <Link href='/' className='pacage__item-link'>
          <Image 
            src={url} 
            width={340} 
            height={220} 
            alt='img'
            className='pacage__item-image'
          />
          <div className='pacage__item-price'>${price}</div>
            <div className='pacage__item-content'>
                <h3 className='pacage__item-title'>{title}</h3>
                <div className='pacage__item-address'>
                    <RiMapPinLine className='pacage__item-icon'/>
                    <span className='pacage__item-location'>{location}</span>
                </div>
                <p className="pacage__item-text">{des}</p>
                <div className='pacage__item-details'>
                    <div className='pacage__item-info'>
                        <div className='pacage__item-riting'>
                            <TbStarFilled className='pacage__item-star'/>
                            <TbStarFilled className='pacage__item-star'/>
                            <TbStarFilled className='pacage__item-star'/>
                            <TbStarHalfFilled className='pacage__item-star'/>
                        </div>
                            <span className='pacage__item-number'>{222}</span>
                    </div>
                    <div className='pacage__item-time'>
                        <RiTimeLine className='pacage__item-timeline'/>
                        <span className='pacage__item-duration'>{duration}</span>
                    </div>
                </div>    
            </div>
       </Link>
    </div>
  )
}

export default PacageItem