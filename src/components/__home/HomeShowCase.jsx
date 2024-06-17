// React Import
import { useEffect, useRef } from 'react';

// Library Imports
import { motion, useAnimation, useInView } from '../../imports/Library';

// Default Function
export default function HomeShowCase({ number=0, text="" }) {
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
            className='w-full py-6 glass rounded-md flex flex-col items-center justify-center my-4 px-2'
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
            <span className='text-3xl text-primary font-bold pb-2'>{ number }</span>
            <h3 className='capitalize text-xl tracking-wider'>{ text }</h3>
        </motion.div>
    )
}
