// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Layouts Import
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';

// Default Function
export default function Certificates({ files }) {
  return (
    <div className='credentials'>
        <h1>Certificates</h1>
        <p> To stay updated with the latest advancements in technology, I have pursued various certifications. These credentials not only reflect my commitment to continuous learning but also my expertise in utilizing modern tools and frameworks to build robust applications. </p>
        
        <div className='flex flex-col w-full h-fit'>
            { files.length === 0 ? (
                <DataLayout2Error errMessage={'No certificate found in list'} /> 
            ):(
                <>        
                    { files.map(certificate=>(
                        <SlideAnimationProvider key={certificate.id} className='my-2'>
                            <DataLayout2
                                key={certificate.id} 
                                title={certificate.title} 
                                path={certificate.file} 
                                image={certificate.image} 
                            />
                        </SlideAnimationProvider>
                    ))}
                </>
            )}
        </div>
    </div>
  )
}
