// Providers Import
import BoxThemeProvider from '../providers/BoxThemeProvider';

// Component Import
import LinkBtn from './LinkBtn';
import BuildSocialLinks from './BuildSocialLinks';

// Layouts Import
import DataLayout1 from '../layouts/__DataLayout1/DataLayout1';

// Default Function
export default function Contact() {
    return (
        <div className='w-full flex flex-col my-4'>    
            {/* Social Links */}
            <BoxThemeProvider children={
                <div className='w-full h-36 flex flex-col'>
                    <ul className='h-[calc(100%-40%)] flex justify-evenly items-center'>
                        <BuildSocialLinks />
                    </ul>
                    <div className='h-[calc(100%-60%)] w-4/5 overflow-hidden flex flex-col justify-end'>
                        <DataLayout1 title={'socials'} heading={'stay with me'} path={'/contact'} 
                        />
                    </div>
                </div>
            } className='mb-4'/>
            {/* Contact  */}
            <BoxThemeProvider children={
                <div className='flex items-center w-full h-36'>
                    <h3 className='text-lg font-semibold capitalize'>let's <br /> work together</h3>
                    <LinkBtn path={'/contact'} />
                </div>
            } />
        </div>
    )
}
