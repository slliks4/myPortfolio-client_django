// Providers Import
import SlideAnimationProvider from "../../providers/SlideAnimationProvider"

// Default Function
export default function HomeShowCase({ number=0, text="" }) {
    return (
        <SlideAnimationProvider>
            <div className="w-full py-6 glass rounded-md flex flex-col items-center justify-center my-4 px-2">
                <span className='text-3xl text-primary font-bold pb-2'>{ number }</span>
                <h3 className='capitalize text-xl tracking-wider'>{ text }</h3>
            </div>
        </SlideAnimationProvider>
        
    )
}
