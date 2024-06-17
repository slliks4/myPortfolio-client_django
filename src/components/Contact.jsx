// Providers Imports
import BoxThemeProvider from '../providers/BoxThemeProvider';

// Component Imports
import LinkBtn from './LinkBtn';
import BuildSocialLinks from './BuildSocialLinks';

// Default Function
export default function Contact() {
    return (
        <div className='w-full flex flex-col my-6'>    
            <BoxThemeProvider children={
                <>
                    <ul className='h-[calc(100%-60%)] flex justify-evenly items-center'>
                        <BuildSocialLinks />
                    </ul>
                    <div className='h-[calc(100%-40%)] w-4/5 overflow-hidden flex flex-col justify-end'>
                        <small> 
                            <p className='text-lg text-primary font-semibold capitalize pb-2'>socials</p>
                        </small>
                        <h3 className='text-md capitalize'>stay with me</h3>
                    </div>
                    <LinkBtn path={'/contact'} />
                </>
            } className='mb-6 w-full h-40 flex flex-col'/>
            <BoxThemeProvider children={
                <>
                    <h3 className='text-lg font-semibold capitalize'>let's <br /> work together</h3>
                    <LinkBtn path={'/contact'} />
                </>
            } className='flex items-center w-full h-40'/>
        </div>
    )
}
