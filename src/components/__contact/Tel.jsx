// React Router Dom Import
import { Link } from 'react-router-dom';

// Icons Import
import { PhoneIcon } from '../../imports/Icons';

// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Default Function
export default function Tel({ tel }) {
  return (
    <SlideAnimationProvider>
        <div>
            <PhoneIcon />
        </div>
        <div>
            <small>
                <p> tel </p>
            </small>
            <div>
                { tel.map(data=>(
                <Link to={''} key={data.id}>{ data.tel }</Link> 
                )) }
            </div>
        </div>
    </SlideAnimationProvider>
  )
}
