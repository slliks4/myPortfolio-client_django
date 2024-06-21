// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

// Layouts Import
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';

// Default Function
export default function Education({ educations }) {
  return (
    <div className='credentials'>
        <h1>education</h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum vel, iure quis consectetur doloremque, rerum eos maiores sed quam unde velit quae at fugiat quisquam, modi laborum recusandae eius? </p>
        
        <div className='flex flex-col w-full h-fit'>
            { educations.length === 0 ? (
                <DataLayout2Error errMessage={'No education found in list'} /> 
            ):(
                <>            
                    { educations.map(education=>(
                        <SlideAnimationProvider key={education.id} className='my-2'>
                            <DataLayout2
                                date={education.date_period} 
                                title={education.degree} 
                                heading={education.school_name} 
                                path={education.school_link} 
                                text={education.text} 
                            />
                        </SlideAnimationProvider>
                    ))}
                </>
            )}
        </div>
    </div>
  )
}
