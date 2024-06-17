// Images Import
import { noImage } from '../../imports/Images';

// Default Funtion
export default function DataLayout1Error({ message }) {
  return (
    <>
      <img src={noImage} alt="error" className='opacity-70 object-cover object-center rounded-md w-full h-[calc(100vh-80vh)]'  />
      <div className='pt-4 w-[calc(100%-10%)]'>
        <small> 
          <p className='text-2xl text-error font-semibold capitalize py-2'>{ message }</p>
        </small>
      </div>
    </>
  )
} 
