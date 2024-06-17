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
  
// Style Import
// import './scss/HomePage.scss';

// Default Function
export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <BoxThemeProvider children={ <HomeProfile /> } className={'mt-4'} />
            <BoxThemeProvider children={
                <div>
                    <small>
                        <p className='uppercase text-lg font-bold text-primary'>latest portfolio and lab</p>
                    </small>
                </div>
            } className={'my-4 text-center w-full'}/>
            <BoxThemeProvider children={ <HomeProjectPortfolio /> } />
            <BoxThemeProvider children={ <HomeProjectLab /> } className={'mt-4'} />
            <BoxThemeProvider children={
                <>
                    <HomeShowCase number={5} text='years experience' />
                    <HomeShowCase number={11} text='client worldwide' />
                    <HomeShowCase number={14} text='total projects' />
                </>
            } className='w-full flex flex-col my-4'/>
            <BoxThemeProvider children={ <HomeBlog /> } />
            <BoxThemeProvider children={ 
                <div className='w-full h-fit data-layout1'>
                    <DataLayout1 title={'credentials'} heading={'more about me'} image={credentialPic} />
                </div>
            } className={'mt-4'} />
            <Contact />
        </div>
    )
}
