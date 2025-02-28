'use client';

import Slider from 'react-slick'
import './Testimonials.scss'
import { TESTIMONIAL } from '@/data'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa';
import Accordion from '../Accordion/Accordion';

const Testimonals = () => {

    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    }

  return (
    <section className='testimonials' id='testimonials'>
        <div className="container">
            <div className="testimonials__inner">
                <div className="testimonials__left">
                    <h4 className="testimonials__left-subtitle">heppy customer</h4>
                    <h3 className="testimonials__left-title">testimonials</h3>
                    <div className="testimonials__left-slider">
                        <Slider {...settings}>
                            {TESTIMONIAL.map((item) => (
                            <TestimonialItem
                                key={item.url}
                                desc={item.desc}
                                title={item.title}
                                profession={item.profession}
                                url={item.url}
                            />
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='testimonials__right'>
                  <Accordion />
                </div>
            </div>
        </div>
    </section>
  )
}

type TestimonialItem = {
    desc: string
    title: string
    profession: string
    url: string
}

const TestimonialItem = ({desc, title, profession, url}: TestimonialItem) => {
    return (
        <div className='testimonial__item'>
            <div>
              <Image 
                src={url} 
                alt={title} 
                height={77} 
                width={77}
                className='testimonial__item-image'
              />
              <div className='testimonial__item-details'>
                <div className='testimonial__item-title'>{title}</div>
                <div className='testimonial__item-scill'>{profession}</div>
              </div>
              <span className='testimonial__item-icon'><FaQuoteLeft/></span>
              <p className='testimonial__item-desc'>{desc}</p>
            </div>
        </div>
    )
}

export default Testimonals
