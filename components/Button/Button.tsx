import Image from 'next/image';
import './Button.scss'

type Props = {
    type: 'button' | 'submit';
    icon?: string;
    title: string;
}

const Button = ({type, icon, title}: Props) => {
  return (
    <button className='button__header' type={type}>
        {icon && <Image src={icon} alt={title} width={22} height={22}/>}
        <label className='button__title'>{title}</label>
    </button>
  )
}

export default Button