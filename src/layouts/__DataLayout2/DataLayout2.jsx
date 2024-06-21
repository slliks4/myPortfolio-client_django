// React Router Dom Import
import { Link } from 'react-router-dom';

// Config Import
import { baseUrl } from '../../config/env';

// Images Import
import { noImage } from '../../imports/Images';

// Default Function
export default function DataLayout2({ title, heading, date, text, path ,image, showImage }) {
  return (
    <>
        { ((showImage && image) || (image)) ? (
            <img src={`${baseUrl}${ image }`} alt={title} className='w-full h-[calc(100vh-80vh)] rounded-tl-md rounded-tr-md object-cover object-top' />
        ):(
            <>
                { (showImage && !image ) ? (
                    <img src={noImage} alt={title} className='w-full h-[calc(100vh-80vh)] rounded-tl-md rounded-tr-md object-cover object-top' />
                ):(
                    null
                )}
            </>
        )}
        <div className='py-4 px-3'>
            { heading && <h3 className='text-primary text-md capitalize'>{ path ? <Link to={path}>{ heading }</Link>: <>{ heading }</>}</h3> }
            { title && <h2 className='capitalize text-lg text-white'>{ title }</h2> }
            { date && <h4 className='text-primary text-sm uppercase py-2'>{ date }</h4> }
            { text && <p className='leading-6'>{ text }</p> }
        </div>
    </>
  )
}
