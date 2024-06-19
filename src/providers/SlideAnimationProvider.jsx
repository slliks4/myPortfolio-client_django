// React Import
import { useEffect, useRef } from 'react';

// Library Import
import { motion, useAnimation, useInView } from '../imports/Library';

// Default Function
export default function SlideAnimationProvider({ children }) {
    const showCaseRef = useRef(null);
    const isShowCaseInView = useInView(showCaseRef, {once:true});
    const mainControl = useAnimation();

    useEffect(()=>{
        if(isShowCaseInView){
            mainControl.start("visible");
        }
    },[isShowCaseInView, mainControl])

    return (
        <motion.div
            className='w-full h-fit'
            ref={showCaseRef}
            variants={
                {
                    hidden: { opacity:0, x:75 },
                    visible: { opacity:1, x:0 }
                }
            }
            initial="hidden"
            animate={mainControl}
            transition={{ duration:0.2, delay:0.5 }}
        >
            { children }
        </motion.div>
    )
}