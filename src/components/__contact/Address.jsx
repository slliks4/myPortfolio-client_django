// Icons Import
import { MapIcon } from '../../imports/Icons';

// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Default Function
export default function Address({ address }) {
  return (
    <SlideAnimationProvider>
      <div>
        <MapIcon />
      </div>
      <div>
        <small>
            <p>location</p>
        </small>
        <p>{ address }</p>
      </div>
    </SlideAnimationProvider>
  )
}
