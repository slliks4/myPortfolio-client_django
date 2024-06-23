import { useOutletContext } from "react-router-dom"
import { noImage } from "../../imports/Images";
import { baseUrl } from "../../config/env";

// Providers Import
import BoxThemeProvider from "../../providers/BoxThemeProvider";
import SlideAnimationProvider from "../../providers/SlideAnimationProvider";

// Components Import
import Contact from "../../components/Contact";
import BuildSkills from "../../components/__about/BuildSkills";
import BuildServices from '../../components/__about/BuildServices';
import Vision from "../../components/__about/Vision";
import Mission from '../../components/__about/Mission';

// Default Function
export default function AboutDefaultPage() {
  const { profile } = useOutletContext();

  return (
    <div className='flex flex-col mt-4'>
      <BoxThemeProvider children={
        <div className="w-full h-fit">
          <div className="flex flex-col">
            <h3 className="mb-6 text-white text-xl capitalize">running with the vision</h3>
            <div>
              <SlideAnimationProvider>
                <div className="rounded-md overflow-hidden w-full h-[calc(100vh-50vh)]">
                  { profile.data.about_pic ?(
                    <img src={`${baseUrl}${profile.data.about_pic}`} alt="about_pic" className="w-full h-full object-cover object-top" />
                  ):(
                    <img src={noImage} alt="404" className="w-full h-full object-cover object-top" />
                  )}
                </div>
              </SlideAnimationProvider>
              <div className="flex flex-col">
                <Vision vision={profile.data.vision} />
                <Mission mission={profile.data.mission} />
              </div>
            </div>
          </div>
          {/* Skills */}
          <SlideAnimationProvider className="mt-6">
            <BuildSkills skills={profile.data.skills} />
          </SlideAnimationProvider>
        </div>
      } className={'w-full flex flex-col'} />
      {/* Services */}
      <BoxThemeProvider children={
        <BuildServices services={profile.data.services} />
      } className={'mt-4'} />
      {/* Contact */}
      <Contact />
    </div>
  )
}
