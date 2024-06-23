// Style Import
import './scss/HomePage.scss';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import HomeProfile from '../../components/__home/HomeProfile';
import HomeShowCase from '../../components/__home/HomeShowCase';
import Contact from '../../components/Contact';
import HomeProjectPortfolio from '../../components/__home/HomeProjectPortfolio';
import HomeProjectLab from '../../components/__home/HomeProjectLab';
import HomeBlog from '../../components/__home/HomeBlog';
import HomeCredential from '../../components/__home/HomeCredential';

// Default Function
export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <HomeProfile />
            {/* Marquee */}
            <BoxThemeProvider
                className={'my-4 text-center w-full'}
                children={
                    <small>
                        <p className='uppercase text-lg font-bold text-primary'>latest portfolio and lab</p>
                    </small>
                }
            />
            <HomeProjectPortfolio />
            <HomeProjectLab />
            <HomeShowCase />
            <HomeBlog />
            <HomeCredential />
            <Contact />
        </div>
    )
}
