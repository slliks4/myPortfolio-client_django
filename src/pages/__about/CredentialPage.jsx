import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BoxThemeProvider from '../../providers/BoxThemeProvider';
import Contact from '../../components/Contact';
import DataLayout2 from '../../layouts/__DataLayout2/DataLayout2';
import DataLayout2Error from '../../layouts/__DataLayout2/DataLayout2Error';
import SlideAnimationProvider from '../../providers/SlideAnimationProvider';

export default function CredentialPage() {
  const { profile } = useOutletContext();
  return (
    <div>
      <BoxThemeProvider children={
        <div>
          <h1 className="text-2xl text-white capitalize">education</h1>
          <p className="mb-6 mt-3 text-md"></p>
          <div>
            { profile.data.education.length === 0 ? (
              <DataLayout2Error errMessage={'No education found in list'} /> 
            ):(
              <ul className='w-full h-fit flex flex-col'>
                { profile.data.education.map(education=>(
                  <SlideAnimationProvider key={education.id}>
                    <li className=' block w-full rounded-md h-fit my-2 glass shadow-md'>
                      <DataLayout2 date={education.date_period} title={education.degree} heading={education.school_name} path={education.school_link} text={education.text} />
                    </li>
                  </SlideAnimationProvider>
                ))}
              </ul>
            )}
          </div>
        </div>
      } />
      <BoxThemeProvider children={
        <div>
          <h3>Experience</h3>
          <h2> Crafting stories through design and imagination </h2>
          <div>
            { profile.data.experience.length === 0 ? (
              <DataLayout2Error errMessage={'No experience found in list'} /> 
            ):(
              <ul className='flex flex-col w-full h-fit'>        
                { profile.data.experience.map(experience=>(
                  <SlideAnimationProvider key={experience.id}>
                    <li className=' block w-full rounded-md h-fit my-2 glass shadow-md'>
                      <DataLayout2 date={experience.date_period} title={experience.title} heading={experience.company_name} path={experience.company_link} text={experience.text} />
                    </li>
                  </SlideAnimationProvider>
                )) }
              </ul>
            )}
          </div>
        </div>
      } className={'my-4'} />
      <BoxThemeProvider children={
        <div>
          <h3>Certificates and files</h3>
          <h2> certificates gallery </h2>
          <div>
            { profile.data.files.length === 0 && <DataLayout2Error errMessage={'No files found in list'} /> }
            { profile.data.files.map(file=>(
              <DataLayout2 key={file.id} title={file.title} path={file.file} image={file.image} />
            )) }
          </div>
        </div>
      } />
      <Contact />
    </div>
  )
}