// React Router Dom Import
import { Link, useNavigate } from 'react-router-dom';

// Config Import
import { baseUrl } from '../../config/env';

// Library Import
import { motion } from '../../imports/Library';

// Image Import
import { noImage } from '../../imports/Images';

// Icons Import
import { CloseIcon } from '../../imports/Icons';
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';

// Default Function
export default function ProjectDetail({ project }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity:1, x:0 }}
      className='relative w-screen overflow-x-hidden p-4 bg-gradient-dark'
    >
      <section className='w-full h-screen overflow-y-scroll no-scrollbar'>
        <div className='w-full h-[calc(100vh-50vh)] overflow-y-scroll no-scrollbar rounded-md shadow-md mb-4'>
          { project.image ? (
            <img src={`${baseUrl}${project.image}`} alt={project.title} className='' />
          ):(
            <img src={noImage} alt="error" />
          )}
        </div>

        <div className='flex flex-col'>
          <span className='flex items-center justify-between w-full'>
            <span className='text-secondary'>
              ----------------------------------
            </span>
            <button
              onClick={()=> navigate(-1)}
              className='rounded-md p-2 text-2xl bg-error text-white'
            >
              <CloseIcon />
            </button>
          </span>
          <h3 className='pt-4 text-lg capitalize text-primary'>{ project.title }</h3>
          <p className='py-4'>{ project.text }</p>
          <ul>
            { project.links.map(link=>(
              <li key={link.id}> 
                <span className='capitalize text-white'>{ link.name }: </span>
                <Link to={link.url}>{ link.url }</Link>
              </li>
            )) }
          </ul>
          <div className='py-6'>
            <h3 className='capitalize text-primary text-lg'>Category</h3>
            <ul className='flex flex-wrap mt-2'>
              { project.categories.length === 0 ? (
                <DataLayout2Error errMessage={'no categories'} />
              ): (
                <>
                  { project.categories.map(category=>(
                    <li key={category.id} className='mr-2'>
                      <DataLayout2
                        text={category.name}
                        showImage={false}
                      />
                    </li>
                  )) }
                </>
              )}
            </ul>
          </div>
          <div>
            <h3 className='capitalize text-primary text-lg'>related blogs</h3>
            <ul className='flex overflow-x-scroll no-scrollbar mt-2'>
              { project.related_blogs.length === 0 ? (
                <DataLayout2Error errMessage={'no related blogs'} />
              ): (
                <>
                  { project.related_blogs.map(blog=>(
                    <li key={blog.id}>
                      <DataLayout2
                        title={blog.title}
                        image={blog.image}
                      />
                    </li>
                  )) }
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
