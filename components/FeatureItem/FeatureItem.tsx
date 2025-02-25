import './FeatureItem.scss'
import Link from 'next/link';
import Image from 'next/image';

type FeatureData = {
    title: string;
    url: string;
    des: string;
  }
  
  const FeatureItem = ({title, url, des}: FeatureData ) => {
    return(
      <div className='feature__item'>
        <Link href='/' className='feature__item-link'>
            <Image 
              src={url} 
              height={500} 
              width={480} 
              alt='img'
              className='feature__item-image'
            />
          <h4 className='feature__item-title'>{title}</h4>
          <p className='feature__item-des'>{des}</p>
        </Link>
      </div>
    )
  }

export default FeatureItem