// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Layouts Import
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';

// Default Function
export default function Experience({ experiences }) {
  return (
    <div className='credentials'>
         <h1>experience</h1>
         <p> Over the years, I have amassed a wealth of experience working on diverse projects across various industries. My professional journey has honed my abilities in both front-end and back-end development, enabling me to deliver comprehensive and effective solutions. </p>
        
        <div className='flex flex-col w-full h-fit'>
            { experiences.length === 0 ? (
                <DataLayout2Error errMessage={'No education found in list'} /> 
            ):(
                <>        
                    { experiences.map(experience=>(
                        <SlideAnimationProvider key={experience.id} className='my-2'>
                            <DataLayout2 
                                date={experience.date_period} 
                                title={experience.title} 
                                heading={experience.company_name} 
                                path={experience.company_link} 
                                text={experience.text} 
                            />
                        </SlideAnimationProvider>
                    )) }
                </>
            )}
        </div>
    </div>
  )
}