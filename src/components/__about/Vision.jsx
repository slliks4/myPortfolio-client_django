// Images Import
import { purposePic } from '../../imports/Images';

// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

export default function Vision({ vision }) {
  return (
    <SlideAnimationProvider className='my-4'>
        <img src={purposePic} alt="purpose" className='w-24 h-24' />
        <div>
            <h2 className='my-2 capitalize text-white text-lg'>{ vision.title }</h2>
            <p> { vision.statement } </p>
        </div>
    </SlideAnimationProvider>
  )
}
