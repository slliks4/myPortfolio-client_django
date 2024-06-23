// Providers Import
import BoxThemeProvider from "../../providers/BoxThemeProvider";
import SlideAnimationProvider from "../../providers/SlideAnimationProvider"

// Default Function
export default function HomeShowCase() {
    const dataArray = [
        { number: 5, text: 'years experience' },
        { number: 11, text: 'client worldwide' },
        { number: 14, text: 'total projects' }
    ];

    return (
        <BoxThemeProvider
            className='w-full flex flex-col'
            children={
                <>
                    { dataArray.map((data, index)=>(
                        <SlideAnimationProvider key={index}>
                            <div className="w-full py-6 glass rounded-md flex flex-col items-center justify-center my-4 px-2">
                                <span className='text-3xl text-primary font-bold pb-2'>{ data.number }</span>
                                <h3 className='capitalize text-xl tracking-wider'>{ data.text }</h3>
                            </div>
                        </SlideAnimationProvider>
                    )) }
                </>
            }
        />
        
    )
}
