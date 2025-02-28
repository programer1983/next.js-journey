
import { useState } from 'react'
import './Accordion.scss'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import { ACCORDION } from '@/data'
import {Collapse} from 'react-collapse';

const Accordion = () => {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (index: number) => {
      if (open === index) {
        return setOpen(null)
      }
      setOpen(index)
  }

  return (
    <div className='accordion'>
        <h4 className='accordion__subtitle'>faq</h4>
        <h3 className='accordion__title'>Frequently aasked questions</h3>
        <div className='accordion__body'>
            {ACCORDION.map((item, index) => (
              <AccordionItem 
                key={index}
                open={index === open}
                toggle={() => toggle(index)}
                question={item.question}
                answer={item.answer}
              />
            ))}
        </div>
    </div>
  )
}

type AccordionItemProps = {
    open: boolean;
    toggle: () => void;
    question: string;
    answer: string;  
  
}


const AccordionItem = ({open, toggle, question, answer}: AccordionItemProps) => {
    return (
        <div className='accordion__item'>
            <div className='accordion__item-inner'>
                <div className={open ? 'accordion__item-active' : 'accordion__item-click'} onClick={toggle}>
                    {open ? <FaMinus className='accordion__item-icon'/> : <FaPlus className='accordion__item-icon'/>}
                    <h4 className='accordion__item-question'>{question}</h4>
                </div>
                <Collapse isOpened={open}>
                    <p className='accordion__item-answer'>{answer}</p>
                </Collapse>
            </div>
        </div>
    )
}

export default Accordion