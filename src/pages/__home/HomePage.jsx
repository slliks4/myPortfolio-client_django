// Images Import
import { credentialPic } from '../../imports/Images';

// Providers Imports
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Component Imports
import HomeBlog from '../../components/__home/HomeBlog';
import HomeProfile from '../../components/__home/HomeProfile';
import HomeProjectLab from '../../components/__home/HomeProjectLab';
import HomeProjectPortfolio from '../../components/__home/HomeProjectPortfolio';
import HomeShowCase from '../../components/__home/HomeShowCase';
import DataLayout1 from '../../layouts/__DataLayout1/DataLayout1';
import Contact from '../../components/Contact';
                                                                                                                                        
// Default Function
export default function HomePage() {
    return (
        <div>
            <BoxThemeProvider children={ <HomeProfile /> } className='home-profile'/>
            <BoxThemeProvider children={
                <small>
                    <p className='uppercase text-lg font-bold text-primary'>latest portfolio and lab</p>
                </small>
            } className='text-center my-6 w-full'/>
            <BoxThemeProvider children={ <HomeProjectPortfolio /> } className='w-full'/>
            <BoxThemeProvider children={ <HomeProjectLab /> } className='w-full mt-6'/>
            <BoxThemeProvider children={
                <>
                    <HomeShowCase number={5} text='years experience' />
                    <HomeShowCase number={11} text='client worldwide' />
                    <HomeShowCase number={14} text='total projects' />
                </>
            } className='w-full flex flex-col my-6'/>
            <BoxThemeProvider children={ <HomeBlog /> } className='w-full'/>
            <BoxThemeProvider children={ <DataLayout1 title={'credentials'} heading={'more about me'} image={credentialPic} /> } className='w-full h-fit mt-6 data-layout1' />
            <Contact />
        </div>
    )
}
