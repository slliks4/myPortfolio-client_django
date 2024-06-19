import { ServicesIcon2 } from "../../imports/Icons";
import SlideAnimationProvider from "../../providers/SlideAnimationProvider";

export default function BuildServices({ services }) {
  return (
    <div className='w-full h-fit flex flex-col'>
      { services.map(service=>(
        <SlideAnimationProvider key={service.id}>
          <div key={service.id}>
            <div className="abstract">
              <ServicesIcon2 />
            </div>
            <div className="text">
              <h3>{ service.title }</h3>
              <p>{ service.text }</p>
            </div>
          </div>
        </SlideAnimationProvider>
      ))}
    </div>
  )
}
