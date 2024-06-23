// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Layouts Import
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';

// Default Function
export default function Education({ educations }) {
  return (
    <BoxThemeProvider
        children={
            <div className='credentials'>
                <h1>education</h1>
                <p>My formal education has provided me with a solid foundation in computer science and software development. The theoretical knowledge and practical skills I acquired during my academic journey have been instrumental in shaping my career as a Full Stack Developer.</p>
                
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
        } 
    />
  )
}
