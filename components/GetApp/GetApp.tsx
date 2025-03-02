import Image from 'next/image'
import './GetApp.scss'

const GetApp = () => {
  return (
    <section className='getapp'>
        <div className="container">
            <div className="getapp__inner">
                <div className="getapp__content">
                    <h2 className="getapp__content-title">Go our app now!</h2>
                    <h4 className="getapp__content-subtitle">Avialable for 10% and android</h4>
                    <p className="getapp__content-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta laboriosam quaerat saepe quasi consectetur veniam perspiciatis sint laudantium ipsam.
                    </p>
                    <div className="getapp__content-buttons">
                        <button className="getapp__content-button getapp__button-apple" type='button'>
                            <img src="/apple.svg" alt="image" />
                            <span>App Store</span>
                        </button>
                        <button className="getapp__content-button getapp__button-android" type='button'>
                            <img src="/android.svg" alt="image" />
                            <span>Play Store</span>
                        </button>
                    </div>
                </div>
                <div className="getapp__image">
                  <Image 
                    src='/phones.png' 
                    alt='image' 
                    width={550} 
                    height={870}
                    className='getapp__img'
                  />
                </div>
            </div>
        </div>

    </section>
  )
}

export default GetApp