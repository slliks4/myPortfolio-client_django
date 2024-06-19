import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BoxThemeProvider from '../../providers/BoxThemeProvider';
import CredentialDataLayout from '../../layouts/__about/CredentialDataLayout';
import CredentialDataLayoutError from '../../layouts/__about/CredentialDataLayoutError';
import Contact from '../../components/Contact';

export default function CredentialPage() {
  const { profile } = useOutletContext();
  return (
    <div>
      <BoxThemeProvider children={
        <div>
          <h3>Education</h3>
          <h2> Crafting stories through design and imagination </h2>
          <div>
            { profile.data.education.length === 0 ? (
              <CredentialDataLayoutError errMessage={'No education found in list'} /> 
            ):(
              <>
                { profile.data.education.map(education=>(
                  <CredentialDataLayout key={education.id} date={education.date_period} title={education.degree} heading={education.school_name} path={education.school_link} text={education.text} />
                ))}
              </>
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
              <CredentialDataLayoutError errMessage={'No experience found in list'} /> 
            ):(
              <>        
                { profile.data.experience.map(experience=>(
                  <CredentialDataLayout key={experience.id} date={experience.date_period} title={experience.title} heading={experience.company_name} path={experience.company_link} text={experience.text} />
                )) }
              </>
            )}
          </div>
        </div>
      } className={'my-4'} />
      <BoxThemeProvider children={
        <div>
          <h3>Certificates and files</h3>
          <h2> certificates gallery </h2>
          <div>
            { profile.data.files.length === 0 && <CredentialDataLayoutError errMessage={'No files found in list'} /> }
            { profile.data.files.map(file=>(
              <CredentialDataLayout key={file.id} title={file.title} path={file.file} image={file.image} />
            )) }
          </div>
        </div>
      } />
      <Contact />
    </div>
  )
}