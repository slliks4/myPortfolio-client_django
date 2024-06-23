// React Router Dom Import
import { useOutletContext } from 'react-router-dom';

// Components Import
import Education from '../../components/__about/Education';
import Experience from '../../components/__about/Experience';
import Certificates from '../../components/__about/Certificates';
import Contact from '../../components/Contact';

// Default Function
export default function CredentialPage() {
  const { profile } = useOutletContext();
  return (
    <div className='flex flex-col mt-4'>
      <Education educations={profile.data.education} />
      <Experience experiences={profile.data.experience} />
      <Certificates files={profile.data.files} />
      <Contact />
    </div>
  )
}