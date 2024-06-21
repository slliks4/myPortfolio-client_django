// Default Function
export default function DataLayout1Loading() {
  return (
    <>
      {/* Image */}
      <div className="skeleton bg-gray-700 w-full h-[calc(100vh-80vh)]" />
      <div className='pt-4 w-[calc(100%-10%)]'>
        {/* Text */}
        <div className="skeleton h-4 w-28 my-4 bg-gray-700" />
        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
      </div>
    </>
  )
}
