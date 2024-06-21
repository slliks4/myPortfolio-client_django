// Images Import
import { ambitionPic } from '../../imports/Images';

// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Default Function
export default function Mission({ mission }) {
  return (
    <SlideAnimationProvider>            
        <img src={ambitionPic} alt="ambition"  className='w-24 h-24' />
        <div>
            <h2 className='my-2 capitalize text-white text-lg'>{ mission.title }</h2>
            <p> { mission.statement } </p>
        </div>
    </SlideAnimationProvider>
  )
}
