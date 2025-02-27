import { PACAGES } from '@/data'
import PacageItem from '../PacageItem/PacageItem'
import './Pacages.scss'

const Pacages = () => {
  return (
    <section className='pacages' id='listing'>
        <div className="container">
            <div className="pacages__inner">
                <div className="pacages__content">
                    <h4 className='pacages__subtitle'>Take a look at these offers</h4>
                    <h3 className='pacages__title'>we provide top destination</h3>
                    <p className='pacages__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis aliquid cum at quaerat hic eligendi exercitationem harum error alias.</p>
                </div>
                <div className='pacages__items'>
                    {PACAGES.map((elem) => (
                        <PacageItem 
                           key={elem.url}
                           title={elem.title}
                           location={elem.location}
                           price={elem.price}
                           url={elem.url}
                           des={elem.des}
                           duration={elem.duration}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pacages