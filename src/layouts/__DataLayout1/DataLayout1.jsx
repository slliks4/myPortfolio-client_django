// Config Import
import { baseUrl } from '../../config/env';

// Components Import
import LinkBtn from '../../components/LinkBtn';

// Images Import
import { noImage } from '../../imports/Images';

// Default Function
export default function DataLayout1({ title, heading, text, image, path, isFetched=false }) {
  return (
    <>
      { isFetched && image ? (
        <img src={`${baseUrl}${ image }`} alt={title} />
      ):(
        <>
          { !isFetched && image ? (
            <img src={image} alt="title" />
          ):
            (
              <img src={noImage} alt="error" className='opacity-70' />
            )
          }
        </>
      )}
      <div >
        { title && (
          <small> 
            <p className='text-lg text-primary font-semibold capitalize py-2'>{ title }</p>
          </small>
        )}
        { heading && <h3 className='text-md capitalize'>{ heading }</h3> }
        { text && <p className='text-md'>{ text }</p> } 
      </div>
      <LinkBtn path={path} />
    </>
  )
}
