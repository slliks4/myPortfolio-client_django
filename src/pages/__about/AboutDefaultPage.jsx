import { useOutletContext } from "react-router-dom"
import { ambitionPic, noImage, purposePic } from "../../imports/Images";
import { baseUrl } from "../../config/env";

// Providers Import
import BoxThemeProvider from "../../providers/BoxThemeProvider";
import SlideAnimationProvider from "../../providers/SlideAnimationProvider";

// Components Import
import Contact from "../../components/Contact";
import BuildSkills from "../../components/__about/BuildSkills";
import BuildServices from '../../components/__about/BuildServices';

// Default Function
export default function AboutDefaultPage() {
  const { profile } = useOutletContext();

  return (
    <div className='flex flex-col'>
      <BoxThemeProvider children={
        <div className="w-full h-fit">
          <div>
            <h3>running with the vision</h3>
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
              <div>
                <SlideAnimationProvider>
                  <div>
                      <img src={purposePic} alt="" />
                      <div className="text">
                          <h2>{ profile.data.vision.title }</h2>
                          <p> { profile.data.vision.statement } </p>
                      </div>
                  </div>
                </SlideAnimationProvider>
                <SlideAnimationProvider>            
                  <div>
                      <img src={ambitionPic} alt="" />
                      <div className="text">
                          <h2>{ profile.data.mission.title }</h2>
                          <p> { profile.data.mission.statement } </p>
                      </div>
                  </div>
                </SlideAnimationProvider>
              </div>
            </div>
          </div>
          {/* Skills */}
          <SlideAnimationProvider>
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
