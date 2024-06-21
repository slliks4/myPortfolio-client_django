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
         <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum vel, iure quis consectetur doloremque, rerum eos maiores sed quam unde velit quae at fugiat quisquam, modi laborum recusandae eius? </p>
        
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