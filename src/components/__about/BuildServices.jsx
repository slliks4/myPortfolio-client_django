// import { ServicesIcon2 } from "../../imports/Icons";

// Providers Import
import SlideAnimationProvider from "../../providers/SlideAnimationProvider";

// Default Function
export default function BuildServices({ services }) {
  return (
    <div className='w-full h-fit'>
      <h1 className="text-white text-xl capitalize">services</h1>
      <p className="pb-6 pt-3">Bring Your Vision to Life with Precision and Passion</p>
      <div className="flex flex-col w-full h-fit">
        { services.map(service=>(
          <SlideAnimationProvider key={service.id} className="my-2">
            <div className="w-full h-fit glass p-4 rounded-md">
              {/* <div className="abstract">
                <ServicesIcon2 />
              </div> */}
              <div>
                <h3 className="text-primary text-lg pb-3">{ service.title }</h3>
                <p>{ service.text }</p>
              </div>
            </div>
          </SlideAnimationProvider>
        ))}
      </div>
    </div>
  )
}
