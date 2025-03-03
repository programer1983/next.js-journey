import React from 'react'

import './Hero.scss'
import { MdLocationPin } from 'react-icons/md'

function Hero() {
  return (
    <section className='hero' id='home'>
      <div className="hero__inner">
        <video className='hero__video' src="./video.mp4" muted autoPlay loop></video>
        <div className="hero__content" data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <h3 className='hero__content-subtitle'>TRAVEL TO ANY CORNER OF THE WORLD</h3>
          <h1 className='hero__content-title'>make your tour amazing with us</h1>
        </div>

        <div className="hero__form" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <h3 className='hero__form-title'>Search for Your Trip</h3>
          <div className="hero__form-inputs">
            
            <div className="hero__form-block">
              <label className='hero__form-label' htmlFor="city">Search your destination</label>
              <div className="hero__form-inputicon">
                <input className='hero__form-input' type="text" placeholder='Enter name here...'/>
                <MdLocationPin className='hero__form-icon'/>
              </div>
            </div>

            <div className="hero__form-block">
              <label className='hero__form-label' htmlFor="date">Select you date:</label>
              <div className="hero__form-inputicon">
                <input className='hero__form-input' type="date" placeholder='Enter name here...'/>
              </div>
            </div>


            <div className="hero__form-block">
              <div className="hero__form-blockprice">
                <label className='hero__form-label' htmlFor="price">Max price:</label>
                <h4 className='hero__form-price'>$4000</h4>
              </div>
              <div className="hero__form-rangeblock">
                <input className='hero__form-range' type="range" max={'5000'} min={1000}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero