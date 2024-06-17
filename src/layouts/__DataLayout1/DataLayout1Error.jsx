// Images Import
import { noImage } from '../../imports/Images';

// Default Funtion
export default function DataLayout1Error({ message }) {
  return (
    <>
      <img src={noImage} alt="error" className='opacity-70' />
      <div>
        <small> 
          <p className='text-2xl text-error font-semibold capitalize py-2'>{ message }</p>
        </small>
      </div>
    </>
  )
}
