'use client';

import './Feature.scss'
import Slider from "react-slick";
import { FEATURE } from '@/data';
import FeatureItem from '../FeatureItem/FeatureItem';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

interface NextArrowProps {
  onClick?: () => void;
}

interface PrevArrowProps {
  onClick?: () => void;
}

const Feature = () => {

  // const NextArrow = (props: any) => {
  //      const {onClick} = props
  //      return (
  //       <div onClick={onClick} className='feature__button'>
  //         <RiArrowRightSLine className='feature__right-icon'/>
  //       </div>
  //      )
  // }

  const NextArrow = ({ onClick }: NextArrowProps) => {
    return (
      <div onClick={onClick} className='feature__button'>
        <RiArrowRightSLine className='feature__right-icon' />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: PrevArrowProps) => {
    return (
      <div onClick={onClick} className='feature__button'>
        <RiArrowLeftSLine className='feature__right-icon' />
      </div>
    );
  };


//   const PrevArrow = (props: any) => {
//     const {onClick} = props
//     return (
//      <div onClick={onClick} className='feature__button'>
//        <RiArrowLeftSLine className='feature__left-icon'/>
//      </div>
//     )
// }

  const settings = {
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className='feature' id='feature'>
        <div className="container">
            <div className="feature__inner">
              <div className="feature__content">
                <h4 className='feature__subtitle'>What we serve</h4>
                <h3 className='feature__title'>We Provide Top Destinations</h3>
                <p className="feature__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, aliquam. Repellendus ad soluta mollitia cupiditate repudiandae odit, quas sint facere voluptatem est numquam quidem ipsum quaerat vero hic repellat eaque.
                </p>
              </div>
              <div className="feature__slider">
                <Slider {...settings}>
                    {FEATURE.map((feature) => (
                      <FeatureItem 
                        key={feature.url} 
                        title={feature.title} 
                        url={feature.url} 
                        des={feature.des}
                      />
                    ))}
                  </Slider>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Feature
