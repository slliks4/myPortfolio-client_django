// Icon Imports
import { ScrollTopIcon } from '../imports/Icons';

// Default Function
export default function ScrollTopBtn() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }
  return (
    <button
      className='absolute right-0 bottom-0 m-4 text-4xl text-secondary opacity-80'
      onClick={()=>handleClick()}
    >
      <ScrollTopIcon />
    </button>
  )
}
