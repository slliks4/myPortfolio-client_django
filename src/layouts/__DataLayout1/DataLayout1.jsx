// Config Import
import { baseUrl } from '../../config/env';

// Components Import
import LinkBtn from '../../components/LinkBtn';
import { Link } from 'react-router-dom';

// Default Function
export default function DataLayout1({ title, heading, text, image, path, isFetched=false, imgPath="" }) {
  return (
    <>
      { isFetched && image ? (
        <Link to={imgPath} className='w-full h-[calc(100vh-80vh)] overflow-hidden block rounded-md '>
          <img src={`${baseUrl}${ image }`} alt={title} className='object-cover object-top w-full h-full' />
        </Link>
      ):(
        <>
          { !isFetched && image ? (
            <img src={image} alt="title" className='object-cover object-center rounded-md w-full h-[calc(100vh-80vh)]' />
          ):
            (
              null
            )
          }
        </>
      )}
      <div className='pt-4 w-[calc(100%-10%)]'>
        { title && (
          <small> 
            <p className='text-lg text-primary font-semibold capitalize py-2'>{ title }</p>
          </small>
        )}
        { heading && <h3 className='text-md capitalize'>{ heading }</h3> }
        { text && <p className='text-md'>{ text }</p> } 
      </div>
      { path && <LinkBtn path={path} /> }
    </>
  )
}
