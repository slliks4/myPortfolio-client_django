// Default Function Import
export default function DataLayout2Error({ errMessage }) {
  return (
    <div className='w-full rounded-md h-fit my-2 glass shadow-md py-4 px-3'> 
      <span className='text-red-800 font-bold'>Oops !! </span>{ errMessage }
    </div>
  )
}
