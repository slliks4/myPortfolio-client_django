// React Router dom Import
import { Link } from 'react-router-dom';

// Icons Import
import { EnvelopeIcon } from '../../imports/Icons';

// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Default Function
export default function Email({ email }) {
  return (
    <SlideAnimationProvider>
        <div>
            <EnvelopeIcon />
        </div>
        <div className=' w-[calc(100%-25%)]'>
            <small>
                <p> mail us</p>
            </small>
            <div>
                { email.map(data=>(
                   <Link to={''} key={data.id}>{ data.email }</Link> 
                )) }
            </div>
        </div>
    </SlideAnimationProvider>
  )
}
