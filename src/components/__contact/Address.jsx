// React Router Dom Import
import { Link } from 'react-router-dom';
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
        <Link>{ address }</Link>
      </div>
    </SlideAnimationProvider>
  )
}
