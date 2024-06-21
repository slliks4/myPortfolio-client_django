// React Router Dom Import
import { useOutletContext } from 'react-router-dom';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import Education from '../../components/__about/Education';
import Experience from '../../components/__about/Experience';
import Certificates from '../../components/__about/Certificates';
import Contact from '../../components/Contact';

// Default Function
export default function CredentialPage() {
  const { profile } = useOutletContext();
  return (
    <div className='flex flex-col'>
      <BoxThemeProvider 
        className={'my-4'}
        children={ <Education educations={profile.data.education} /> } 
      />
      <BoxThemeProvider
        className={''}
        children={ <Experience experiences={profile.data.experience} /> }
      />
      <BoxThemeProvider
        className={'mt-4'}
        children={ <Certificates files={profile.data.files} /> }
      />
      <Contact />
    </div>
  )
}