// Default Function
export default function DataLayout2Loading({ image, text, heading, title }) {
  return (
    <>
        <li className='w-full rounded-md h-fit my-2 glass shadow-md overflow-hidden'>
            {/* Image */}
            { image && <div className="skeleton bg-gray-700 w-full h-[calc(100vh-80vh)] rounded-none" />  }
            <div className='py-4 px-3 w-[calc(100%-10%)]'>
            {/* Text */}
                { heading && <div className="skeleton h-4 w-28 my-4 bg-gray-700" /> }
                { title && <div className="skeleton h-4 w-full my-4 bg-gray-700" /> }
                { text && (
                    <>
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                    </>
                )}
            </div>
        </li>
        <li className='w-full rounded-md h-fit my-2 glass shadow-md overflow-hidden'>
            {/* Image */}
            { image && <div className="skeleton bg-gray-700 w-full h-[calc(100vh-80vh)] rounded-none" />  }
            <div className='py-4 px-3 w-[calc(100%-10%)]'>
            {/* Text */}
                { heading && <div className="skeleton h-4 w-28 my-4 bg-gray-700" /> }
                { title && <div className="skeleton h-4 w-full my-4 bg-gray-700" /> }
                { text && (
                    <>
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                    </>
                )}
            </div>
        </li>
        <li className='w-full rounded-md h-fit my-2 glass shadow-md overflow-hidden'>
            {/* Image */}
            { image && <div className="skeleton bg-gray-700 w-full h-[calc(100vh-80vh)] rounded-none" />  }
            <div className='py-4 px-3 w-[calc(100%-10%)]'>
            {/* Text */}
                { heading && <div className="skeleton h-4 w-28 my-4 bg-gray-700" /> }
                { title && <div className="skeleton h-4 w-full my-4 bg-gray-700" /> }
                { text && (
                    <>
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                        <div className="skeleton h-4 w-full my-4 bg-gray-700" />
                    </>
                )}
            </div>
        </li>
    </>
  )
}
