// React Router Dom Import
import { Link } from 'react-router-dom';

// Layouts Import
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';

// Providers Import
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

export default function BuildProject({ data }) {
  return (
    <>
      { data.pages.map((page,index)=>(
          <div key={index} className='w-full h-full flex flex-col'>
          { page.data.map(project=>(          
              <SlideAnimationProvider key={project.id}>
                <Link  to={`/project/${project.id}`} className='block w-full rounded-md h-fit my-2 glass shadow-md'>
                  <DataLayout2 title={project.title} image={project.image} />
                </Link>
              </SlideAnimationProvider>
          ))}
          </div>
      )) }
    </>
  )
}
